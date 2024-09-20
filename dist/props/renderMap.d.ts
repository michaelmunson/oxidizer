import { PropsRenderFunction } from "../intrinsics/types";
import { Props } from "./types";
export declare class RenderMap<T extends Props> extends Map<HTMLElement, PropsRenderFunction<HTMLElement, T>> {
    constructor();
    renderEach(props: T): void;
}
export declare const __PROPS_RENDER_MAP__: Map<object, RenderMap<any>>;
