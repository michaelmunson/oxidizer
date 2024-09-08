"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OxidizerRenderMap = void 0;
function insertElement(element, nextChild, rendered) {
    element = element?.shadowRoot
        ?? element?.__oxsr__
        ?? element;
    if (nextChild) {
        if (Array.isArray(rendered)) {
            rendered.forEach(el => element.insertBefore(el, nextChild));
        }
        else {
            element.insertBefore(rendered, nextChild);
        }
    }
    else {
        if (Array.isArray(rendered)) {
            rendered.forEach(el => element.appendChild(el));
        }
        else {
            element.appendChild(rendered);
        }
    }
}
class ChildRenderMap extends Map {
    constructor() {
        super();
    }
}
class RenderMap extends Map {
    constructor() {
        super();
    }
    initialize(element) {
        let childMap = this.get(element);
        if (!childMap) {
            childMap = new ChildRenderMap();
            this.set(element, childMap);
        }
        return childMap;
    }
    append(element, childElement, renderFunction) {
        const childMap = this.initialize(element);
        childMap.set(childElement, renderFunction);
    }
    render(element) {
        const map = this.get(element);
        const toSet = new ChildRenderMap();
        if (map) {
            for (const [child, fn] of map) {
                const rendered = fn.call(element, element.props);
                if (Array.isArray(child)) {
                    const firstChild = child[0];
                    const nextChild = firstChild.nextSibling;
                    insertElement(element, nextChild, rendered);
                    child.forEach(el => el.remove());
                }
                else {
                    const nextChild = child.nextSibling;
                    insertElement(element, nextChild, rendered);
                    child.remove();
                }
                map.delete(child);
                toSet.set(rendered, fn);
            }
            this.set(element, toSet);
            if ('css' in element) {
                if ('__oxssrfn__' in element) {
                    element.css = element.__oxssrfn__;
                }
            }
        }
    }
}
exports.OxidizerRenderMap = new RenderMap();
Object.assign(window, {
    orm: exports.OxidizerRenderMap
});
