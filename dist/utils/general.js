"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.camelToDashed = camelToDashed;
exports.dashedToCamel = dashedToCamel;
exports.getMethods = getMethods;
exports.generateRandomId = generateRandomId;
function camelToDashed(input) {
    return input.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
function dashedToCamel(input) {
    return input.replace(/-([a-z])/g, (match, group) => group.toUpperCase());
}
function getMethods(obj) {
    const ignore = [
        "__defineGetter__",
        "__defineSetter__",
        "hasOwnProperty",
        "__lookupGetter__",
        "__lookupSetter__",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toString",
        "valueOf",
        "toLocaleString",
        "constructor",
        "render",
        "connectedCallback",
        "disconnectedCallback",
        "adoptedCallback",
        "attributeChangedCallback"
    ];
    const properties = new Set();
    let currentObj = obj;
    do {
        Object.getOwnPropertyNames(currentObj).map(item => properties.add(item));
    } while ((currentObj = Object.getPrototypeOf(currentObj)));
    return [...properties.keys()].filter((item) => typeof obj[item] === 'function' && !(ignore.includes(item)));
}
function generateRandomId(length, inUse) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomId = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomId += characters.charAt(randomIndex);
    }
    if (inUse)
        return inUse.includes(randomId) ? generateRandomId(length) : randomId;
    else
        return randomId;
}
