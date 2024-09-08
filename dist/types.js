"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check = void 0;
var Check;
(function (Check) {
    function isObject(something) {
        return typeof something === "object" && something.toString() === "[object Object]";
    }
    Check.isObject = isObject;
    function isString(something) {
        return typeof something === "string";
    }
    Check.isString = isString;
    function isHTMLElement(something) {
        return something instanceof HTMLElement;
    }
    Check.isHTMLElement = isHTMLElement;
    function isFunction(something) {
        return typeof something === "function";
    }
    Check.isFunction = isFunction;
})(Check || (exports.Check = Check = {}));
