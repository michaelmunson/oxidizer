import { Properties as CSSProperties } from "csstype";
export type HTMLIntrinsicTagName = keyof HTMLElementTagNameMap;
export type HTMLCustomElementTagName = `${string}-${string}`;
export type HTMLTagName = HTMLIntrinsicTagName | HTMLCustomElementTagName;
export type HTMLElementFromTagName<T extends HTMLIntrinsicTagName | HTMLCustomElementTagName> = T extends HTMLIntrinsicTagName ? HTMLElementTagNameMap[T] : HTMLElement;
export type Attributes<T extends HTMLElement> = Partial<Omit<T, "style"> & {
    style?: CSSProperties | string;
}>;
export type HTMLChild = (string | HTMLElement | HTMLChild[]);
export type RenderFunction<T extends HTMLElement, P extends {} = any> = ((this: T, props: P) => CreateElementParameters<T>);
export type CreateElementParameters<T extends HTMLElement> = ([
    ...children: HTMLChild[]
] | [
    attributes?: Attributes<T>,
    ...children: HTMLChild[]
]);
export type CreatePropifiedElementParameters<T extends HTMLElement, Props extends {} = any> = [
    props: Props,
    renderFn: RenderFunction<T, Props>
];
export type CreateIntrinsicParameters<T extends HTMLElement, Props extends {} = any> = (CreateElementParameters<T> | CreatePropifiedElementParameters<T, Props>);
export declare function isHTMLChild(params: any): params is HTMLChild;
export declare function isHTMLChildren(params: any): params is HTMLChild[];
export declare function isAttributes<T extends HTMLElement>(params: any): params is Attributes<T>;
