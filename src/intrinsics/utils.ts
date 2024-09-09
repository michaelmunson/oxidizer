import { camelToDashed } from "../utils";
import {
    type CreateElementParameters,
    type CreateIntrinsicParameters,
    type HTMLChild,
    isAttributes,
    isHTMLChildren,
    type Attributes,
    type HTMLIntrinsicTagName,
    isHTMLChild,
    HTMLTagName,
    HTMLElementFromTagName
} from "./types";
import {isProps} from "../props/utils";
import { __PROPS_RENDER_MAP__ } from "../props/renderMap";
import { HTMLCustomElementTagName } from "../intrinsics/types";
import { Configuration } from "../config";


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
}

export function setElementChildren<T extends HTMLElement>(element:T, ...children:HTMLChild[]){
    for (const _children of children){
        if (Array.isArray(_children)){
            for (const child of _children){
                setElementChildren(element, child);
            }
        }
        else if (typeof _children === "string"){
            element.innerHTML = _children;
        }
        else if (_children instanceof HTMLElement){
            element.append(_children);
        }
        else {
            throw new TypeError('child not of type HTMLChildren')
        }
    }

}

export function setElementProperties<T extends HTMLElement>(element:T, ...params:CreateElementParameters<T>){
    const [arg0, ...arg1] = params;
    if (isAttributes(arg0)){
        setElementAttributes(element, arg0 as Attributes<T>);
        if (isHTMLChildren(arg1)){
            element.innerHTML = "";
            setElementChildren(element, ...arg1);
        }
    }
    else if (isHTMLChildren(arg0)){
        element.innerHTML = "";
        setElementChildren(element, ...arg0);
    }
    else if (isHTMLChild(arg0)){
        element.innerHTML = "";
        setElementChildren(element, arg0);
    }
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

export function createIntrinsicElement<T extends HTMLTagName, Props extends {} = any>(
    tagName: T,
    ...params: CreateIntrinsicParameters<HTMLElementFromTagName<T>, Props>
): HTMLElementFromTagName<T> {
    const element = createElement(tagName);
    
    if (isProps<Props>(params[0]) && typeof params[1] === "function") {
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

export function createIntrinsicElementComponent<T extends HTMLTagName, CT extends HTMLCustomElementTagName, Props extends {} = any>(
    tagName: T,
    customElementTagName: CT,
    ...params: CreateIntrinsicParameters<HTMLElementFromTagName<T>, Props>
): HTMLElementFromTagName<T> {
    const element = createElement(tagName, customElementTagName);
    
    if (isProps<Props>(params[0]) && typeof params[1] === "function") {
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

export function createElementFactory<T extends HTMLTagName>(tagName: T) {
    return <P extends {} = any>(
        ...params: CreateIntrinsicParameters<HTMLElementFromTagName<T>, P>
    ) => createIntrinsicElement(tagName, ...params)
}