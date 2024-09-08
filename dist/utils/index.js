"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.html = exports.css = void 0;
exports.camelToDashed = camelToDashed;
exports.dashedToCamel = dashedToCamel;
var css_1 = require("./css");
Object.defineProperty(exports, "css", { enumerable: true, get: function () { return css_1.css; } });
var html_1 = require("./html");
Object.defineProperty(exports, "html", { enumerable: true, get: function () { return html_1.html; } });
function camelToDashed(input) {
    return input.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
function dashedToCamel(input) {
    return input.replace(/-([a-z])/g, (match, group) => group.toUpperCase());
}
