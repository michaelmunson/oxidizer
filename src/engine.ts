import { Intrinsics } from "./intrinsics";
import { OxidizerCSS } from "./utils/css";

type DOMElement = Intrinsics.Intrinsic | Node;

export type RenderFunction<T extends DOMElement=DOMElement, Props={[key:string]:any}>
    = (props:Props) => T|T[];

function insertElement(element:DOMElement, nextChild:DOMElement|null, rendered:DOMElement|DOMElement[]){
    element = (element as any)?.shadowRoot 
            ?? (element as any)?.__oxsr__
            ?? element;
    if (nextChild) {
        if (Array.isArray(rendered)){
            rendered.forEach(el => element.insertBefore(el, nextChild));
        } else {
            element.insertBefore(rendered, nextChild);
        }
    } else {
        if (Array.isArray(rendered)){
            rendered.forEach(el => element.appendChild(el));
        } else {
            element.appendChild(rendered);
        }
    }
}

class ChildRenderMap extends Map<DOMElement|DOMElement[],RenderFunction> {
    constructor(){
        super();
    }

}

class RenderMap extends Map<DOMElement, ChildRenderMap> {
    constructor(){
        super();
    }
    initialize(element:DOMElement){
        let childMap = this.get(element);
        if (!childMap){
            childMap = new ChildRenderMap(); 
            this.set(element, childMap);
        }
        return childMap;
    }
    append(element:DOMElement, childElement:DOMElement, renderFunction:RenderFunction){
        const childMap = this.initialize(element)
        childMap.set(childElement, renderFunction);
    }
    render(element:DOMElement){
        const map = this.get(element);
        const toSet = new ChildRenderMap(); 
        if (map){
            for (const [child,fn] of map){
                const rendered = fn.call(element, (element as any).props) as DOMElement|DOMElement[];
                if (Array.isArray(child)){
                    const firstChild = child[0];
                    const nextChild = firstChild.nextSibling;
                    insertElement(element, nextChild, rendered);
                    child.forEach(el => (el as any).remove())
                } else {
                    const nextChild = child.nextSibling;
                    insertElement(element, nextChild, rendered);
                    (child as any).remove();
                }
                map.delete(child)
                toSet.set(rendered, fn);
            }
            this.set(element, toSet);
            if ('css' in element){
                if ('__oxssrfn__' in element){
                    element.css = element.__oxssrfn__;
                }
            }
        }
    }
}

export const OxidizerRenderMap = new RenderMap();

Object.assign(window, {
    orm: OxidizerRenderMap
})

