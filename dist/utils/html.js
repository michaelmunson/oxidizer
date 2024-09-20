"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.html = html;
class HTMLParsingError extends Error {
    constructor(message) {
        super(message.join('\n'));
        this.name = 'HTMLParsingError';
    }
}
const parseHTMLString = (htmlString) => {
    const doc = new DOMParser().parseFromString(htmlString, 'text/html');
    const errorNode = doc.querySelector("parsererror");
    if (errorNode) {
        throw new HTMLParsingError([...errorNode.children].map(child => child.textContent ?? ""));
    }
    const nodes = [...doc.body.childNodes];
    if (nodes.length === 1)
        return nodes[0];
    else {
        const fragment = document.createDocumentFragment();
        for (const node of nodes) {
            fragment.appendChild(node);
        }
        return fragment;
    }
};
function html(strs, ...values) {
    const htmlString = strs.map((s, i) => s + (values[i] ?? "")).join('');
    return parseHTMLString(htmlString);
}
