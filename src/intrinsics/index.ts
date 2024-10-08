import { createElementFactory, createFragment } from "./utils";


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
export const A = createElementFactory("a")
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
export const AREA = createElementFactory("area")
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
export const AUDIO = createElementFactory("audio")
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
export const ABBR = createElementFactory("abbr")
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
export const ADDRESS = createElementFactory("address")
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
export const ARTICLE = createElementFactory("article")
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
export const ASIDE = createElementFactory("aside")
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
export const BR = createElementFactory("br")
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
export const B = createElementFactory("b")
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
export const BDI = createElementFactory("bdi")
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
export const BDO = createElementFactory("bdo")
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
export const BASE = createElementFactory("base")
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
export const BODY = createElementFactory("body")
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
export const BUTTON = createElementFactory("button")
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
export const CANVAS = createElementFactory("canvas")
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
export const CITE = createElementFactory("cite")
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
export const CODE = createElementFactory("code")
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
export const COLGROUP = createElementFactory("colgroup")
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
export const DD = createElementFactory("dd")
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
export const DL = createElementFactory("dl")
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
export const DATA = createElementFactory("data")
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
export const DATALIST = createElementFactory("datalist")
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
export const DETAILS = createElementFactory("details")
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
export const DIALOG = createElementFactory("dialog")
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
export const DIV = createElementFactory("div")
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
export const EM = createElementFactory("em")
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
export const EMBED = createElementFactory("embed")
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
export const FIELDSET = createElementFactory("fieldset")
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
export const FIGURE = createElementFactory("figure")
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
export const FOOTER = createElementFactory("footer")
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
export const FORM = createElementFactory("form")
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
export const HGROUP = createElementFactory("hgroup")
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
export const HR = createElementFactory("hr")
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
export const HEAD = createElementFactory("head")
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
export const H1 = createElementFactory("h1")
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
export const H2 = createElementFactory("h2")
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
export const H3 = createElementFactory("h3")
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
export const H4 = createElementFactory("h4")
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
export const H5 = createElementFactory("h5")
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
export const H6 = createElementFactory("h6")
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
export const HTML = createElementFactory("html")
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
export const KBD = createElementFactory("kbd")
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
export const INS = createElementFactory("ins")
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
export const I = createElementFactory("i")
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
export const IFRAME = createElementFactory("iframe")
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
export const IMG = createElementFactory("img")
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
export const INPUT = createElementFactory("input")
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
export const LI = createElementFactory("li")
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
export const LABEL = createElementFactory("label")
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
export const LEGEND = createElementFactory("legend")
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
export const LINK = createElementFactory("link")
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
export const MAIN = createElementFactory("main")
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
export const MAP = createElementFactory("map")
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
export const MENU = createElementFactory("menu")
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
export const MARK = createElementFactory("mark")
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
export const NAV = createElementFactory("nav")
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
export const NOSCRIPT = createElementFactory("noscript")
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
export const META = createElementFactory("meta")
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
export const METER = createElementFactory("meter")
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
export const DEL = createElementFactory("del")
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
export const OL = createElementFactory("ol")
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
export const OBJECT = createElementFactory("object")
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
export const OPTGROUP = createElementFactory("optgroup")
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
export const OPTION = createElementFactory("option")
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
export const OUTPUT = createElementFactory("output")
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
export const P = createElementFactory("p")
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
export const PICTURE = createElementFactory("picture")
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
export const PRE = createElementFactory("pre")
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
export const PROGRESS = createElementFactory("progress")
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
export const RT = createElementFactory("rt")
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
export const RP = createElementFactory("rp")
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
export const RUBY = createElementFactory("ruby")
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
export const SMALL = createElementFactory("small")
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
export const Q = createElementFactory("q")
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
export const BLOCKQUOTE = createElementFactory("blockquote")
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
export const SCRIPT = createElementFactory("script")
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
export const SELECT = createElementFactory("select")
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
export const SLOT = createElementFactory("slot")
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
export const SOURCE = createElementFactory("source")
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
export const SPAN = createElementFactory("span")
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
export const STYLE = createElementFactory("style")
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
export const SUB = createElementFactory("sub")
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
export const SUMMARY = createElementFactory("summary")
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
export const SEARCH = createElementFactory("search")
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
export const SECTION = createElementFactory("section")
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
export const CAPTION = createElementFactory("caption")
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
export const TH = createElementFactory("th")
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
export const TD = createElementFactory("td")
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
export const COL = createElementFactory("col")
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
export const TABLE = createElementFactory("table")
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
export const TR = createElementFactory("tr")
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
export const THEAD = createElementFactory("thead")
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
export const TFOOT = createElementFactory("tfoot")
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
export const TBODY = createElementFactory("tbody")
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
export const TEMPLATE = createElementFactory("template")
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
export const TEXTAREA = createElementFactory("textarea")
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
export const TIME = createElementFactory("time")
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
export const TITLE = createElementFactory("title")
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
export const TRACK = createElementFactory("track")
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
export const U = createElementFactory("u")
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
export const UL = createElementFactory("ul")
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
export const VIDEO = createElementFactory("video")
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
export const VAR = createElementFactory("var")
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
export const WBR = createElementFactory("wbr")
export const FRAGMENT = createFragment;