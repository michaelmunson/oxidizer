"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
exports.createElement = createElement;
const intrinsics_1 = require("./intrinsics");
class Component extends HTMLElement {
    props = undefined;
    Children = [];
    static observedAttributes;
}
exports.Component = Component;
function createElement(tagName, elementClass) {
    customElements.define(tagName, elementClass);
    return function (fields, children) {
        const element = intrinsics_1.Intrinsics.create(tagName, fields, children);
        const _children = intrinsics_1.Intrinsics.isChildren(children)
            ? children
            : intrinsics_1.Intrinsics.isChildren(fields)
                ? fields
                : [];
        let Children;
        if ('render' in element && typeof element.render === "function") {
            Children = element.render.call({
                ...element,
                Children: _children,
            });
        }
        element.rerender(Children);
        return element;
    };
}
// export module Component {}
