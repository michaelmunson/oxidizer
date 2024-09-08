import { CSSObject, CSSProperties } from "../types";
export declare namespace OxidizerCSS {
    type StyleSheetObject = {
        [key: string]: CSSObject | StyleSheetObject;
    } | {
        [key in keyof HTMLElementTagNameMap]: CSSObject | StyleSheetObject;
    };
    type StyleSheetArgument = StyleSheetObject | (() => StyleSheetObject);
    type CompiledStyleSheet = {
        [key: string]: CSSObject;
    };
    function parseObject(styles: CSSProperties): string;
    function parseString(styles: string): {
        [key: string]: string;
    };
    function compile(styles: StyleSheetObject): CompiledStyleSheet;
    function stringify(styles: StyleSheetObject): string;
    class StyleSheet extends Map<string, CSSObject> {
        id: string;
        options: CSSStyleSheetInit;
        styleElement?: HTMLStyleElement;
        adoptedParent?: Document | ShadowRoot;
        constructor(styles: StyleSheetObject | string, options?: CSSStyleSheetInit);
        get cssStyleSheet(): CSSStyleSheet;
        private init;
        private toStyleSheet;
        private updateCSSStyleSheet;
        destroy(): void;
        set(key: string, value: CSSObject): this;
        add(styles: StyleSheetObject): this;
        toString(): string;
        toElement(): HTMLStyleElement;
        adopt(node?: Document | ShadowRoot): this;
        render(position?: "append" | "prepend"): this;
    }
}
export declare namespace OxidizerStyleSheet { }
