import type { Properties as _CSSObject } from "csstype";
export type Optional<T> = {
    [P in keyof T]?: T[P];
};
export type AnyObject = {
    [key: string]: any;
};
export type CSSObject = _CSSObject;
export type CSSProperties = CSSObject | string;
export type HTMLAppendable = HTMLElement | HTMLElement[] | string;
export declare namespace Check {
    function isObject(something: any): boolean;
    function isString(something: any): something is string;
    function isHTMLElement(something: any): something is HTMLElement;
    function isFunction(something: any): boolean;
}
