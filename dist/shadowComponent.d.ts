import { Intrinsics } from "./intrinsics";
import { OxidizerCSS } from "./utils/css";
export declare class ShadowComponent<T = undefined> extends HTMLElement {
    props: T;
    Children: Intrinsics.Children<any>;
    static observedAttributes?: string[];
    css?: OxidizerCSS.StyleSheetArgument;
    styles?(): OxidizerCSS.StyleSheetArgument;
    render?(): Intrinsics.Children<any>;
    connectedCallback?(): void;
    disconnectedCallback?(): void;
    adoptedCallback?(): void;
    attributeChangedCallback?(name?: string, oldValue?: string, newValue?: string): void;
}
export declare function createShadowElement<Props>(tagName: string, elementClass: typeof ShadowComponent<Props>, options?: {
    mode: 'open' | 'closed';
}): (fields?: Intrinsics.Fields<HTMLElement, Props> | Intrinsics.Children<Props>, children?: Intrinsics.Children<Props>) => Intrinsics.Intrinsic<HTMLElement, Props>;
