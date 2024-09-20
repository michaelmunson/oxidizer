"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setElementAttributes = setElementAttributes;
exports.setElementChildren = setElementChildren;
exports.setElementProperties = setElementProperties;
exports.createElement = createElement;
exports.createIntrinsicElement = createIntrinsicElement;
exports.createFragment = createFragment;
exports.createIntrinsicElementComponent = createIntrinsicElementComponent;
exports.createShadowElement = createShadowElement;
exports.createElementFactory = createElementFactory;
exports.ox = ox;
const _helpers_1 = require("../utils/_helpers");
const types_1 = require("./types");
const utils_1 = require("../props/utils");
const renderMap_1 = require("../props/renderMap");
const config_1 = require("../config");
const utils_2 = require("../utils");
class RenderError extends TypeError {
    constructor(message) {
        super(message);
        this.name = "RenderError";
    }
}
/** GENERAL EXPORTED UTILITIES */
/****** HTML ELEMENTS */
function setElementAttributes(element, attrs) {
    let attr;
    for (attr in attrs) {
        try {
            let attrValue = attrs[attr];
            if (!(attr in element) && typeof attrValue === "string") {
                element.setAttribute(attr, attrValue);
            }
            else if (attr === "style" && typeof attrValue === "object") {
                const style = Object.entries(attrValue).map(([key, val]) => `${(0, _helpers_1.camelToDashed)(key)}:${val};`).join("\n  ");
                element.style = style;
            }
            else {
                element[attr] = attrValue;
            }
        }
        catch (e) {
            console.warn(e);
        }
    }
    return element;
}
function setElementChildren(element, ...children) {
    for (const _children of children) {
        if ((0, types_1.isHTMLChildren)(_children)) {
            for (const child of [..._children]) {
                setElementChildren(element, child);
            }
        }
        else if ((0, types_1.isHTMLPrimitive)(_children)) {
            const htmlString = (typeof _children === "boolean" || !_children) ? "" : _children.toString();
            const node = (0, utils_2.html) `${htmlString}`;
            element.appendChild(node);
        }
        else if ((0, types_1.isDOMNode)(_children) || (0, types_1.isDocumentFragment)(_children)) {
            element.appendChild(_children);
        }
        else {
            throw new RenderError('child not of type HTMLChildren');
        }
    }
    return element;
}
function setElementProperties(element, ...params) {
    const [arg0, ...arg1] = params;
    if ((0, types_1.isAttributes)(arg0)) {
        setElementAttributes(element, arg0);
        if ((0, types_1.isHTMLChildren)(arg1)) {
            element.innerHTML = "";
            setElementChildren(element, ...arg1);
        }
        else if ((0, types_1.isHTMLChild)(arg1)) {
            element.innerHTML = "";
            setElementChildren(element, arg1);
        }
    }
    else if (params.length >= 0 && (0, types_1.isHTMLChildren)(params)) {
        element.innerHTML = "";
        setElementChildren(element, ...params);
    }
    else if ((0, types_1.isHTMLChildren)(arg0)) {
        element.innerHTML = "";
        setElementChildren(element, ...arg0);
    }
    else if ((0, types_1.isHTMLChild)(arg0)) {
        element.innerHTML = "";
        setElementChildren(element, arg0);
    }
    return element;
}
function createElement(tagName, customElementTagName) {
    const element = customElementTagName ? document.createElement(tagName, { is: customElementTagName }) : document.createElement(tagName);
    if (config_1.Configuration.get().components.autoUpgrade) {
        if (customElements.get(tagName)) {
            customElements.upgrade(element);
        }
    }
    return element;
}
function createIntrinsicElement(tagName, ...params) {
    const element = createElement(tagName);
    ox(element)(...params);
    return element;
}
/****** DOCUMENT FRAGMENTS */
function createFragment(...children) {
    const fragment = document.createDocumentFragment();
    setElementChildren(fragment, ...children);
    return fragment;
}
/** CUSTOM ELEMENTS */
function createIntrinsicElementComponent(tagName, customElementTagName, ...params) {
    const element = createElement(tagName, customElementTagName);
    if ((0, utils_1.isProps)(params[0]) && typeof params[1] === "function") {
        const [props, renderFn] = params;
        renderMap_1.__PROPS_RENDER_MAP__.get(props)?.set(element, renderFn);
        const elementProperties = renderFn.call(element, props);
        setElementProperties(element, ...elementProperties);
    }
    else {
        setElementProperties(element, ...params);
    }
    return element;
}
function createShadowElement(tagName, options, ...params) {
    const element = createElement(tagName);
    const shadow = element.attachShadow(options);
    if ((0, utils_1.isProps)(params[0]) && typeof params[1] === "function") {
        const [props, renderFn] = params;
        renderMap_1.__PROPS_RENDER_MAP__.get(props)?.set(shadow, renderFn);
        const elementProperties = renderFn.call(shadow, props);
        setElementProperties(shadow, ...elementProperties);
    }
    else {
        setElementProperties(shadow, ...params);
    }
    return element;
}
function createElementFactory(tagName) {
    return (...params) => createIntrinsicElement(tagName, ...params);
}
/** LIB EXPORTS */
function ox(element) {
    return (...params) => {
        if ((0, utils_1.isProps)(params[0]) && typeof params[1] === "function") {
            const [props, renderFn] = params;
            renderMap_1.__PROPS_RENDER_MAP__.get(props)?.set(element, renderFn);
            const elementProperties = renderFn.call(element, props);
            setElementProperties(element, ...elementProperties);
        }
        else {
            setElementProperties(element, ...params);
        }
        return element;
    };
}
