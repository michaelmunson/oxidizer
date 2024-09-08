"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.html = html;
function html(strs, ...values) {
    return strs.map((s, i) => s + (values[i] ?? "")).join('');
}
