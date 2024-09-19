import { camelToDashed } from "../utils/_helpers";
import {
    type RenderStaticElementParameters,
    type RenderParameters,
    type HTMLChild,
    isAttributes,
    isHTMLChildren,
    type Attributes,
    type HTMLIntrinsicTagName,
    isHTMLChild,
    HTMLTagName,
    HTMLElementFromTagName,
    HTMLPrimitive,
    isHTMLPrimitive,
    RenderFragmentParameters,
    HTMLNode,
    isDocumentFragment,
    isDOMNode
} from "./types";
import {isProps} from "../props/utils";
import { __PROPS_RENDER_MAP__ } from "../props/renderMap";
import { HTMLCustomElementTagName } from "../intrinsics/types";
import { Configuration } from "../config";
import { Props } from "../props/types";
import { html } from "../utils";
import { DIV } from ".";
import { createProps } from "../props";


class RenderError extends TypeError {
    constructor(message:string){
        super(message);
        this.name = "RenderError";
    }
}
/** GENERAL EXPORTED UTILITIES */

/****** HTML ELEMENTS */
export function setElementAttributes<T extends HTMLElement>(element: T, attrs: Attributes<T>) {
    let attr: keyof Attributes<T>;
    for (attr in attrs) {
        try {
            let attrValue = attrs[attr];
            if (!(attr in element) && typeof attrValue === "string"){
                element.setAttribute(attr, attrValue);
            }
            else if (attr === "style" && typeof attrValue === "object"){
                const style = Object.entries(attrValue as object).map(([key,val]) => `${camelToDashed(key)}:${val};`).join("\n  ");
                (element as any).style = style;
            } else {
                (element as any)[attr] = attrValue;
            }
        }
        catch (e){
            console.warn(e);
        }
    }
    return element;
}

export function setElementChildren<T extends HTMLNode>(element:T, ...children:HTMLChild[]){
    for (const _children of children){
        if (isHTMLChildren(_children)){
            for (const child of [..._children]){
                setElementChildren(element, child);
            }
        }
        else if (isHTMLPrimitive(_children)){
            const htmlString = (typeof _children === "boolean" || !_children) ? "" : _children.toString(); 
            const node = html`${htmlString}`;
            element.appendChild(node);
        }
        else if (isDOMNode(_children)){
            element.appendChild(_children);
        }
        else {
            throw new RenderError('child not of type HTMLChildren')
        }
    }
    return element;
}

export function setElementProperties<T extends HTMLElement>(element:T, ...params:RenderStaticElementParameters<T>){
    const [arg0, ...arg1] = params;
    if (isAttributes(arg0)){
        setElementAttributes(element, arg0 as Attributes<T>);
        if (isHTMLChildren(arg1)){
            element.innerHTML = "";
            setElementChildren(element, ...arg1);
        }
        else if (isHTMLChild(arg1)){
            element.innerHTML = "";
            setElementChildren(element, arg1);
        }
    }
    else if (params.length >= 0 && isHTMLChildren(params)) {
        element.innerHTML = "";
        setElementChildren(element, ...params);
    }
    else if (isHTMLChildren(arg0)){
        element.innerHTML = "";
        setElementChildren(element, ...arg0);
    }
    else if (isHTMLChild(arg0)){
        element.innerHTML = "";
        setElementChildren(element, arg0);
    }
    return element;
}

export function createElement<T extends HTMLIntrinsicTagName | HTMLCustomElementTagName>(tagName: T, customElementTagName?:HTMLCustomElementTagName) : HTMLElementFromTagName<T> {
    const element = customElementTagName ? document.createElement(tagName, {is: customElementTagName}) : document.createElement(tagName);
    if (Configuration.get().components.autoUpgrade){
        if (customElements.get(tagName)) {
            customElements.upgrade(element);
        }
    }
    return element as HTMLElementFromTagName<T>;
}

export function createIntrinsicElement<T extends HTMLTagName, P extends Props = any>(
    tagName: T,
    ...params: RenderParameters<HTMLElementFromTagName<T>, P>
): HTMLElementFromTagName<T> {
    const element = createElement(tagName);
    ox(element)(...params);
    return element
}

/****** DOCUMENT FRAGMENTS */
export function createFragment(
    ...children: RenderFragmentParameters
){
    const fragment = document.createDocumentFragment();
    setElementChildren(fragment, ...children);
    return fragment;
}

/** CUSTOM ELEMENTS */
export function createIntrinsicElementComponent<T extends HTMLTagName, CT extends HTMLCustomElementTagName, P extends Props = any>(
    tagName: T,
    customElementTagName: CT,
    ...params: RenderParameters<HTMLElementFromTagName<T>, P>
): HTMLElementFromTagName<T> {
    const element = createElement(tagName, customElementTagName);
    
    if (isProps<P>(params[0]) && typeof params[1] === "function") {
        const [props, renderFn] = params;
        __PROPS_RENDER_MAP__.get(props)?.set(element, renderFn as any);
        const elementProperties = renderFn.call(element as any, props);
        setElementProperties(element, ...elementProperties);
    }
    else {
        setElementProperties(element, ...params as any);
    }
    return element
}

export function createShadowElement<T extends HTMLTagName, P extends Props = any>(
    tagName: T,
    options:ShadowRootInit,
    ...params: RenderParameters<HTMLElementFromTagName<T>, P>
): HTMLElementFromTagName<T> {
    const element = createElement(tagName);
    const shadow:HTMLElementFromTagName<T> = element.attachShadow(options) as any;
    if (isProps<P>(params[0]) && typeof params[1] === "function") {
        const [props, renderFn] = params;
        __PROPS_RENDER_MAP__.get(props)?.set(shadow, renderFn as any);
        const elementProperties = renderFn.call(shadow as any, props);
        setElementProperties(shadow, ...elementProperties);
    }
    else {
        setElementProperties(shadow, ...params as any);
    }

    return element
}

export function createElementFactory<T extends HTMLTagName>(tagName: T) {
    return <P extends Props = any>(
        ...params: RenderParameters<HTMLElementFromTagName<T>, P>
    ) => createIntrinsicElement(tagName, ...params)
}

/** LIB EXPORTS */
export function ox<T extends HTMLElement>(element:T){
    return <P extends Props>(...params:RenderParameters<T,P>) => {
        if (isProps<P>(params[0]) && typeof params[1] === "function") {
            const [props, renderFn] = params;
            __PROPS_RENDER_MAP__.get(props)?.set(element, renderFn as any);
            const elementProperties = renderFn.call(element as any, props);
            setElementProperties(element, ...elementProperties);
        }
        else {
            setElementProperties(element, ...params as any);
        }
        return element;
    }
}
