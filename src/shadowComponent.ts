import { Intrinsics } from "./intrinsics"
import { OxidizerCSS } from "./utils/css";

export class ShadowComponent<T=undefined> extends HTMLElement {
    props:T = (undefined as any)
    Children:Intrinsics.Children<any>=[]
    static observedAttributes?:string[]
    css?:OxidizerCSS.StyleSheetArgument;
    styles?():OxidizerCSS.StyleSheetArgument
    render?():Intrinsics.Children<any>
    connectedCallback?() : void
    disconnectedCallback?() : void
    adoptedCallback?() : void
    attributeChangedCallback?(name?:string, oldValue?:string, newValue?:string) : void
}

function handleCSS(element:any, css:OxidizerCSS.StyleSheetArgument){
    let styleSheet:OxidizerCSS.StyleSheet; 
    if (typeof css === 'function'){
        Object.assign(element, {get __oxssrfn__(){return css}});
        const styleSheetObject = css.call(element);
        styleSheet = new OxidizerCSS.StyleSheet(styleSheetObject); 
    } else {
        styleSheet = new OxidizerCSS.StyleSheet(css);
    }
    
    styleSheet.adopt(element.__oxsr__);
    
    Object.assign(element, {
        __oxss__: styleSheet
    });

    Object.defineProperty(element, 'css', {
        get (){
            return this.__oxss__;
        },
        set (styles:any){
            this.__oxss__.destroy(); 
            this.__oxss__ = handleCSS(element, styles);
        }
    })

    return styleSheet;
}

export function createShadowElement<Props>(tagName:string, elementClass:typeof ShadowComponent<Props>, options:{mode:'open'|'closed'}={mode:'closed'}){
    customElements.define(tagName, elementClass);

    return function (
        fields?:Intrinsics.Fields<HTMLElement, Props> | Intrinsics.Children<Props>,
        children?:Intrinsics.Children<Props>
    ){
        const element = Intrinsics.create(tagName as any, fields, children);

        const _children:Intrinsics.Children<any> = Intrinsics.isChildren(children)
                                        ? children
                                        : Intrinsics.isChildren(fields)
                                            ? fields
                                            : [];
        let Children = _children as any;
        
        if ('render' in element && typeof element.render === "function"){
            Children = element.render.call({
                ...element,
                Children:_children,
            });
        }

        const shadowChildren = Intrinsics.renderChildren(element, Children);

        const shadowRoot = element.attachShadow({mode:'open'});

        Object.defineProperty(element as any, '__oxsr__', {
            get (){
                return shadowRoot
            }
        })
        
        shadowRoot.append(...shadowChildren);

        if ('css' in element){
            handleCSS(element, element.css as OxidizerCSS.StyleSheetArgument);
        }

        return element;
    }
}

// export module ShadowComponent {}
