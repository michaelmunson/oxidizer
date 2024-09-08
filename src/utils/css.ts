import { Properties as CSSProperties } from "csstype"

export function css(strs:TemplateStringsArray, ...values:any[]){
    return strs.map((s, i) => s + (values[i] ?? "")).join('')
}

export namespace css {
    type AssignParameters = (
        [assignee:HTMLElement, styles:string|CSSProperties] | 
        [assignee:CSSStyleDeclaration, styles:CSSProperties]
    );
    export function assign(...parameters: AssignParameters){
        const [assignee, styles] = parameters;
        if (assignee instanceof HTMLElement){
            if (typeof styles === "string"){
                (assignee as any).style = styles;
            } else {
                Object.assign(assignee.style, styles);
            }
        }
        else if (assignee instanceof CSSStyleDeclaration){
            if (typeof styles === "string"){
                throw new TypeError('assigned styles must be intersection of CSSStyleDeclaration')
            }
            Object.assign(assignee, styles);
        }
        else {
            throw new TypeError('Invalid assignee parameter. Assignee must be of type "HTMLElement" or "CSSStyleDeclaration"')
        }
    }
}
