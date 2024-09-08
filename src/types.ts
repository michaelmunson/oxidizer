import type { Properties as _CSSObject } from "csstype";

// Generic 
export type Optional<T> = {
    [P in keyof T]?: T[P]
}

export type AnyObject = {[key:string]:any}

export type CSSObject = _CSSObject;

export type CSSProperties = CSSObject|string

export type HTMLAppendable = HTMLElement | HTMLElement[] | string

export namespace Check {
    export function isObject(something:any) : boolean {
        return typeof something === "object" && something.toString() === "[object Object]";
    }
    export function isString(something:any) {
        return typeof something === "string"
    }
    export function isHTMLElement(something:any) : something is HTMLElement {
        return something instanceof HTMLElement
    }
    export function isFunction(something:any){
        return typeof something === "function"
    }
}
