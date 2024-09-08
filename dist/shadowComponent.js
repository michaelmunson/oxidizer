"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShadowComponent = void 0;
exports.createShadowElement = createShadowElement;
const intrinsics_1 = require("./intrinsics");
const css_1 = require("./utils/css");
class ShadowComponent extends HTMLElement {
    props = undefined;
    Children = [];
    static observedAttributes;
    css;
}
exports.ShadowComponent = ShadowComponent;
function handleCSS(element, css) {
    let styleSheet;
    if (typeof css === 'function') {
        Object.assign(element, { get __oxssrfn__() { return css; } });
        const styleSheetObject = css.call(element);
        styleSheet = new css_1.OxidizerCSS.StyleSheet(styleSheetObject);
    }
    else {
        styleSheet = new css_1.OxidizerCSS.StyleSheet(css);
    }
    styleSheet.adopt(element.__oxsr__);
    Object.assign(element, {
        __oxss__: styleSheet
    });
    Object.defineProperty(element, 'css', {
        get() {
            return this.__oxss__;
        },
        set(styles) {
            this.__oxss__.destroy();
            this.__oxss__ = handleCSS(element, styles);
        }
    });
    return styleSheet;
}
function createShadowElement(tagName, elementClass, options = { mode: 'closed' }) {
    customElements.define(tagName, elementClass);
    return function (fields, children) {
        const element = intrinsics_1.Intrinsics.create(tagName, fields, children);
        const _children = intrinsics_1.Intrinsics.isChildren(children)
            ? children
            : intrinsics_1.Intrinsics.isChildren(fields)
                ? fields
                : [];
        let Children = _children;
        if ('render' in element && typeof element.render === "function") {
            Children = element.render.call({
                ...element,
                Children: _children,
            });
        }
        const shadowChildren = intrinsics_1.Intrinsics.renderChildren(element, Children);
        const shadowRoot = element.attachShadow({ mode: 'open' });
        Object.defineProperty(element, '__oxsr__', {
            get() {
                return shadowRoot;
            }
        });
        shadowRoot.append(...shadowChildren);
        if ('css' in element) {
            handleCSS(element, element.css);
        }
        return element;
    };
}
// export module ShadowComponent {}
