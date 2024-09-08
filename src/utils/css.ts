import { AnyObject, CSSObject, CSSProperties } from "../types";
import { camelToDashed, dashedToCamel, generateRandomId } from "./general";



export namespace OxidizerCSS {
    export type StyleSheetObject = {
        [key:string]: CSSObject | StyleSheetObject;
    } | {
        [key in keyof HTMLElementTagNameMap]: CSSObject|StyleSheetObject
    };
    export type StyleSheetArgument = StyleSheetObject
                                    | (() => StyleSheetObject)
    export type CompiledStyleSheet = {
        [key: string]: CSSObject
    }
    export function parseObject(styles: CSSProperties) {
        let styleString = "";
        if (typeof styles === "string") {
            return styles;
        } else {
            for (const property in styles) {
                const value = (styles as any)[property];
                const dashedProperty = camelToDashed(property);
                styleString += `${dashedProperty}:${value};`;
            }
        }
        return styleString;
    }
    export function parseString(styles: string) {
        const styleObject: { [key: string]: string } = {};
        const split = styles.split(";");
        for (const style of split) {
            const [property, value] = style.split(":")
            const parsedProperty = dashedToCamel(property);
            styleObject[parsedProperty] = value;
        }
        return styleObject;
    }
    const formatSelector = (selector:string) => {
        selector = selector.trim();
        if (selector.startsWith("&")){
            return selector.slice(1);
        } else {
            return " " + selector;
        }
    }
    export function compile(styles: StyleSheetObject): CompiledStyleSheet {
        const flattened: AnyObject = {};
        Object.entries(styles).forEach(([key, value]) => {
            if (typeof value === "object") {
                flattened[key] = {};
                Object.entries(value).forEach(([subKey, subValue]) => {
                    if (typeof subValue === "object") {
                        Object.assign(flattened, compile({
                            [key + formatSelector(subKey)]: subValue 
                        }))
                    } else {
                        flattened[key][subKey] = subValue;
                    }
                })
            }
        })
        return flattened
    }
    export function stringify(styles: StyleSheetObject): string {
        const compiled = compile(styles); 
        const rules = [];
        for (const selector in compiled){
            rules.push(`${selector} {\n  ${Object.entries(compiled[selector]).map(([key,val]) => `${camelToDashed(key)}:${val};`).join("\n  ")}\n}`)
        }
        return rules.join('\n'); 
    }

    const styleSheets = new Map<StyleSheet,CSSStyleSheet>();

    Object.assign(window, {styleSheets});

    export class StyleSheet extends Map<string, CSSObject> {
        id:string
        options:CSSStyleSheetInit
        styleElement?:HTMLStyleElement
        adoptedParent?:Document|ShadowRoot
        constructor(styles: StyleSheetObject|string, options?:CSSStyleSheetInit) {
            super();
            this.options = options ?? {};
            this.id = 'oxss-'+generateRandomId(32, [...styleSheets.keys()].map(ss => ss.id));
            this.init(styles, options);
        }

        get cssStyleSheet(){
            return styleSheets.get(this) as CSSStyleSheet;
        }

        private init(styles: StyleSheetObject|string, options?:CSSStyleSheetInit) {
            if (typeof styles === "string"){
                const cssStyleSheet = new CSSStyleSheet(options);
                cssStyleSheet.replaceSync(styles);
                styleSheets.set(this, cssStyleSheet)
            } else {
                const compiled = OxidizerCSS.compile(styles);
                for (const key in compiled) {
                    super.set(key, compiled[key]);
                }
                styleSheets.set(this, this.toStyleSheet(options));
            }
        }
    
        private toStyleSheet(options?:CSSStyleSheetInit){
            const stylesheet = new CSSStyleSheet(options);
            stylesheet.replaceSync(this.toString());
            return stylesheet;
        }

        private updateCSSStyleSheet(){
            this.cssStyleSheet?.replaceSync(this.toString())
            if (this.styleElement)
                this.render();
        }

        destroy(){
            if (this.adoptedParent) {
                this.adoptedParent.adoptedStyleSheets.forEach((ss, index) => {
                    if (ss === this.cssStyleSheet){
                        this.adoptedParent?.adoptedStyleSheets?.splice(index, 1);
                    }
                })
            }
            styleSheets.delete(this);
        }

        set(key:string, value:CSSObject){
            super.set(key, value);
            this.updateCSSStyleSheet();
            return this;
        }

        add(styles:StyleSheetObject){
            const compiled = OxidizerCSS.compile(styles);
            for (const key in compiled) {
                this.set(key, compiled[key]);
            }
            return this;
        }

        toString(){
            const rules = []; 
            for (const [selector, styles] of this){
                rules.push(`${selector} {\n  ${Object.entries(styles).map(([key,val]) => `${camelToDashed(key)}:${val};`).join("\n  ")}\n}`)
            }
            return rules.join("\n");
        }
    
        toElement(){
            const styleSheetElement = document.createElement('style');
            styleSheetElement.innerHTML = this.toString();
            styleSheetElement.id = this.id;
            return styleSheetElement;  
        }

        adopt(node?:Document|ShadowRoot){
            node = node ?? document;
            this.adoptedParent = node;
            if (this.cssStyleSheet)
                node.adoptedStyleSheets.push(this.cssStyleSheet);
            return this;
        }

        render(position:"append"|"prepend"="append"){
            const element = this.toElement();
            if (this.styleElement)
                this.styleElement.replaceWith(element);
            else if (position === "prepend")
                document.head.prepend(element);
            else
                document.head.append(element);
            this.styleElement = element;
            return this;
        }
    }
}

export module OxidizerStyleSheet {}