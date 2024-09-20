"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAttributes = isAttributes;
exports.isHTMLPrimitive = isHTMLPrimitive;
exports.isHTMLElement = isHTMLElement;
exports.isDocumentFragment = isDocumentFragment;
exports.isHTMLNode = isHTMLNode;
exports.isDOMNode = isDOMNode;
exports.isHTMLChild = isHTMLChild;
exports.isHTMLChildArray = isHTMLChildArray;
exports.isHTMLChildren = isHTMLChildren;
const utils_1 = require("../props/utils");
function isAttributes(params) {
    return !!params && !isHTMLChildren(params) && !isHTMLChild(params) && !(0, utils_1.isProps)(params);
}
function isHTMLPrimitive(child) {
    return (typeof child === "string" ||
        typeof child === "undefined" ||
        typeof child === "number" ||
        typeof child === "boolean" ||
        child === null);
}
function isHTMLElement(element) {
    return element instanceof HTMLElement;
}
function isDocumentFragment(fragment) {
    return fragment instanceof DocumentFragment;
}
function isHTMLNode(node) {
    return (isHTMLElement(node) ||
        isDocumentFragment(node));
}
function isDOMNode(node) {
    return (isHTMLElement(node) ||
        node instanceof Text ||
        node instanceof Element);
}
function isHTMLChild(params) {
    return (isHTMLPrimitive(params) ||
        isDOMNode(params) ||
        isHTMLChildren(params) ||
        isDocumentFragment(params));
}
function isHTMLChildArray(params) {
    return (Array.isArray(params) &&
        params.reduce((acc, curr) => acc && isHTMLChild(curr), true));
}
function isHTMLChildren(params) {
    return (isHTMLChildArray(params) ||
        params instanceof NodeList ||
        params instanceof HTMLCollection);
}
