import { Properties as CSSProperties } from "csstype"
import { isProps } from "../props/utils";
import { type Props } from "../props/types";

export type HTMLIntrinsicTagName = keyof HTMLElementTagNameMap;

export type HTMLCustomElementTagName = `${string}-${string}`;

export type HTMLTagName = HTMLIntrinsicTagName | HTMLCustomElementTagName;

export type HTMLElementFromTagName<T extends HTMLIntrinsicTagName | HTMLCustomElementTagName> = T extends HTMLIntrinsicTagName ? HTMLElementTagNameMap[T] : HTMLElement

export type HTMLEventFunction<T extends HTMLElement, FN extends keyof T> = (
    this: Exclude<T, GlobalEventHandlers>,
    event: Parameters<Exclude<T[FN], null> extends (e: any) => any ? Exclude<T[FN], null> : never>[0]
) => any

export type Attributes<T extends HTMLElement> = { [key: `${string}-${string}`]: string } & Partial<{
    [K in keyof T]: K extends `on${string}`
    ? HTMLEventFunction<T, K>
    : K extends 'style'
    ? CSSProperties | string
    : T[K]
}>;

export type HTMLPrimitive = (
    string |
    number |
    boolean |
    null |
    undefined
)

export type HTMLNode = (
    HTMLElement |
    DocumentFragment
)

export type DOMNode = (
    HTMLNode |
    Text |
    Element | 
    Node
)

export type HTMLChildren = (
    HTMLChild[] |
    HTMLCollection | 
    NodeList
)

export type HTMLChild = (
    HTMLPrimitive |
    DOMNode |
    HTMLChildren |
    DocumentFragment
)

export type PropsRenderFunction<T extends HTMLElement, P extends Props = any> = (
    (this: T, props: P) => RenderStaticElementParameters<T>
)

export type RenderStaticElementParameters<T extends HTMLElement> = (
    [...children: HTMLChild[]] |
    [attributes?: Attributes<T>, ...children: HTMLChild[]]
)

export type RenderReactiveElementParameters<T extends HTMLElement, P extends Props = any> = [
    props: P, renderFn: PropsRenderFunction<T, P>
]

export type RenderParameters<T extends HTMLElement, P extends Props = any> = (
    RenderStaticElementParameters<T> |
    RenderReactiveElementParameters<T, P>
)

export type RenderFragmentParameters = [...children: HTMLChild[]]


export function isAttributes<T extends HTMLElement>(params: any): params is Attributes<T> {
    return !!params && !isHTMLChildren(params) && !isHTMLChild(params) && !isProps(params)
}
export function isHTMLPrimitive(child: any): child is HTMLPrimitive {
    return (
        typeof child === "string" ||
        typeof child === "undefined" ||
        typeof child === "number" ||
        typeof child === "boolean" ||
        child === null
    )
}
export function isHTMLElement(element: any) : element is HTMLElement {
    return element instanceof HTMLElement
}
export function isDocumentFragment(fragment:any) : fragment is DocumentFragment {
    return fragment instanceof DocumentFragment;
}
export function isHTMLNode(node:any) : node is HTMLNode {
    return (
        isHTMLElement(node) ||
        isDocumentFragment(node)
    )
}
export function isDOMNode(node:any) : node is DOMNode {
    return (
        isHTMLElement(node) ||
        node instanceof Text ||
        node instanceof Element
    )
}
export function isHTMLChild(params: any): params is HTMLChild {
    return (
        isHTMLPrimitive(params) ||
        isDOMNode(params) ||
        isHTMLChildren(params) ||
        isDocumentFragment(params)
    )
}
export function isHTMLChildArray(params:any) : params is HTMLChild[] {
    return (
        Array.isArray(params) &&
        params.reduce((acc, curr) => acc && isHTMLChild(curr), true)
    )
}
export function isHTMLChildren(params: any): params is HTMLChildren {
    return (
        isHTMLChildArray(params) ||
        params instanceof NodeList ||
        params instanceof HTMLCollection
    )
}

