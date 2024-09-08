"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEffect = void 0;
exports.createProps = createProps;
const renderMap_1 = require("./renderMap");
const utils_1 = require("./utils");
var effects_1 = require("./effects");
Object.defineProperty(exports, "createEffect", { enumerable: true, get: function () { return effects_1.createEffect; } });
function handleModifiers(props, key, modifiers) {
    if (!modifiers)
        return;
    for (const modifier of modifiers) {
        if ((0, utils_1.isModifier)(modifier) && modifier.isRun(key)) {
            const returnObject = modifier.run(props);
            if (returnObject) {
                for (const k in returnObject) {
                    props[k] = returnObject[k];
                }
            }
        }
    }
}
function createProps(input, modifiers) {
    // CREATE PROPS
    const props = new Proxy(input, {
        set(target, property, newValue) {
            // set target value
            target[property] = newValue;
            // add to RenderMap
            const renderMap = renderMap_1.__PROPS_RENDER_MAP__.get(props);
            // handle modifiers
            handleModifiers(props, property, modifiers);
            // render attached elements
            if (renderMap)
                renderMap.renderEach(props);
            return true;
        },
        get(target, key) {
            if (key === utils_1.isProxySymbol)
                return true;
            else
                return target[key];
        }
    });
    // REASSIGN TO RUN ALL EFFECTS
    Object.assign(props, input);
    // ADD TO RENDER MAP
    renderMap_1.__PROPS_RENDER_MAP__.set(props, new renderMap_1.RenderMap());
    return props;
}
