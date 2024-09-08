import { Component as OxidizerComponent, createElement as OxidizerCreateElement } from "./component";
import { ShadowComponent as OxidizerShadowComponent, createShadowElement as OxidizerCreateShadowElement} from "./shadowComponent"
import { Intrinsics } from "./intrinsics";
import { OxidizerCSS } from "./utils/css";

export const {
    A,
    AREA,
    AUDIO,
    ABBR,
    ADDRESS,
    ARTICLE,
    ASIDE,
    BR,
    B,
    BDI,
    BDO,
    BASE,
    BODY,
    BUTTON,
    CANVAS,
    CITE,
    CODE,
    COLGROUP,
    DD,
    DL,
    DATA,
    DATALIST,
    DETAILS,
    DIALOG,
    DIV,
    EM,
    EMBED,
    FIELDSET,
    FIGURE,
    FOOTER,
    FORM,
    HGROUP,
    HR,
    HEAD,
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    HTML,
    KBD,
    INS,
    I,
    IFRAME,
    IMG,
    INPUT,
    LI,
    LABEL,
    LEGEND,
    LINK,
    MAP,
    MENU,
    MARK,
    NAV,
    NOSCRIPT,
    META,
    METER,
    DEL,
    OL,
    OBJECT,
    OPTGROUP,
    OPTION,
    OUTPUT,
    P,
    PICTURE,
    PRE,
    PROGRESS,
    RT,
    RP,
    RUBY,
    SMALL,
    Q,
    BLOCKQUOTE,
    SCRIPT,
    SELECT,
    SLOT,
    SOURCE,
    SPAN,
    STYLE,
    SUB,
    SUMMARY,
    SEARCH,
    SECTION,
    CAPTION,
    TH,
    TD,
    COL,
    TABLE,
    TR,
    THEAD,
    TFOOT,
    TBODY,
    TEMPLATE,
    TEXTAREA,
    TIME,
    TITLE,
    TRACK,
    U,
    UL,
    VIDEO,
    VAR,
    WBR
} = Intrinsics.Elements;

namespace Oxidizer {
    export type Intrinsic<T extends HTMLElement=HTMLElement, Props=undefined> = Intrinsics.Intrinsic<T,Props>;
    export type HTML<Props=undefined> = Intrinsic<HTMLElement,Props>
    export const Component = OxidizerComponent;
    export const ShadowComponent = OxidizerShadowComponent;
    export import StyleSheet = OxidizerCSS.StyleSheet;
    export const createElement = OxidizerCreateElement;
    export const createShadowElement = OxidizerCreateShadowElement;
    export function root(element: HTMLElement) {
        return Object.assign(element, {
            render(toRender:Intrinsics.Children<undefined>) {
                element.innerHTML = "";
                if (Array.isArray(toRender)) {
                    this.render(toRender);
                }
                else if (toRender instanceof Component){
                    this.render((toRender as any).render());
                }
                else {
                    element.append(toRender);
                }
            }
        })
    }
    
    // export import Component = OxidizerComponent;
}

export default Oxidizer

