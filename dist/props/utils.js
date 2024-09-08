"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isProps = exports.isProxySymbol = exports.isModifier = void 0;
const effects_1 = require("./effects");
const isModifier = (anything) => {
    return (anything instanceof effects_1.Effect);
};
exports.isModifier = isModifier;
exports.isProxySymbol = Symbol("isProxy");
const isProps = (props) => {
    return props && props[exports.isProxySymbol];
};
exports.isProps = isProps;
