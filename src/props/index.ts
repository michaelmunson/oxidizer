import { RenderMap, __PROPS_RENDER_MAP__ as PROPS_RENDER_MAP } from "./renderMap";
import { isModifier, isProxySymbol, type Modifiers } from "./utils";
export { createEffect } from "./effects";

function handleModifiers<T extends {}>(props: T, key: keyof T, modifiers: Modifiers<T> | undefined) {
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

export function createProps<T extends {}>(input: T, modifiers?: Modifiers<T>) {
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