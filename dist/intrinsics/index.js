"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LEGEND = exports.LABEL = exports.LI = exports.INPUT = exports.IMG = exports.IFRAME = exports.I = exports.INS = exports.KBD = exports.HTML = exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = exports.HEAD = exports.HR = exports.HGROUP = exports.FORM = exports.FOOTER = exports.FIGURE = exports.FIELDSET = exports.EMBED = exports.EM = exports.DIV = exports.DIALOG = exports.DETAILS = exports.DATALIST = exports.DATA = exports.DL = exports.DD = exports.COLGROUP = exports.CODE = exports.CITE = exports.CANVAS = exports.BUTTON = exports.BODY = exports.BASE = exports.BDO = exports.BDI = exports.B = exports.BR = exports.ASIDE = exports.ARTICLE = exports.ADDRESS = exports.ABBR = exports.AUDIO = exports.AREA = exports.A = void 0;
exports.U = exports.TRACK = exports.TITLE = exports.TIME = exports.TEXTAREA = exports.TEMPLATE = exports.TBODY = exports.TFOOT = exports.THEAD = exports.TR = exports.TABLE = exports.COL = exports.TD = exports.TH = exports.CAPTION = exports.SECTION = exports.SEARCH = exports.SUMMARY = exports.SUB = exports.STYLE = exports.SPAN = exports.SOURCE = exports.SLOT = exports.SELECT = exports.SCRIPT = exports.BLOCKQUOTE = exports.Q = exports.SMALL = exports.RUBY = exports.RP = exports.RT = exports.PROGRESS = exports.PRE = exports.PICTURE = exports.P = exports.OUTPUT = exports.OPTION = exports.OPTGROUP = exports.OBJECT = exports.OL = exports.DEL = exports.METER = exports.META = exports.NOSCRIPT = exports.NAV = exports.MARK = exports.MENU = exports.MAP = exports.MAIN = exports.LINK = void 0;
exports.WBR = exports.VAR = exports.VIDEO = exports.UL = void 0;
const utils_1 = require("./utils");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $a =
 *     A(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.A = (0, utils_1.createElementFactory)("a");
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
exports.AREA = (0, utils_1.createElementFactory)("area");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $audio =
 *     AUDIO(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.AUDIO = (0, utils_1.createElementFactory)("audio");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $abbr =
 *     ABBR(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.ABBR = (0, utils_1.createElementFactory)("abbr");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $address =
 *     ADDRESS(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.ADDRESS = (0, utils_1.createElementFactory)("address");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $article =
 *     ARTICLE(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.ARTICLE = (0, utils_1.createElementFactory)("article");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $aside =
 *     ASIDE(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.ASIDE = (0, utils_1.createElementFactory)("aside");
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
exports.BR = (0, utils_1.createElementFactory)("br");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $b =
 *     B(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.B = (0, utils_1.createElementFactory)("b");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $bdi =
 *     BDI(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.BDI = (0, utils_1.createElementFactory)("bdi");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $bdo =
 *     BDO(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.BDO = (0, utils_1.createElementFactory)("bdo");
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
exports.BASE = (0, utils_1.createElementFactory)("base");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $body =
 *     BODY(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.BODY = (0, utils_1.createElementFactory)("body");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $button =
 *     BUTTON(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.BUTTON = (0, utils_1.createElementFactory)("button");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $canvas =
 *     CANVAS(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.CANVAS = (0, utils_1.createElementFactory)("canvas");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $cite =
 *     CITE(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.CITE = (0, utils_1.createElementFactory)("cite");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $code =
 *     CODE(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.CODE = (0, utils_1.createElementFactory)("code");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $colgroup =
 *     COLGROUP(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.COLGROUP = (0, utils_1.createElementFactory)("colgroup");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $dd =
 *     DD(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.DD = (0, utils_1.createElementFactory)("dd");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $dl =
 *     DL(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.DL = (0, utils_1.createElementFactory)("dl");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $data =
 *     DATA(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.DATA = (0, utils_1.createElementFactory)("data");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $datalist =
 *     DATALIST(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.DATALIST = (0, utils_1.createElementFactory)("datalist");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $details =
 *     DETAILS(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.DETAILS = (0, utils_1.createElementFactory)("details");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $dialog =
 *     DIALOG(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.DIALOG = (0, utils_1.createElementFactory)("dialog");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $div =
 *     DIV(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.DIV = (0, utils_1.createElementFactory)("div");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $em =
 *     EM(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.EM = (0, utils_1.createElementFactory)("em");
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
exports.EMBED = (0, utils_1.createElementFactory)("embed");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $fieldset =
 *     FIELDSET(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.FIELDSET = (0, utils_1.createElementFactory)("fieldset");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $figure =
 *     FIGURE(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.FIGURE = (0, utils_1.createElementFactory)("figure");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $footer =
 *     FOOTER(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.FOOTER = (0, utils_1.createElementFactory)("footer");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $form =
 *     FORM(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.FORM = (0, utils_1.createElementFactory)("form");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $hgroup =
 *     HGROUP(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.HGROUP = (0, utils_1.createElementFactory)("hgroup");
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
exports.HR = (0, utils_1.createElementFactory)("hr");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $head =
 *     HEAD(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.HEAD = (0, utils_1.createElementFactory)("head");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $h1 =
 *     H1(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.H1 = (0, utils_1.createElementFactory)("h1");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $h2 =
 *     H2(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.H2 = (0, utils_1.createElementFactory)("h2");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $h3 =
 *     H3(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.H3 = (0, utils_1.createElementFactory)("h3");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $h4 =
 *     H4(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.H4 = (0, utils_1.createElementFactory)("h4");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $h5 =
 *     H5(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.H5 = (0, utils_1.createElementFactory)("h5");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $h6 =
 *     H6(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.H6 = (0, utils_1.createElementFactory)("h6");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $html =
 *     HTML(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.HTML = (0, utils_1.createElementFactory)("html");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $kbd =
 *     KBD(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.KBD = (0, utils_1.createElementFactory)("kbd");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $ins =
 *     INS(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.INS = (0, utils_1.createElementFactory)("ins");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $i =
 *     I(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.I = (0, utils_1.createElementFactory)("i");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $iframe =
 *     IFRAME(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.IFRAME = (0, utils_1.createElementFactory)("iframe");
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
exports.IMG = (0, utils_1.createElementFactory)("img");
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
exports.INPUT = (0, utils_1.createElementFactory)("input");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $li =
 *     LI(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.LI = (0, utils_1.createElementFactory)("li");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $label =
 *     LABEL(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.LABEL = (0, utils_1.createElementFactory)("label");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $legend =
 *     LEGEND(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.LEGEND = (0, utils_1.createElementFactory)("legend");
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
exports.LINK = (0, utils_1.createElementFactory)("link");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $main =
 *     MAIN(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.MAIN = (0, utils_1.createElementFactory)("main");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $map =
 *     MAP(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.MAP = (0, utils_1.createElementFactory)("map");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $menu =
 *     MENU(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.MENU = (0, utils_1.createElementFactory)("menu");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $mark =
 *     MARK(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.MARK = (0, utils_1.createElementFactory)("mark");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $nav =
 *     NAV(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.NAV = (0, utils_1.createElementFactory)("nav");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $noscript =
 *     NOSCRIPT(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.NOSCRIPT = (0, utils_1.createElementFactory)("noscript");
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
exports.META = (0, utils_1.createElementFactory)("meta");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $meter =
 *     METER(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.METER = (0, utils_1.createElementFactory)("meter");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $del =
 *     DEL(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.DEL = (0, utils_1.createElementFactory)("del");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $ol =
 *     OL(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.OL = (0, utils_1.createElementFactory)("ol");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $object =
 *     OBJECT(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.OBJECT = (0, utils_1.createElementFactory)("object");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $optgroup =
 *     OPTGROUP(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.OPTGROUP = (0, utils_1.createElementFactory)("optgroup");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $option =
 *     OPTION(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.OPTION = (0, utils_1.createElementFactory)("option");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $output =
 *     OUTPUT(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.OUTPUT = (0, utils_1.createElementFactory)("output");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $p =
 *     P(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.P = (0, utils_1.createElementFactory)("p");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $picture =
 *     PICTURE(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.PICTURE = (0, utils_1.createElementFactory)("picture");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $pre =
 *     PRE(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.PRE = (0, utils_1.createElementFactory)("pre");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $progress =
 *     PROGRESS(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.PROGRESS = (0, utils_1.createElementFactory)("progress");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $rt =
 *     RT(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.RT = (0, utils_1.createElementFactory)("rt");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $rp =
 *     RP(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.RP = (0, utils_1.createElementFactory)("rp");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $ruby =
 *     RUBY(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.RUBY = (0, utils_1.createElementFactory)("ruby");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $small =
 *     SMALL(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.SMALL = (0, utils_1.createElementFactory)("small");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $q =
 *     Q(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.Q = (0, utils_1.createElementFactory)("q");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $blockquote =
 *     BLOCKQUOTE(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.BLOCKQUOTE = (0, utils_1.createElementFactory)("blockquote");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $script =
 *     SCRIPT(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.SCRIPT = (0, utils_1.createElementFactory)("script");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $select =
 *     SELECT(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.SELECT = (0, utils_1.createElementFactory)("select");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $slot =
 *     SLOT(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.SLOT = (0, utils_1.createElementFactory)("slot");
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
exports.SOURCE = (0, utils_1.createElementFactory)("source");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $span =
 *     SPAN(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.SPAN = (0, utils_1.createElementFactory)("span");
/**
 * #### HTMLStyleElement
 * ```html
 * <style>
 * ```
 * @description creates an `HTMLStyleElement` instance.
 * @example
 * ```typescript
 * const style:HTMLStyleElement =
 *     STYLE(
 *         {className: 'style'},
 *         'Hello',
 *         SPAN({style:{color:'red'}}, 'World')
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $style =
 *     STYLE(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.STYLE = (0, utils_1.createElementFactory)("style");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $sub =
 *     SUB(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.SUB = (0, utils_1.createElementFactory)("sub");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $summary =
 *     SUMMARY(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.SUMMARY = (0, utils_1.createElementFactory)("summary");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $search =
 *     SEARCH(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.SEARCH = (0, utils_1.createElementFactory)("search");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $section =
 *     SECTION(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.SECTION = (0, utils_1.createElementFactory)("section");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $caption =
 *     CAPTION(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.CAPTION = (0, utils_1.createElementFactory)("caption");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $th =
 *     TH(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.TH = (0, utils_1.createElementFactory)("th");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $td =
 *     TD(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.TD = (0, utils_1.createElementFactory)("td");
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
exports.COL = (0, utils_1.createElementFactory)("col");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $table =
 *     TABLE(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.TABLE = (0, utils_1.createElementFactory)("table");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $tr =
 *     TR(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.TR = (0, utils_1.createElementFactory)("tr");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $thead =
 *     THEAD(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.THEAD = (0, utils_1.createElementFactory)("thead");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $tfoot =
 *     TFOOT(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.TFOOT = (0, utils_1.createElementFactory)("tfoot");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $tbody =
 *     TBODY(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.TBODY = (0, utils_1.createElementFactory)("tbody");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $template =
 *     TEMPLATE(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.TEMPLATE = (0, utils_1.createElementFactory)("template");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $textarea =
 *     TEXTAREA(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.TEXTAREA = (0, utils_1.createElementFactory)("textarea");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $time =
 *     TIME(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.TIME = (0, utils_1.createElementFactory)("time");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $title =
 *     TITLE(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.TITLE = (0, utils_1.createElementFactory)("title");
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
exports.TRACK = (0, utils_1.createElementFactory)("track");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $u =
 *     U(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.U = (0, utils_1.createElementFactory)("u");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $ul =
 *     UL(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.UL = (0, utils_1.createElementFactory)("ul");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $video =
 *     VIDEO(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.VIDEO = (0, utils_1.createElementFactory)("video");
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
 *     )
 *
// with props

 * const props = createProps({name: 'snakgoat', color: 'red'});
 * const $var =
 *     VAR(props, p => [
 *         {style: {color: p.color}},
 *         SPAN(p.name)
 *     ])
 * ```
 */
exports.VAR = (0, utils_1.createElementFactory)("var");
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
exports.WBR = (0, utils_1.createElementFactory)("wbr");
