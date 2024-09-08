import { Intrinsics } from "./intrinsics";
type DOMElement = Intrinsics.Intrinsic | Node;
export type RenderFunction<T extends DOMElement = DOMElement, Props = {
    [key: string]: any;
}> = (props: Props) => T | T[];
declare class ChildRenderMap extends Map<DOMElement | DOMElement[], RenderFunction> {
    constructor();
}
declare class RenderMap extends Map<DOMElement, ChildRenderMap> {
    constructor();
    initialize(element: DOMElement): ChildRenderMap;
    append(element: DOMElement, childElement: DOMElement, renderFunction: RenderFunction): void;
    render(element: DOMElement): void;
}
export declare const OxidizerRenderMap: RenderMap;
export {};
