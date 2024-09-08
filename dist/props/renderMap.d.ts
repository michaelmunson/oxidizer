import { RenderFunction } from "../intrinsics/types";
export declare class RenderMap<T extends {}> extends Map<HTMLElement, RenderFunction<HTMLElement, T>> {
    constructor();
    renderEach(props: T): void;
}
export declare const __PROPS_RENDER_MAP__: Map<object, RenderMap<any>>;
