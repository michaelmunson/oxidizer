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
export declare const A: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLAnchorElement, P>) => HTMLAnchorElement;
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
export declare const AREA: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLAreaElement, P>) => HTMLAreaElement;
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
export declare const AUDIO: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLAudioElement, P>) => HTMLAudioElement;
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
export declare const ABBR: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLElement, P>) => HTMLElement;
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
export declare const ADDRESS: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLElement, P>) => HTMLElement;
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
export declare const ARTICLE: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLElement, P>) => HTMLElement;
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
export declare const ASIDE: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLElement, P>) => HTMLElement;
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
export declare const BR: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLBRElement, P>) => HTMLBRElement;
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
export declare const B: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLElement, P>) => HTMLElement;
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
export declare const BDI: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLElement, P>) => HTMLElement;
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
export declare const BDO: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLElement, P>) => HTMLElement;
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
export declare const BASE: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLBaseElement, P>) => HTMLBaseElement;
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
export declare const BODY: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLBodyElement, P>) => HTMLBodyElement;
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
export declare const BUTTON: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLButtonElement, P>) => HTMLButtonElement;
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
export declare const CANVAS: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLCanvasElement, P>) => HTMLCanvasElement;
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
export declare const CITE: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLElement, P>) => HTMLElement;
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
export declare const CODE: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLElement, P>) => HTMLElement;
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
export declare const COLGROUP: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLTableColElement, P>) => HTMLTableColElement;
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
export declare const DD: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLElement, P>) => HTMLElement;
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
export declare const DL: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLDListElement, P>) => HTMLDListElement;
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
export declare const DATA: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLDataElement, P>) => HTMLDataElement;
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
export declare const DATALIST: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLDataListElement, P>) => HTMLDataListElement;
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
export declare const DETAILS: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLDetailsElement, P>) => HTMLDetailsElement;
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
export declare const DIALOG: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLDialogElement, P>) => HTMLDialogElement;
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
export declare const DIV: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLDivElement, P>) => HTMLDivElement;
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
export declare const EM: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLElement, P>) => HTMLElement;
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
export declare const EMBED: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLEmbedElement, P>) => HTMLEmbedElement;
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
export declare const FIELDSET: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLFieldSetElement, P>) => HTMLFieldSetElement;
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
export declare const FIGURE: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLElement, P>) => HTMLElement;
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
export declare const FOOTER: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLElement, P>) => HTMLElement;
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
export declare const FORM: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLFormElement, P>) => HTMLFormElement;
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
export declare const HGROUP: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLElement, P>) => HTMLElement;
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
export declare const HR: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLHRElement, P>) => HTMLHRElement;
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
export declare const HEAD: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLHeadElement, P>) => HTMLHeadElement;
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
export declare const H1: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLHeadingElement, P>) => HTMLHeadingElement;
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
export declare const H2: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLHeadingElement, P>) => HTMLHeadingElement;
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
export declare const H3: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLHeadingElement, P>) => HTMLHeadingElement;
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
export declare const H4: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLHeadingElement, P>) => HTMLHeadingElement;
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
export declare const H5: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLHeadingElement, P>) => HTMLHeadingElement;
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
export declare const H6: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLHeadingElement, P>) => HTMLHeadingElement;
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
export declare const HTML: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLHtmlElement, P>) => HTMLHtmlElement;
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
export declare const KBD: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLElement, P>) => HTMLElement;
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
export declare const INS: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLModElement, P>) => HTMLModElement;
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
export declare const I: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLElement, P>) => HTMLElement;
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
export declare const IFRAME: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLIFrameElement, P>) => HTMLIFrameElement;
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
export declare const IMG: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLImageElement, P>) => HTMLImageElement;
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
export declare const INPUT: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLInputElement, P>) => HTMLInputElement;
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
export declare const LI: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLLIElement, P>) => HTMLLIElement;
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
export declare const LABEL: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLLabelElement, P>) => HTMLLabelElement;
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
export declare const LEGEND: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLLegendElement, P>) => HTMLLegendElement;
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
export declare const LINK: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLLinkElement, P>) => HTMLLinkElement;
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
export declare const MAIN: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLElement, P>) => HTMLElement;
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
export declare const MAP: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLMapElement, P>) => HTMLMapElement;
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
export declare const MENU: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLMenuElement, P>) => HTMLMenuElement;
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
export declare const MARK: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLElement, P>) => HTMLElement;
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
export declare const NAV: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLElement, P>) => HTMLElement;
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
export declare const NOSCRIPT: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLElement, P>) => HTMLElement;
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
export declare const META: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLMetaElement, P>) => HTMLMetaElement;
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
export declare const METER: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLMeterElement, P>) => HTMLMeterElement;
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
export declare const DEL: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLModElement, P>) => HTMLModElement;
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
export declare const OL: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLOListElement, P>) => HTMLOListElement;
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
export declare const OBJECT: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLObjectElement, P>) => HTMLObjectElement;
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
export declare const OPTGROUP: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLOptGroupElement, P>) => HTMLOptGroupElement;
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
export declare const OPTION: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLOptionElement, P>) => HTMLOptionElement;
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
export declare const OUTPUT: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLOutputElement, P>) => HTMLOutputElement;
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
export declare const P: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLParagraphElement, P>) => HTMLParagraphElement;
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
export declare const PICTURE: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLPictureElement, P>) => HTMLPictureElement;
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
export declare const PRE: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLPreElement, P>) => HTMLPreElement;
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
export declare const PROGRESS: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLProgressElement, P>) => HTMLProgressElement;
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
export declare const RT: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLElement, P>) => HTMLElement;
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
export declare const RP: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLElement, P>) => HTMLElement;
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
export declare const RUBY: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLElement, P>) => HTMLElement;
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
export declare const SMALL: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLElement, P>) => HTMLElement;
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
export declare const Q: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLQuoteElement, P>) => HTMLQuoteElement;
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
export declare const BLOCKQUOTE: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLQuoteElement, P>) => HTMLQuoteElement;
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
export declare const SCRIPT: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLScriptElement, P>) => HTMLScriptElement;
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
export declare const SELECT: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLSelectElement, P>) => HTMLSelectElement;
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
export declare const SLOT: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLSlotElement, P>) => HTMLSlotElement;
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
export declare const SOURCE: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLSourceElement, P>) => HTMLSourceElement;
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
export declare const SPAN: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLSpanElement, P>) => HTMLSpanElement;
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
export declare const STYLE: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLStyleElement, P>) => HTMLStyleElement;
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
export declare const SUB: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLElement, P>) => HTMLElement;
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
export declare const SUMMARY: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLElement, P>) => HTMLElement;
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
export declare const SEARCH: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLElement, P>) => HTMLElement;
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
export declare const SECTION: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLElement, P>) => HTMLElement;
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
export declare const CAPTION: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLTableCaptionElement, P>) => HTMLTableCaptionElement;
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
export declare const TH: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLTableCellElement, P>) => HTMLTableCellElement;
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
export declare const TD: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLTableCellElement, P>) => HTMLTableCellElement;
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
export declare const COL: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLTableColElement, P>) => HTMLTableColElement;
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
export declare const TABLE: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLTableElement, P>) => HTMLTableElement;
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
export declare const TR: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLTableRowElement, P>) => HTMLTableRowElement;
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
export declare const THEAD: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLTableSectionElement, P>) => HTMLTableSectionElement;
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
export declare const TFOOT: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLTableSectionElement, P>) => HTMLTableSectionElement;
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
export declare const TBODY: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLTableSectionElement, P>) => HTMLTableSectionElement;
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
export declare const TEMPLATE: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLTemplateElement, P>) => HTMLTemplateElement;
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
export declare const TEXTAREA: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLTextAreaElement, P>) => HTMLTextAreaElement;
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
export declare const TIME: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLTimeElement, P>) => HTMLTimeElement;
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
export declare const TITLE: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLTitleElement, P>) => HTMLTitleElement;
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
export declare const TRACK: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLTrackElement, P>) => HTMLTrackElement;
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
export declare const U: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLElement, P>) => HTMLElement;
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
export declare const UL: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLUListElement, P>) => HTMLUListElement;
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
export declare const VIDEO: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLVideoElement, P>) => HTMLVideoElement;
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
export declare const VAR: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLElement, P>) => HTMLElement;
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
export declare const WBR: <P extends {} = any>(...params: import("./types").CreateIntrinsicParameters<HTMLElement, P>) => HTMLElement;
