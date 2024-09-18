"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.camelToDashed = camelToDashed;
exports.dashedToCamel = dashedToCamel;
function camelToDashed(input) {
    return input.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
function dashedToCamel(input) {
    return input.replace(/-([a-z])/g, (match, group) => group.toUpperCase());
}
