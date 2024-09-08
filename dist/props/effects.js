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
function createEffect(...params) {
    return new Effect(...params);
}
