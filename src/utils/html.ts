import type { ParsedHTML } from "./types";
import type { DOMNode } from "../types";

class HTMLParsingError extends Error {
    constructor(message:string[]){
        super(message.join('\n'))
        this.name = 'HTMLParsingError';
    }
}

const parseHTMLString = (htmlString:string) : ParsedHTML => {
    const doc = new DOMParser().parseFromString(htmlString, 'text/html');
    const errorNode = doc.querySelector("parsererror");
    if (errorNode){
        throw new HTMLParsingError([...errorNode.children].map(child => child.textContent ?? ""))
    }
    const nodes = [...doc.body.childNodes] as DOMNode[];
    if (nodes.length === 1) return nodes[0];
    else {
        const fragment = document.createDocumentFragment();
        for (const node of nodes){
            fragment.appendChild(node);
        }
        return fragment;
    }
}

export function html<T extends DOMNode|DocumentFragment>(strs:TemplateStringsArray, ...values:any[]){
    const htmlString = strs.map((s, i) => s + (values[i] ?? "")).join('')
    return parseHTMLString(htmlString) as T;
}
