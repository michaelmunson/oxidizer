import { Intrinsics } from "./intrinsics"

export class Component<T=undefined> extends HTMLElement {
    props:T = (undefined as any)
    Children:Intrinsics.Children<any>=[]
    static observedAttributes?:string[]
    render?():Intrinsics.Children<any>
    connectedCallback?() : void
    disconnectedCallback?() : void
    adoptedCallback?() : void
    attributeChangedCallback?(name?:string, oldValue?:string, newValue?:string) : void
}

export function createElement<Props>(tagName:string, elementClass:typeof Component<Props>){
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
        let Children;
        
        if ('render' in element && typeof element.render === "function"){
            Children = element.render.call({
                ...element,
                Children:_children,
            });
        }
    
        element.rerender(Children)

        return element;
    }
}

// export module Component {}
