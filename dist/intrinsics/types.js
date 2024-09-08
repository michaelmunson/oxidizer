"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHTMLChild = isHTMLChild;
exports.isHTMLChildren = isHTMLChildren;
exports.isAttributes = isAttributes;
const utils_1 = require("../props/utils");
function isHTMLChild(params) {
    return (typeof params === "string" ||
        params instanceof HTMLElement ||
        Array.isArray(params));
}
function isHTMLChildren(params) {
    return (Array.isArray(params));
}
function isAttributes(params) {
    return !!params && !isHTMLChildren(params) && !isHTMLChild(params) && !(0, utils_1.isProps)(params);
}
