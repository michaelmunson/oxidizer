"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.css = css;
function css(strs, ...values) {
    return strs.map((s, i) => s + (values[i] ?? "")).join('');
}
(function (css) {
    function assign(...parameters) {
        const [assignee, styles] = parameters;
        if (assignee instanceof HTMLElement) {
            if (typeof styles === "string") {
                assignee.style = styles;
            }
            else {
                Object.assign(assignee.style, styles);
            }
        }
        else if (assignee instanceof CSSStyleDeclaration) {
            if (typeof styles === "string") {
                throw new TypeError('assigned styles must be intersection of CSSStyleDeclaration');
            }
            Object.assign(assignee, styles);
        }
        else {
            throw new TypeError('Invalid assignee parameter. Assignee must be of type "HTMLElement" or "CSSStyleDeclaration"');
        }
    }
    css.assign = assign;
})(css || (exports.css = css = {}));
