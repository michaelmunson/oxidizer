import { Properties as CSSProperties } from "csstype";
export declare function css(strs: TemplateStringsArray, ...values: any[]): string;
export declare namespace css {
    type AssignParameters = ([
        assignee: HTMLElement,
        styles: string | CSSProperties
    ] | [
        assignee: CSSStyleDeclaration,
        styles: CSSProperties
    ]);
    export function assign(...parameters: AssignParameters): void;
    export {};
}
