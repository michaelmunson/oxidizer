import { RenderMap, __PROPS_RENDER_MAP__ as PROPS_RENDER_MAP } from "./renderMap";
import { isModifier, isProxySymbol } from "./utils";
export { createEffect } from "./effects";
import type { Props, Modifiers } from "./types";

function handleModifiers<T extends Props>(props: T, key: keyof T, modifiers: Modifiers<T> | undefined) {
    if (!modifiers) return;
    for (const modifier of modifiers) {
        if (isModifier(modifier) && modifier.isRun(key)) {
            const returnObject = modifier.run(props);
            if (returnObject) {
                for (const k in returnObject) {
                    (props as any)[k] = returnObject[k];
                }
            }
        }
    }
}

/**
 * @description creates a props proxy that is used to update the state of a component
 * @example
 * ```typescript 
const props = createProps({count: 0});
// update state by simply setting a property value
props.count = 1; 
```
 */
export function createProps<T extends Props>(input: T, modifiers?: Modifiers<T>) {
    // CREATE PROPS
    const props = new Proxy(input, {
        set(target: T, property, newValue) {
            // set target value
            target[property as keyof T] = newValue as T[keyof T];
            // add to RenderMap
            const renderMap = PROPS_RENDER_MAP.get(props);
            // handle modifiers
            handleModifiers(props, property as keyof T, modifiers);
            // render attached elements
            if (renderMap) renderMap.renderEach(props);

            return true;
        },
        get(target, key) {
            if (key === isProxySymbol) return true;
            else return (target as any)[key];
        }
    });
    // REASSIGN TO RUN ALL EFFECTS
    Object.assign(props, input);

    // ADD TO RENDER MAP
    PROPS_RENDER_MAP.set(props, new RenderMap());

    return props;
}