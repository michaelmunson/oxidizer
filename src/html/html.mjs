import { $ } from "./query.mjs";

export const html = function (DOMString) {
    const template = $.create('div');
    template.innerHTML = DOMString;
    return [...template.childNodes]
}

export default html
