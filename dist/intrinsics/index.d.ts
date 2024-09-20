import { createFragment } from "./utils";
/**
 * #### HTMLAnchorElement
 * ```html
 * <a>
 * ```
 * @description creates an `HTMLAnchorElement` instance.
 * @example
 * ```typescript
 * const a:HTMLAnchorElement =
 *     A(
 *         {className: 'a'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const A: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLAnchorElement, P>) => HTMLAnchorElement;
/**
 * #### HTMLAreaElement
 * ```html
 * <area>
 * ```
 * @description creates an `HTMLAreaElement` instance.
 * @example ```typescript
 * const areaElement = AREA({className: 'area'});
 * ```
 */
export declare const AREA: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLAreaElement, P>) => HTMLAreaElement;
/**
 * #### HTMLAudioElement
 * ```html
 * <audio>
 * ```
 * @description creates an `HTMLAudioElement` instance.
 * @example
 * ```typescript
 * const audio:HTMLAudioElement =
 *     AUDIO(
 *         {className: 'audio'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const AUDIO: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLAudioElement, P>) => HTMLAudioElement;
/**
 * #### HTMLElement
 * ```html
 * <abbr>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const abbr:HTMLElement =
 *     ABBR(
 *         {className: 'abbr'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const ABBR: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLElement, P>) => HTMLElement;
/**
 * #### HTMLElement
 * ```html
 * <address>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const address:HTMLElement =
 *     ADDRESS(
 *         {className: 'address'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const ADDRESS: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLElement, P>) => HTMLElement;
/**
 * #### HTMLElement
 * ```html
 * <article>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const article:HTMLElement =
 *     ARTICLE(
 *         {className: 'article'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const ARTICLE: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLElement, P>) => HTMLElement;
/**
 * #### HTMLElement
 * ```html
 * <aside>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const aside:HTMLElement =
 *     ASIDE(
 *         {className: 'aside'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const ASIDE: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLElement, P>) => HTMLElement;
/**
 * #### HTMLBRElement
 * ```html
 * <br>
 * ```
 * @description creates an `HTMLBRElement` instance.
 * @example ```typescript
 * const brElement = BR({className: 'br'});
 * ```
 */
export declare const BR: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLBRElement, P>) => HTMLBRElement;
/**
 * #### HTMLElement
 * ```html
 * <b>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const b:HTMLElement =
 *     B(
 *         {className: 'b'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const B: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLElement, P>) => HTMLElement;
/**
 * #### HTMLElement
 * ```html
 * <bdi>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const bdi:HTMLElement =
 *     BDI(
 *         {className: 'bdi'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const BDI: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLElement, P>) => HTMLElement;
/**
 * #### HTMLElement
 * ```html
 * <bdo>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const bdo:HTMLElement =
 *     BDO(
 *         {className: 'bdo'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const BDO: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLElement, P>) => HTMLElement;
/**
 * #### HTMLBaseElement
 * ```html
 * <base>
 * ```
 * @description creates an `HTMLBaseElement` instance.
 * @example ```typescript
 * const baseElement = BASE({className: 'base'});
 * ```
 */
export declare const BASE: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLBaseElement, P>) => HTMLBaseElement;
/**
 * #### HTMLBodyElement
 * ```html
 * <body>
 * ```
 * @description creates an `HTMLBodyElement` instance.
 * @example
 * ```typescript
 * const body:HTMLBodyElement =
 *     BODY(
 *         {className: 'body'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const BODY: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLBodyElement, P>) => HTMLBodyElement;
/**
 * #### HTMLButtonElement
 * ```html
 * <button>
 * ```
 * @description creates an `HTMLButtonElement` instance.
 * @example
 * ```typescript
 * const button:HTMLButtonElement =
 *     BUTTON(
 *         {className: 'button'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const BUTTON: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLButtonElement, P>) => HTMLButtonElement;
/**
 * #### HTMLCanvasElement
 * ```html
 * <canvas>
 * ```
 * @description creates an `HTMLCanvasElement` instance.
 * @example
 * ```typescript
 * const canvas:HTMLCanvasElement =
 *     CANVAS(
 *         {className: 'canvas'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const CANVAS: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLCanvasElement, P>) => HTMLCanvasElement;
/**
 * #### HTMLElement
 * ```html
 * <cite>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const cite:HTMLElement =
 *     CITE(
 *         {className: 'cite'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const CITE: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLElement, P>) => HTMLElement;
/**
 * #### HTMLElement
 * ```html
 * <code>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const code:HTMLElement =
 *     CODE(
 *         {className: 'code'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const CODE: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLElement, P>) => HTMLElement;
/**
 * #### HTMLElement
 * ```html
 * <colgroup>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const colgroup:HTMLElement =
 *     COLGROUP(
 *         {className: 'colgroup'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const COLGROUP: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLTableColElement, P>) => HTMLTableColElement;
/**
 * #### HTMLElement
 * ```html
 * <dd>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const dd:HTMLElement =
 *     DD(
 *         {className: 'dd'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const DD: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLElement, P>) => HTMLElement;
/**
 * #### HTMLDListElement
 * ```html
 * <dl>
 * ```
 * @description creates an `HTMLDListElement` instance.
 * @example
 * ```typescript
 * const dl:HTMLDListElement =
 *     DL(
 *         {className: 'dl'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const DL: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLDListElement, P>) => HTMLDListElement;
/**
 * #### HTMLDataElement
 * ```html
 * <data>
 * ```
 * @description creates an `HTMLDataElement` instance.
 * @example
 * ```typescript
 * const data:HTMLDataElement =
 *     DATA(
 *         {className: 'data'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const DATA: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLDataElement, P>) => HTMLDataElement;
/**
 * #### HTMLDataListElement
 * ```html
 * <datalist>
 * ```
 * @description creates an `HTMLDataListElement` instance.
 * @example
 * ```typescript
 * const datalist:HTMLDataListElement =
 *     DATALIST(
 *         {className: 'datalist'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const DATALIST: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLDataListElement, P>) => HTMLDataListElement;
/**
 * #### HTMLDetailsElement
 * ```html
 * <details>
 * ```
 * @description creates an `HTMLDetailsElement` instance.
 * @example
 * ```typescript
 * const details:HTMLDetailsElement =
 *     DETAILS(
 *         {className: 'details'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const DETAILS: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLDetailsElement, P>) => HTMLDetailsElement;
/**
 * #### HTMLDialogElement
 * ```html
 * <dialog>
 * ```
 * @description creates an `HTMLDialogElement` instance.
 * @example
 * ```typescript
 * const dialog:HTMLDialogElement =
 *     DIALOG(
 *         {className: 'dialog'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const DIALOG: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLDialogElement, P>) => HTMLDialogElement;
/**
 * #### HTMLDivElement
 * ```html
 * <div>
 * ```
 * @description creates an `HTMLDivElement` instance.
 * @example
 * ```typescript
 * const div:HTMLDivElement =
 *     DIV(
 *         {className: 'div'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const DIV: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLDivElement, P>) => HTMLDivElement;
/**
 * #### HTMLElement
 * ```html
 * <em>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const em:HTMLElement =
 *     EM(
 *         {className: 'em'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const EM: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLElement, P>) => HTMLElement;
/**
 * #### HTMLEmbedElement
 * ```html
 * <embed>
 * ```
 * @description creates an `HTMLEmbedElement` instance.
 * @example ```typescript
 * const embedElement = EMBED({className: 'embed'});
 * ```
 */
export declare const EMBED: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLEmbedElement, P>) => HTMLEmbedElement;
/**
 * #### HTMLFieldSetElement
 * ```html
 * <fieldset>
 * ```
 * @description creates an `HTMLFieldSetElement` instance.
 * @example
 * ```typescript
 * const fieldset:HTMLFieldSetElement =
 *     FIELDSET(
 *         {className: 'fieldset'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const FIELDSET: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLFieldSetElement, P>) => HTMLFieldSetElement;
/**
 * #### HTMLElement
 * ```html
 * <figure>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const figure:HTMLElement =
 *     FIGURE(
 *         {className: 'figure'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const FIGURE: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLElement, P>) => HTMLElement;
/**
 * #### HTMLElement
 * ```html
 * <footer>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const footer:HTMLElement =
 *     FOOTER(
 *         {className: 'footer'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const FOOTER: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLElement, P>) => HTMLElement;
/**
 * #### HTMLFormElement
 * ```html
 * <form>
 * ```
 * @description creates an `HTMLFormElement` instance.
 * @example
 * ```typescript
 * const form:HTMLFormElement =
 *     FORM(
 *         {className: 'form'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const FORM: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLFormElement, P>) => HTMLFormElement;
/**
 * #### HTMLElement
 * ```html
 * <hgroup>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const hgroup:HTMLElement =
 *     HGROUP(
 *         {className: 'hgroup'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const HGROUP: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLElement, P>) => HTMLElement;
/**
 * #### HTMLHRElement
 * ```html
 * <hr>
 * ```
 * @description creates an `HTMLHRElement` instance.
 * @example ```typescript
 * const hrElement = HR({className: 'hr'});
 * ```
 */
export declare const HR: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLHRElement, P>) => HTMLHRElement;
/**
 * #### HTMLHeadElement
 * ```html
 * <head>
 * ```
 * @description creates an `HTMLHeadElement` instance.
 * @example
 * ```typescript
 * const head:HTMLHeadElement =
 *     HEAD(
 *         {className: 'head'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const HEAD: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLHeadElement, P>) => HTMLHeadElement;
/**
 * #### HTMLHeadingElement
 * ```html
 * <h1>
 * ```
 * @description creates an `HTMLHeadingElement` instance.
 * @example
 * ```typescript
 * const h1:HTMLHeadingElement =
 *     H1(
 *         {className: 'h1'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const H1: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLHeadingElement, P>) => HTMLHeadingElement;
/**
 * #### HTMLHeadingElement
 * ```html
 * <h2>
 * ```
 * @description creates an `HTMLHeadingElement` instance.
 * @example
 * ```typescript
 * const h2:HTMLHeadingElement =
 *     H2(
 *         {className: 'h2'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const H2: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLHeadingElement, P>) => HTMLHeadingElement;
/**
 * #### HTMLHeadingElement
 * ```html
 * <h3>
 * ```
 * @description creates an `HTMLHeadingElement` instance.
 * @example
 * ```typescript
 * const h3:HTMLHeadingElement =
 *     H3(
 *         {className: 'h3'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const H3: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLHeadingElement, P>) => HTMLHeadingElement;
/**
 * #### HTMLHeadingElement
 * ```html
 * <h4>
 * ```
 * @description creates an `HTMLHeadingElement` instance.
 * @example
 * ```typescript
 * const h4:HTMLHeadingElement =
 *     H4(
 *         {className: 'h4'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const H4: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLHeadingElement, P>) => HTMLHeadingElement;
/**
 * #### HTMLHeadingElement
 * ```html
 * <h5>
 * ```
 * @description creates an `HTMLHeadingElement` instance.
 * @example
 * ```typescript
 * const h5:HTMLHeadingElement =
 *     H5(
 *         {className: 'h5'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const H5: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLHeadingElement, P>) => HTMLHeadingElement;
/**
 * #### HTMLHeadingElement
 * ```html
 * <h6>
 * ```
 * @description creates an `HTMLHeadingElement` instance.
 * @example
 * ```typescript
 * const h6:HTMLHeadingElement =
 *     H6(
 *         {className: 'h6'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const H6: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLHeadingElement, P>) => HTMLHeadingElement;
/**
 * #### HTMLHtmlElement
 * ```html
 * <html>
 * ```
 * @description creates an `HTMLHtmlElement` instance.
 * @example
 * ```typescript
 * const html:HTMLHtmlElement =
 *     HTML(
 *         {className: 'html'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const HTML: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLHtmlElement, P>) => HTMLHtmlElement;
/**
 * #### HTMLElement
 * ```html
 * <kbd>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const kbd:HTMLElement =
 *     KBD(
 *         {className: 'kbd'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const KBD: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLElement, P>) => HTMLElement;
/**
 * #### HTMLModElement
 * ```html
 * <ins>
 * ```
 * @description creates an `HTMLModElement` instance.
 * @example
 * ```typescript
 * const ins:HTMLModElement =
 *     INS(
 *         {className: 'ins'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const INS: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLModElement, P>) => HTMLModElement;
/**
 * #### HTMLElement
 * ```html
 * <i>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const i:HTMLElement =
 *     I(
 *         {className: 'i'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const I: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLElement, P>) => HTMLElement;
/**
 * #### HTMLIFrameElement
 * ```html
 * <iframe>
 * ```
 * @description creates an `HTMLIFrameElement` instance.
 * @example
 * ```typescript
 * const iframe:HTMLIFrameElement =
 *     IFRAME(
 *         {className: 'iframe'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const IFRAME: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLIFrameElement, P>) => HTMLIFrameElement;
/**
 * #### HTMLImageElement
 * ```html
 * <img>
 * ```
 * @description creates an `HTMLImageElement` instance.
 * @example ```typescript
 * const imgElement = IMG({className: 'img'});
 * ```
 */
export declare const IMG: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLImageElement, P>) => HTMLImageElement;
/**
 * #### HTMLInputElement
 * ```html
 * <input>
 * ```
 * @description creates an `HTMLInputElement` instance.
 * @example ```typescript
 * const inputElement = INPUT({className: 'input'});
 * ```
 */
export declare const INPUT: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLInputElement, P>) => HTMLInputElement;
/**
 * #### HTMLLIElement
 * ```html
 * <li>
 * ```
 * @description creates an `HTMLLIElement` instance.
 * @example
 * ```typescript
 * const li:HTMLLIElement =
 *     LI(
 *         {className: 'li'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const LI: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLLIElement, P>) => HTMLLIElement;
/**
 * #### HTMLLabelElement
 * ```html
 * <label>
 * ```
 * @description creates an `HTMLLabelElement` instance.
 * @example
 * ```typescript
 * const label:HTMLLabelElement =
 *     LABEL(
 *         {className: 'label'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const LABEL: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLLabelElement, P>) => HTMLLabelElement;
/**
 * #### HTMLLegendElement
 * ```html
 * <legend>
 * ```
 * @description creates an `HTMLLegendElement` instance.
 * @example
 * ```typescript
 * const legend:HTMLLegendElement =
 *     LEGEND(
 *         {className: 'legend'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const LEGEND: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLLegendElement, P>) => HTMLLegendElement;
/**
 * #### HTMLLinkElement
 * ```html
 * <link>
 * ```
 * @description creates an `HTMLLinkElement` instance.
 * @example ```typescript
 * const linkElement = LINK({className: 'link'});
 * ```
 */
export declare const LINK: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLLinkElement, P>) => HTMLLinkElement;
/**
 * #### HTMLElement
 * ```html
 * <main>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const main:HTMLElement =
 *     MAIN(
 *         {className: 'main'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const MAIN: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLElement, P>) => HTMLElement;
/**
 * #### HTMLMapElement
 * ```html
 * <map>
 * ```
 * @description creates an `HTMLMapElement` instance.
 * @example
 * ```typescript
 * const map:HTMLMapElement =
 *     MAP(
 *         {className: 'map'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const MAP: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLMapElement, P>) => HTMLMapElement;
/**
 * #### HTMLMenuElement
 * ```html
 * <menu>
 * ```
 * @description creates an `HTMLMenuElement` instance.
 * @example
 * ```typescript
 * const menu:HTMLMenuElement =
 *     MENU(
 *         {className: 'menu'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const MENU: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLMenuElement, P>) => HTMLMenuElement;
/**
 * #### HTMLElement
 * ```html
 * <mark>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const mark:HTMLElement =
 *     MARK(
 *         {className: 'mark'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const MARK: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLElement, P>) => HTMLElement;
/**
 * #### HTMLElement
 * ```html
 * <nav>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const nav:HTMLElement =
 *     NAV(
 *         {className: 'nav'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const NAV: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLElement, P>) => HTMLElement;
/**
 * #### HTMLElement
 * ```html
 * <noscript>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const noscript:HTMLElement =
 *     NOSCRIPT(
 *         {className: 'noscript'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const NOSCRIPT: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLElement, P>) => HTMLElement;
/**
 * #### HTMLMetaElement
 * ```html
 * <meta>
 * ```
 * @description creates an `HTMLMetaElement` instance.
 * @example ```typescript
 * const metaElement = META({className: 'meta'});
 * ```
 */
export declare const META: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLMetaElement, P>) => HTMLMetaElement;
/**
 * #### HTMLMeterElement
 * ```html
 * <meter>
 * ```
 * @description creates an `HTMLMeterElement` instance.
 * @example
 * ```typescript
 * const meter:HTMLMeterElement =
 *     METER(
 *         {className: 'meter'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const METER: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLMeterElement, P>) => HTMLMeterElement;
/**
 * #### HTMLModElement
 * ```html
 * <del>
 * ```
 * @description creates an `HTMLModElement` instance.
 * @example
 * ```typescript
 * const del:HTMLModElement =
 *     DEL(
 *         {className: 'del'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const DEL: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLModElement, P>) => HTMLModElement;
/**
 * #### HTMLOListElement
 * ```html
 * <ol>
 * ```
 * @description creates an `HTMLOListElement` instance.
 * @example
 * ```typescript
 * const ol:HTMLOListElement =
 *     OL(
 *         {className: 'ol'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const OL: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLOListElement, P>) => HTMLOListElement;
/**
 * #### HTMLObjectElement
 * ```html
 * <object>
 * ```
 * @description creates an `HTMLObjectElement` instance.
 * @example
 * ```typescript
 * const object:HTMLObjectElement =
 *     OBJECT(
 *         {className: 'object'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const OBJECT: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLObjectElement, P>) => HTMLObjectElement;
/**
 * #### HTMLOptGroupElement
 * ```html
 * <optgroup>
 * ```
 * @description creates an `HTMLOptGroupElement` instance.
 * @example
 * ```typescript
 * const optgroup:HTMLOptGroupElement =
 *     OPTGROUP(
 *         {className: 'optgroup'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const OPTGROUP: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLOptGroupElement, P>) => HTMLOptGroupElement;
/**
 * #### HTMLOptionElement
 * ```html
 * <option>
 * ```
 * @description creates an `HTMLOptionElement` instance.
 * @example
 * ```typescript
 * const option:HTMLOptionElement =
 *     OPTION(
 *         {className: 'option'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const OPTION: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLOptionElement, P>) => HTMLOptionElement;
/**
 * #### HTMLOutputElement
 * ```html
 * <output>
 * ```
 * @description creates an `HTMLOutputElement` instance.
 * @example
 * ```typescript
 * const output:HTMLOutputElement =
 *     OUTPUT(
 *         {className: 'output'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const OUTPUT: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLOutputElement, P>) => HTMLOutputElement;
/**
 * #### HTMLParagraphElement
 * ```html
 * <p>
 * ```
 * @description creates an `HTMLParagraphElement` instance.
 * @example
 * ```typescript
 * const p:HTMLParagraphElement =
 *     P(
 *         {className: 'p'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const P: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLParagraphElement, P>) => HTMLParagraphElement;
/**
 * #### HTMLPictureElement
 * ```html
 * <picture>
 * ```
 * @description creates an `HTMLPictureElement` instance.
 * @example
 * ```typescript
 * const picture:HTMLPictureElement =
 *     PICTURE(
 *         {className: 'picture'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const PICTURE: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLPictureElement, P>) => HTMLPictureElement;
/**
 * #### HTMLPreElement
 * ```html
 * <pre>
 * ```
 * @description creates an `HTMLPreElement` instance.
 * @example
 * ```typescript
 * const pre:HTMLPreElement =
 *     PRE(
 *         {className: 'pre'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const PRE: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLPreElement, P>) => HTMLPreElement;
/**
 * #### HTMLProgressElement
 * ```html
 * <progress>
 * ```
 * @description creates an `HTMLProgressElement` instance.
 * @example
 * ```typescript
 * const progress:HTMLProgressElement =
 *     PROGRESS(
 *         {className: 'progress'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const PROGRESS: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLProgressElement, P>) => HTMLProgressElement;
/**
 * #### HTMLElement
 * ```html
 * <rt>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const rt:HTMLElement =
 *     RT(
 *         {className: 'rt'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const RT: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLElement, P>) => HTMLElement;
/**
 * #### HTMLElement
 * ```html
 * <rp>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const rp:HTMLElement =
 *     RP(
 *         {className: 'rp'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const RP: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLElement, P>) => HTMLElement;
/**
 * #### HTMLElement
 * ```html
 * <ruby>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const ruby:HTMLElement =
 *     RUBY(
 *         {className: 'ruby'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const RUBY: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLElement, P>) => HTMLElement;
/**
 * #### HTMLElement
 * ```html
 * <small>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const small:HTMLElement =
 *     SMALL(
 *         {className: 'small'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const SMALL: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLElement, P>) => HTMLElement;
/**
 * #### HTMLQuoteElement
 * ```html
 * <q>
 * ```
 * @description creates an `HTMLQuoteElement` instance.
 * @example
 * ```typescript
 * const q:HTMLQuoteElement =
 *     Q(
 *         {className: 'q'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const Q: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLQuoteElement, P>) => HTMLQuoteElement;
/**
 * #### HTMLQuoteElement
 * ```html
 * <blockquote>
 * ```
 * @description creates an `HTMLQuoteElement` instance.
 * @example
 * ```typescript
 * const blockquote:HTMLQuoteElement =
 *     BLOCKQUOTE(
 *         {className: 'blockquote'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const BLOCKQUOTE: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLQuoteElement, P>) => HTMLQuoteElement;
/**
 * #### HTMLScriptElement
 * ```html
 * <script>
 * ```
 * @description creates an `HTMLScriptElement` instance.
 * @example
 * ```typescript
 * const script:HTMLScriptElement =
 *     SCRIPT(
 *         {className: 'script'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const SCRIPT: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLScriptElement, P>) => HTMLScriptElement;
/**
 * #### HTMLSelectElement
 * ```html
 * <select>
 * ```
 * @description creates an `HTMLSelectElement` instance.
 * @example
 * ```typescript
 * const select:HTMLSelectElement =
 *     SELECT(
 *         {className: 'select'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const SELECT: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLSelectElement, P>) => HTMLSelectElement;
/**
 * #### HTMLSlotElement
 * ```html
 * <slot>
 * ```
 * @description creates an `HTMLSlotElement` instance.
 * @example
 * ```typescript
 * const slot:HTMLSlotElement =
 *     SLOT(
 *         {className: 'slot'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const SLOT: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLSlotElement, P>) => HTMLSlotElement;
/**
 * #### HTMLSourceElement
 * ```html
 * <source>
 * ```
 * @description creates an `HTMLSourceElement` instance.
 * @example ```typescript
 * const sourceElement = SOURCE({className: 'source'});
 * ```
 */
export declare const SOURCE: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLSourceElement, P>) => HTMLSourceElement;
/**
 * #### HTMLSpanElement
 * ```html
 * <span>
 * ```
 * @description creates an `HTMLSpanElement` instance.
 * @example
 * ```typescript
 * const span:HTMLSpanElement =
 *     SPAN(
 *         {className: 'span'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const SPAN: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLSpanElement, P>) => HTMLSpanElement;
/**
 * #### HTMLStyleElement
 * ```html
 * <style>
 * ```
 * @description creates an `HTMLStyleElement` instance.
 * @example
 * ```typescript
 * const stylesheet = STYLE(css`
 *     .my-class {
 *         color: red;
 *     }
 * `);

 * document.head.append(stylesheet)
 * ```
 */
export declare const STYLE: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLStyleElement, P>) => HTMLStyleElement;
/**
 * #### HTMLElement
 * ```html
 * <sub>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const sub:HTMLElement =
 *     SUB(
 *         {className: 'sub'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const SUB: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLElement, P>) => HTMLElement;
/**
 * #### HTMLElement
 * ```html
 * <summary>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const summary:HTMLElement =
 *     SUMMARY(
 *         {className: 'summary'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const SUMMARY: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLElement, P>) => HTMLElement;
/**
 * #### HTMLElement
 * ```html
 * <search>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const search:HTMLElement =
 *     SEARCH(
 *         {className: 'search'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const SEARCH: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLElement, P>) => HTMLElement;
/**
 * #### HTMLElement
 * ```html
 * <section>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const section:HTMLElement =
 *     SECTION(
 *         {className: 'section'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const SECTION: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLElement, P>) => HTMLElement;
/**
 * #### HTMLTableCaptionElement
 * ```html
 * <caption>
 * ```
 * @description creates an `HTMLTableCaptionElement` instance.
 * @example
 * ```typescript
 * const caption:HTMLTableCaptionElement =
 *     CAPTION(
 *         {className: 'caption'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const CAPTION: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLTableCaptionElement, P>) => HTMLTableCaptionElement;
/**
 * #### HTMLTableCellElement
 * ```html
 * <th>
 * ```
 * @description creates an `HTMLTableCellElement` instance.
 * @example
 * ```typescript
 * const th:HTMLTableCellElement =
 *     TH(
 *         {className: 'th'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const TH: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLTableCellElement, P>) => HTMLTableCellElement;
/**
 * #### HTMLTableCellElement
 * ```html
 * <td>
 * ```
 * @description creates an `HTMLTableCellElement` instance.
 * @example
 * ```typescript
 * const td:HTMLTableCellElement =
 *     TD(
 *         {className: 'td'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const TD: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLTableCellElement, P>) => HTMLTableCellElement;
/**
 * #### HTMLTableColElement
 * ```html
 * <col>
 * ```
 * @description creates an `HTMLTableColElement` instance.
 * @example ```typescript
 * const colElement = COL({className: 'col'});
 * ```
 */
export declare const COL: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLTableColElement, P>) => HTMLTableColElement;
/**
 * #### HTMLTableElement
 * ```html
 * <table>
 * ```
 * @description creates an `HTMLTableElement` instance.
 * @example
 * ```typescript
 * const table:HTMLTableElement =
 *     TABLE(
 *         {className: 'table'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const TABLE: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLTableElement, P>) => HTMLTableElement;
/**
 * #### HTMLTableRowElement
 * ```html
 * <tr>
 * ```
 * @description creates an `HTMLTableRowElement` instance.
 * @example
 * ```typescript
 * const tr:HTMLTableRowElement =
 *     TR(
 *         {className: 'tr'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const TR: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLTableRowElement, P>) => HTMLTableRowElement;
/**
 * #### HTMLTableSectionElement
 * ```html
 * <thead>
 * ```
 * @description creates an `HTMLTableSectionElement` instance.
 * @example
 * ```typescript
 * const thead:HTMLTableSectionElement =
 *     THEAD(
 *         {className: 'thead'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const THEAD: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLTableSectionElement, P>) => HTMLTableSectionElement;
/**
 * #### HTMLTableSectionElement
 * ```html
 * <tfoot>
 * ```
 * @description creates an `HTMLTableSectionElement` instance.
 * @example
 * ```typescript
 * const tfoot:HTMLTableSectionElement =
 *     TFOOT(
 *         {className: 'tfoot'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const TFOOT: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLTableSectionElement, P>) => HTMLTableSectionElement;
/**
 * #### HTMLTableSectionElement
 * ```html
 * <tbody>
 * ```
 * @description creates an `HTMLTableSectionElement` instance.
 * @example
 * ```typescript
 * const tbody:HTMLTableSectionElement =
 *     TBODY(
 *         {className: 'tbody'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const TBODY: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLTableSectionElement, P>) => HTMLTableSectionElement;
/**
 * #### HTMLTemplateElement
 * ```html
 * <template>
 * ```
 * @description creates an `HTMLTemplateElement` instance.
 * @example
 * ```typescript
 * const template:HTMLTemplateElement =
 *     TEMPLATE(
 *         {className: 'template'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const TEMPLATE: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLTemplateElement, P>) => HTMLTemplateElement;
/**
 * #### HTMLTextAreaElement
 * ```html
 * <textarea>
 * ```
 * @description creates an `HTMLTextAreaElement` instance.
 * @example
 * ```typescript
 * const textarea:HTMLTextAreaElement =
 *     TEXTAREA(
 *         {className: 'textarea'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const TEXTAREA: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLTextAreaElement, P>) => HTMLTextAreaElement;
/**
 * #### HTMLTimeElement
 * ```html
 * <time>
 * ```
 * @description creates an `HTMLTimeElement` instance.
 * @example
 * ```typescript
 * const time:HTMLTimeElement =
 *     TIME(
 *         {className: 'time'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const TIME: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLTimeElement, P>) => HTMLTimeElement;
/**
 * #### HTMLTitleElement
 * ```html
 * <title>
 * ```
 * @description creates an `HTMLTitleElement` instance.
 * @example
 * ```typescript
 * const title:HTMLTitleElement =
 *     TITLE(
 *         {className: 'title'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const TITLE: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLTitleElement, P>) => HTMLTitleElement;
/**
 * #### HTMLTrackElement
 * ```html
 * <track>
 * ```
 * @description creates an `HTMLTrackElement` instance.
 * @example ```typescript
 * const trackElement = TRACK({className: 'track'});
 * ```
 */
export declare const TRACK: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLTrackElement, P>) => HTMLTrackElement;
/**
 * #### HTMLElement
 * ```html
 * <u>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const u:HTMLElement =
 *     U(
 *         {className: 'u'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const U: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLElement, P>) => HTMLElement;
/**
 * #### HTMLUListElement
 * ```html
 * <ul>
 * ```
 * @description creates an `HTMLUListElement` instance.
 * @example
 * ```typescript
 * const ul:HTMLUListElement =
 *     UL(
 *         {className: 'ul'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const UL: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLUListElement, P>) => HTMLUListElement;
/**
 * #### HTMLVideoElement
 * ```html
 * <video>
 * ```
 * @description creates an `HTMLVideoElement` instance.
 * @example
 * ```typescript
 * const video:HTMLVideoElement =
 *     VIDEO(
 *         {className: 'video'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const VIDEO: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLVideoElement, P>) => HTMLVideoElement;
/**
 * #### HTMLElement
 * ```html
 * <var>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const var:HTMLElement =
 *     VAR(
 *         {className: 'var'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     );
 * ```
 */
export declare const VAR: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLElement, P>) => HTMLElement;
/**
 * #### HTMLElement
 * ```html
 * <wbr>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example ```typescript
 * const wbrElement = WBR({className: 'wbr'});
 * ```
 */
export declare const WBR: <P extends import("..").Props = any>(...params: import("./types").RenderParameters<HTMLElement, P>) => HTMLElement;
export declare const FRAGMENT: typeof createFragment;
