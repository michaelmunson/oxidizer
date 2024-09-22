import { type RenderStaticElementParameters, type RenderParameters, type HTMLChild, type Attributes, type HTMLIntrinsicTagName, HTMLTagName, HTMLElementFromTagName, RenderFragmentParameters, HTMLNode } from "./types";
import { HTMLCustomElementTagName } from "../intrinsics/types";
import { Props } from "../props/types";
/** GENERAL EXPORTED UTILITIES */
/****** HTML ELEMENTS */
export declare function setElementAttributes<T extends HTMLElement>(element: T, attrs: Attributes<T>): T;
export declare function setElementChildren<T extends HTMLNode>(element: T, ...children: HTMLChild[]): T;
export declare function setElementProperties<T extends HTMLElement>(element: T, ...params: RenderStaticElementParameters<T>): T;
export declare function createElement<T extends HTMLIntrinsicTagName | HTMLCustomElementTagName>(tagName: T, customElementTagName?: HTMLCustomElementTagName): HTMLElementFromTagName<T>;
export declare function createIntrinsicElement<T extends HTMLTagName, P extends Props = any>(tagName: T, ...params: RenderParameters<HTMLElementFromTagName<T>, P>): HTMLElementFromTagName<T>;
/****** DOCUMENT FRAGMENTS */
export declare function createFragment(...children: RenderFragmentParameters): DocumentFragment;
/** CUSTOM ELEMENTS */
export declare function createIntrinsicElementComponent<T extends HTMLTagName, CT extends HTMLCustomElementTagName, P extends Props = any>(tagName: T, customElementTagName: CT, ...params: RenderParameters<HTMLElementFromTagName<T>, P>): HTMLElementFromTagName<T>;
export declare function createShadowElement<T extends HTMLTagName, P extends Props = any>(tagName: T, options: ShadowRootInit, ...params: RenderParameters<HTMLElementFromTagName<T>, P>): HTMLElementFromTagName<T>;
export declare function createElementFactory<T extends HTMLTagName>(tagName: T): <P extends Props = any>(...params: RenderParameters<HTMLElementFromTagName<T>, P>) => HTMLElementFromTagName<T>;
/** LIB EXPORTS */
export declare function ox<T extends HTMLElement>(elem: T | string): <P extends Props>(...params: RenderParameters<T, P>) => T;
