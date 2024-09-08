"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Effect = void 0;
exports.createEffect = createEffect;
class Effect {
    callback;
    dependencies;
    constructor(dependencies, callback) {
        this.callback = callback;
        this.dependencies = !Array.isArray(dependencies) ? [dependencies] : dependencies;
    }
    isRun(key) {
        return this.dependencies.includes(key);
    }
    run(props) {
        return this.callback.call({}, props);
    }
}
exports.Effect = Effect;
/**
 * @description
 * * creates an "effect", or a function that will be ran when a props property has been changed.
 * * effect callbacks will be ran immediately upon creation
 * * the return value of the callback will be applied to the props
 * @example
 * ```typescript
    const props = createProps({count: 0}, [
        // keep count >= 0 and <= 100
        createEffect(['count'], $ => {
            if ($.count < 0){
                $.count = 0;
            }
            if ($.count > 100) return {
                count: 100
            }
        })
    ]);
    // props will be set to 0
    props.count = -10;
    // props will be set to 100
    props.count = 110;
```
 */
function createEffect(...params) {
    return new Effect(...params);
}
