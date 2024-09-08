import { Intrinsics } from "./intrinsics";
export declare class Component<T = undefined> extends HTMLElement {
    props: T;
    Children: Intrinsics.Children<any>;
    static observedAttributes?: string[];
    render?(): Intrinsics.Children<any>;
    connectedCallback?(): void;
    disconnectedCallback?(): void;
    adoptedCallback?(): void;
    attributeChangedCallback?(name?: string, oldValue?: string, newValue?: string): void;
}
export declare function createElement<Props>(tagName: string, elementClass: typeof Component<Props>): (fields?: Intrinsics.Fields<HTMLElement, Props> | Intrinsics.Children<Props>, children?: Intrinsics.Children<Props>) => Intrinsics.Intrinsic<HTMLElement, Props>;
