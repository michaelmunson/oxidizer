"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.__PROPS_RENDER_MAP__ = exports.RenderMap = void 0;
const utils_1 = require("../intrinsics/utils");
class RenderMap extends Map {
    constructor() {
        super();
    }
    renderEach(props) {
        for (const [element, renderFn] of this) {
            const elementProperties = renderFn.call(element, props);
            (0, utils_1.setElementProperties)(element, ...elementProperties);
        }
    }
}
exports.RenderMap = RenderMap;
exports.__PROPS_RENDER_MAP__ = new Map();
