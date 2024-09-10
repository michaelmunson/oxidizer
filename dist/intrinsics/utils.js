"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setElementAttributes = setElementAttributes;
exports.setElementChildren = setElementChildren;
exports.setElementProperties = setElementProperties;
exports.createElement = createElement;
exports.createIntrinsicElement = createIntrinsicElement;
exports.createIntrinsicElementComponent = createIntrinsicElementComponent;
exports.createShadowElement = createShadowElement;
exports.createElementFactory = createElementFactory;
const utils_1 = require("../utils");
const types_1 = require("./types");
const utils_2 = require("../props/utils");
const renderMap_1 = require("../props/renderMap");
const config_1 = require("../config");
function setElementAttributes(element, attrs) {
    let attr;
    for (attr in attrs) {
        try {
            let attrValue = attrs[attr];
            if (!(attr in element) && typeof attrValue === "string") {
                element.setAttribute(attr, attrValue);
            }
            else if (attr === "style" && typeof attrValue === "object") {
                const style = Object.entries(attrValue).map(([key, val]) => `${(0, utils_1.camelToDashed)(key)}:${val};`).join("\n  ");
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
}
function setElementChildren(element, ...children) {
    for (const _children of children) {
        if (Array.isArray(_children)) {
            for (const child of _children) {
                setElementChildren(element, child);
            }
        }
        else if (typeof _children === "string") {
            element.innerHTML = _children;
        }
        else if (_children instanceof HTMLElement) {
            element.append(_children);
        }
        else {
            throw new TypeError('child not of type HTMLChildren');
        }
    }
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
    if ((0, utils_2.isProps)(params[0]) && typeof params[1] === "function") {
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
function createIntrinsicElementComponent(tagName, customElementTagName, ...params) {
    const element = createElement(tagName, customElementTagName);
    if ((0, utils_2.isProps)(params[0]) && typeof params[1] === "function") {
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
    if ((0, utils_2.isProps)(params[0]) && typeof params[1] === "function") {
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
