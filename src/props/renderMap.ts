import { RenderFunction } from "../intrinsics/types";
import { setElementProperties } from "../intrinsics/utils";

export class RenderMap<T extends {}> extends Map<HTMLElement, RenderFunction<HTMLElement, T>> {
    constructor() {
        super();
    }
    renderEach(props: T) {
        for (const [element, renderFn] of this) {
            const elementProperties = renderFn.call(element, props);
            setElementProperties(element, ...elementProperties);
        }
    }
}

export const __PROPS_RENDER_MAP__ = new Map<object, RenderMap<any>>();