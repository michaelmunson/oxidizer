"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OxidizerCSS = void 0;
const general_1 = require("./general");
var OxidizerCSS;
(function (OxidizerCSS) {
    function parseObject(styles) {
        let styleString = "";
        if (typeof styles === "string") {
            return styles;
        }
        else {
            for (const property in styles) {
                const value = styles[property];
                const dashedProperty = (0, general_1.camelToDashed)(property);
                styleString += `${dashedProperty}:${value};`;
            }
        }
        return styleString;
    }
    OxidizerCSS.parseObject = parseObject;
    function parseString(styles) {
        const styleObject = {};
        const split = styles.split(";");
        for (const style of split) {
            const [property, value] = style.split(":");
            const parsedProperty = (0, general_1.dashedToCamel)(property);
            styleObject[parsedProperty] = value;
        }
        return styleObject;
    }
    OxidizerCSS.parseString = parseString;
    const formatSelector = (selector) => {
        selector = selector.trim();
        if (selector.startsWith("&")) {
            return selector.slice(1);
        }
        else {
            return " " + selector;
        }
    };
    function compile(styles) {
        const flattened = {};
        Object.entries(styles).forEach(([key, value]) => {
            if (typeof value === "object") {
                flattened[key] = {};
                Object.entries(value).forEach(([subKey, subValue]) => {
                    if (typeof subValue === "object") {
                        Object.assign(flattened, compile({
                            [key + formatSelector(subKey)]: subValue
                        }));
                    }
                    else {
                        flattened[key][subKey] = subValue;
                    }
                });
            }
        });
        return flattened;
    }
    OxidizerCSS.compile = compile;
    function stringify(styles) {
        const compiled = compile(styles);
        const rules = [];
        for (const selector in compiled) {
            rules.push(`${selector} {\n  ${Object.entries(compiled[selector]).map(([key, val]) => `${(0, general_1.camelToDashed)(key)}:${val};`).join("\n  ")}\n}`);
        }
        return rules.join('\n');
    }
    OxidizerCSS.stringify = stringify;
    const styleSheets = new Map();
    Object.assign(window, { styleSheets });
    class StyleSheet extends Map {
        id;
        options;
        styleElement;
        adoptedParent;
        constructor(styles, options) {
            super();
            this.options = options ?? {};
            this.id = 'oxss-' + (0, general_1.generateRandomId)(32, [...styleSheets.keys()].map(ss => ss.id));
            this.init(styles, options);
        }
        get cssStyleSheet() {
            return styleSheets.get(this);
        }
        init(styles, options) {
            if (typeof styles === "string") {
                const cssStyleSheet = new CSSStyleSheet(options);
                cssStyleSheet.replaceSync(styles);
                styleSheets.set(this, cssStyleSheet);
            }
            else {
                const compiled = OxidizerCSS.compile(styles);
                for (const key in compiled) {
                    super.set(key, compiled[key]);
                }
                styleSheets.set(this, this.toStyleSheet(options));
            }
        }
        toStyleSheet(options) {
            const stylesheet = new CSSStyleSheet(options);
            stylesheet.replaceSync(this.toString());
            return stylesheet;
        }
        updateCSSStyleSheet() {
            this.cssStyleSheet?.replaceSync(this.toString());
            if (this.styleElement)
                this.render();
        }
        destroy() {
            if (this.adoptedParent) {
                this.adoptedParent.adoptedStyleSheets.forEach((ss, index) => {
                    if (ss === this.cssStyleSheet) {
                        this.adoptedParent?.adoptedStyleSheets?.splice(index, 1);
                    }
                });
            }
            styleSheets.delete(this);
        }
        set(key, value) {
            super.set(key, value);
            this.updateCSSStyleSheet();
            return this;
        }
        add(styles) {
            const compiled = OxidizerCSS.compile(styles);
            for (const key in compiled) {
                this.set(key, compiled[key]);
            }
            return this;
        }
        toString() {
            const rules = [];
            for (const [selector, styles] of this) {
                rules.push(`${selector} {\n  ${Object.entries(styles).map(([key, val]) => `${(0, general_1.camelToDashed)(key)}:${val};`).join("\n  ")}\n}`);
            }
            return rules.join("\n");
        }
        toElement() {
            const styleSheetElement = document.createElement('style');
            styleSheetElement.innerHTML = this.toString();
            styleSheetElement.id = this.id;
            return styleSheetElement;
        }
        adopt(node) {
            node = node ?? document;
            this.adoptedParent = node;
            if (this.cssStyleSheet)
                node.adoptedStyleSheets.push(this.cssStyleSheet);
            return this;
        }
        render(position = "append") {
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
    OxidizerCSS.StyleSheet = StyleSheet;
})(OxidizerCSS || (exports.OxidizerCSS = OxidizerCSS = {}));
