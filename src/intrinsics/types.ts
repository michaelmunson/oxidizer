import { Properties as CSSProperties } from "csstype"
import { isProps } from "../props/utils";

export type HTMLIntrinsicTagName = keyof HTMLElementTagNameMap;

export type HTMLCustomElementTagName = `${string}-${string}`;

export type HTMLTagName = HTMLIntrinsicTagName | HTMLCustomElementTagName;

export type HTMLElementFromTagName<T extends HTMLIntrinsicTagName | HTMLCustomElementTagName> = T extends HTMLIntrinsicTagName ? HTMLElementTagNameMap[T] : HTMLElement

export type HTMLEventFunction<T extends HTMLElement, FN extends keyof T> = (
    this: Exclude<T, GlobalEventHandlers>,
    event: Parameters<Exclude<T[FN], null> extends (e: any) => any ? Exclude<T[FN], null> : never>[0]
) => any

export type Attributes<T extends HTMLElement> = {[key:`${string}-${string}`]: string} & Partial<{
    [K in keyof T]: K extends `on${string}`
    ? HTMLEventFunction<T, K>
    : K extends 'style'
    ? CSSProperties | string
    : T[K]
}>;


export type HTMLChild = (
    string |
    HTMLElement |
    HTMLChild[]
)

export type RenderFunction<T extends HTMLElement, P extends {} = any> = (
    (this: T, props: P) => CreateElementParameters<T>
)

export type CreateElementParameters<T extends HTMLElement> = (
    [...children: HTMLChild[]] |
    [attributes?: Attributes<T>, ...children: HTMLChild[]]
)

export type CreatePropifiedElementParameters<T extends HTMLElement, Props extends {} = any> = [
    props: Props, renderFn: RenderFunction<T, Props>
]

export type CreateIntrinsicParameters<T extends HTMLElement, Props extends {} = any> = (
    CreateElementParameters<T> |
    CreatePropifiedElementParameters<T, Props>
)

export function isHTMLChild(params: any): params is HTMLChild {
    return (
        typeof params === "string" ||
        params instanceof HTMLElement ||
        Array.isArray(params)
    )
}

export function isHTMLChildren(params: any): params is HTMLChild[] {
    return (
        Array.isArray(params)
    )
}

export function isAttributes<T extends HTMLElement>(params: any): params is Attributes<T> {
    return !!params && !isHTMLChildren(params) && !isHTMLChild(params) && !isProps(params)
}
