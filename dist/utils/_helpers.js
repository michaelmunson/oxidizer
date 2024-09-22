"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.camelToDashed = camelToDashed;
exports.dashedToCamel = dashedToCamel;
exports.strictQuery = strictQuery;
function camelToDashed(input) {
    return input.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
function dashedToCamel(input) {
    return input.replace(/-([a-z])/g, (match, group) => group.toUpperCase());
}
function strictQuery(selector) {
    if (typeof selector !== 'string') {
        throw new TypeError('Selector must be of type string');
    }
    const element = document.querySelector(selector);
    if (!element) {
        throw new ReferenceError(`No element found matching selector "${selector}"`);
    }
    return element;
}
