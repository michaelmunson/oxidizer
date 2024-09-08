import { type CreateElementParameters, type CreateIntrinsicParameters, type HTMLChild, type Attributes, type HTMLIntrinsicTagName, HTMLTagName, HTMLElementFromTagName } from "./types";
import { HTMLCustomElementTagName } from "../intrinsics/types";
export declare function setElementAttributes<T extends HTMLElement>(element: T, attrs: Attributes<T>): void;
export declare function setElementChildren<T extends HTMLElement>(element: T, ...children: HTMLChild[]): void;
export declare function setElementProperties<T extends HTMLElement>(element: T, ...params: CreateElementParameters<T>): void;
export declare function createElement<T extends HTMLIntrinsicTagName | HTMLCustomElementTagName>(tagName: T): HTMLElementFromTagName<T>;
export declare function createIntrinsicElement<T extends HTMLTagName, Props extends {} = any>(tagName: T, ...params: CreateIntrinsicParameters<HTMLElementFromTagName<T>, Props>): HTMLElementFromTagName<T>;
export declare function createElementFactory<T extends HTMLTagName>(tagName: T): <P extends {} = any>(...params: CreateIntrinsicParameters<HTMLElementFromTagName<T>, P>) => HTMLElementFromTagName<T>;
