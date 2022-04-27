import { methods } from "../utils/utils.mjs";
import css from "./css.mjs";
import html from "./html.mjs";

const $create = html.create;
const $createExt = function (tagname, props, $ubtree) {
    const subtree = (this.render)
        ? this.render.call(this, props)
        : [];

    const node = html.create(tagname, props, subtree);

    if (this.render) node.render = this.render;

    if ($ubtree) node.renderSubtree($ubtree);

    methods(this).filter(i => !(['constructor', 'render']).includes(i)).forEach(method => {
        node[method] = this[method];
    });

    if (this.css) {
        const styles = (this.css.sheet)
            ? this.css
            : css(this.css);
        styles.sheet.adopt(true);
    }

    return node;
}

/**
 * @typedef {(HTMLElement|DOMString)} Html
 * @typedef {(array|function|Html)} Subtree
 */

/**
 * Creates HTMLElement < a >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/

export class A {
    constructor (props = {}, subtree = []) {
        const tagname = "a";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < abbr >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class ABBR {
    constructor (props, subtree) {
        const tagname = "abbr";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < acronym >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class ACRONYM {
    constructor (props, subtree) {
        const tagname = "acronym";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < address >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class ADDRESS {
    constructor (props, subtree) {
        const tagname = "address";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < applet >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class APPLET {
    constructor (props, subtree) {
        const tagname = "applet";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < area >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class AREA {
    constructor (props, subtree) {
        const tagname = "area";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < article >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class ARTICLE {
    constructor (props, subtree) {
        const tagname = "article";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < aside >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class ASIDE {
    constructor (props, subtree) {
        const tagname = "aside";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < audio >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class AUDIO {
    constructor (props, subtree) {
        const tagname = "audio";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < b >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class B {
    constructor (props, subtree) {
        const tagname = "b";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < base >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class BASE {
    constructor (props, subtree) {
        const tagname = "base";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < basefont >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class BASEFONT {
    constructor (props, subtree) {
        const tagname = "basefont";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < bdi >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class BDI {
    constructor (props, subtree) {
        const tagname = "bdi";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < bdo >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class BDO {
    constructor (props, subtree) {
        const tagname = "bdo";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < big >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class BIG {
    constructor (props, subtree) {
        const tagname = "big";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < blockquote >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class BLOCKQUOTE {
    constructor (props, subtree) {
        const tagname = "blockquote";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < body >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class BODY {
    constructor (props, subtree) {
        const tagname = "body";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < br >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class BR {
    constructor (props, subtree) {
        const tagname = "br";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < button >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class BUTTON {
    constructor (props, subtree) {
        const tagname = "button";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < canvas >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class CANVAS {
    constructor (props, subtree) {
        const tagname = "canvas";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < caption >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class CAPTION {
    constructor (props, subtree) {
        const tagname = "caption";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < center >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class CENTER {
    constructor (props, subtree) {
        const tagname = "center";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < cite >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class CITE {
    constructor (props, subtree) {
        const tagname = "cite";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < code >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class CODE {
    constructor (props, subtree) {
        const tagname = "code";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < col >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class COL {
    constructor (props, subtree) {
        const tagname = "col";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < colgroup >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class COLGROUP {
    constructor (props, subtree) {
        const tagname = "colgroup";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < data >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class DATA {
    constructor (props, subtree) {
        const tagname = "data";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < datalist >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class DATALIST {
    constructor (props, subtree) {
        const tagname = "datalist";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < dd >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class DD {
    constructor (props, subtree) {
        const tagname = "dd";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < del >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class DEL {
    constructor (props, subtree) {
        const tagname = "del";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < details >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class DETAILS {
    constructor (props, subtree) {
        const tagname = "details";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < dfn >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class DFN {
    constructor (props, subtree) {
        const tagname = "dfn";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < dialog >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class DIALOG {
    constructor (props, subtree) {
        const tagname = "dialog";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < dir >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class DIR {
    constructor (props, subtree) {
        const tagname = "dir";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < div >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class DIV {
    constructor (props, subtree) {
        const tagname = "div";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < dl >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class DL {
    constructor (props, subtree) {
        const tagname = "dl";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < dt >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class DT {
    constructor (props, subtree) {
        const tagname = "dt";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < em >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class EM {
    constructor (props, subtree) {
        const tagname = "em";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < embed >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class EMBED {
    constructor (props, subtree) {
        const tagname = "embed";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < fieldset >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class FIELDSET {
    constructor (props, subtree) {
        const tagname = "fieldset";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < figcaption >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class FIGCAPTION {
    constructor (props, subtree) {
        const tagname = "figcaption";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < figure >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class FIGURE {
    constructor (props, subtree) {
        const tagname = "figure";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < font >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class FONT {
    constructor (props, subtree) {
        const tagname = "font";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < footer >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class FOOTER {
    constructor (props, subtree) {
        const tagname = "footer";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < form >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class FORM {
    constructor (props, subtree) {
        const tagname = "form";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < frame >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class FRAME {
    constructor (props, subtree) {
        const tagname = "frame";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < frameset >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class FRAMESET {
    constructor (props, subtree) {
        const tagname = "frameset";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < h1 >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class H1 {
    constructor (props, subtree) {
        const tagname = "h1";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < h2 >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class H2 {
    constructor (props, subtree) {
        const tagname = "h2";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < h3 >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class H3 {
    constructor (props, subtree) {
        const tagname = "h3";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < h4 >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class H4 {
    constructor (props, subtree) {
        const tagname = "h4";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < h5 >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class H5 {
    constructor (props, subtree) {
        const tagname = "h5";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < h6 >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class H6 {
    constructor (props, subtree) {
        const tagname = "h6";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < head >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class HEAD {
    constructor (props, subtree) {
        const tagname = "head";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < header >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class HEADER {
    constructor (props, subtree) {
        const tagname = "header";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < hr >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class HR {
    constructor (props, subtree) {
        const tagname = "hr";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < html >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class HTML {
    constructor (props, subtree) {
        const tagname = "html";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < i >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class I {
    constructor (props, subtree) {
        const tagname = "i";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < iframe >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class IFRAME {
    constructor (props, subtree) {
        const tagname = "iframe";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < img >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class IMG {
    constructor (props, subtree) {
        const tagname = "img";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < input >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class INPUT {
    constructor (props, subtree) {
        const tagname = "input";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < ins >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class INS {
    constructor (props, subtree) {
        const tagname = "ins";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < kbd >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class KBD {
    constructor (props, subtree) {
        const tagname = "kbd";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < label >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class LABEL {
    constructor (props, subtree) {
        const tagname = "label";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < legend >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class LEGEND {
    constructor (props, subtree) {
        const tagname = "legend";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < li >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class LI {
    constructor (props, subtree) {
        const tagname = "li";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < link >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class LINK {
    constructor (props, subtree) {
        const tagname = "link";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < main >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class MAIN {
    constructor (props, subtree) {
        const tagname = "main";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < map >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class MAP {
    constructor (props, subtree) {
        const tagname = "map";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < main >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class MARK {
    constructor (props, subtree) {
        const tagname = "mark";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < meta >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class META {
    constructor (props, subtree) {
        const tagname = "meta";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < meter >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class METER {
    constructor (props, subtree) {
        const tagname = "meter";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < nav >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class NAV {
    constructor (props, subtree) {
        const tagname = "nav";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < noframes >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class NOFRAMES {
    constructor (props, subtree) {
        const tagname = "noframes";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < noscript >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class NOSCRIPT {
    constructor (props, subtree) {
        const tagname = "noscript";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < object >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class OBJECT {
    constructor (props, subtree) {
        const tagname = "object";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < ol >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class OL {
    constructor (props, subtree) {
        const tagname = "ol";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < optgroup >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class OPTGROUP {
    constructor (props, subtree) {
        const tagname = "optgroup";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < option >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class OPTION {
    constructor (props, subtree) {
        const tagname = "option";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < output >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class OUTPUT {
    constructor (props, subtree) {
        const tagname = "output";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < p >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class P {
    constructor (props, subtree) {
        const tagname = "p";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < param >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class PARAM {
    constructor (props, subtree) {
        const tagname = "param";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < picture >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class PICTURE {
    constructor (props, subtree) {
        const tagname = "picture";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < pre >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class PRE {
    constructor (props, subtree) {
        const tagname = "pre";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < progress >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class PROGRESS {
    constructor (props, subtree) {
        const tagname = "progress";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < q >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class Q {
    constructor (props, subtree) {
        const tagname = "q";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < rp >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class RP {
    constructor (props, subtree) {
        const tagname = "rp";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < rt >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class RT {
    constructor (props, subtree) {
        const tagname = "rt";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < ruby >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class RUBY {
    constructor (props, subtree) {
        const tagname = "ruby";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < s >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class S {
    constructor (props, subtree) {
        const tagname = "s";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < samp >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class SAMP {
    constructor (props, subtree) {
        const tagname = "samp";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < script >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class SCRIPT {
    constructor (props, subtree) {
        const tagname = "script";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < section >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class SECTION {
    constructor (props, subtree) {
        const tagname = "section";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < select >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class SELECT {
    constructor (props, subtree) {
        const tagname = "select";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < small >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class SMALL {
    constructor (props, subtree) {
        const tagname = "small";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < source >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class SOURCE {
    constructor (props, subtree) {
        const tagname = "source";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < span >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class SPAN {
    constructor (props, subtree) {
        const tagname = "span";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < strike >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class STRIKE {
    constructor (props, subtree) {
        const tagname = "strike";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < strong >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class STRONG {
    constructor (props, subtree) {
        const tagname = "strong";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < style >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class STYLE {
    constructor (cssRules) {
        const node = document.createElement('style');
        let ruleArray = null;

        if (cssRules instanceof css.RuleList) {
            ruleArray = cssRules;
        }
        else ruleArray = css(cssRules);

        node.ruleArray = ruleArray;
        function render () {
            document.head.append(this);
            this.ruleArray.forEach(rule => {
                try {
                    this.sheet.insertRule(rule.toString());
                }
                catch (e) {}
            })
        }
        node.render = render.bind(node);
        return node;
    }
}

/**
 * Creates HTMLElement < sub >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class SUB {
    constructor (props, subtree) {
        const tagname = "sub";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < summary >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class SUMMARY {
    constructor (props, subtree) {
        const tagname = "summary";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < sup >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class SUP {
    constructor (props, subtree) {
        const tagname = "sup";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < svg >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class SVG {
    constructor (props, subtree) {
        const tagname = "svg";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < table >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class TABLE {
    constructor (props, subtree) {
        const tagname = "table";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < tbody >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class TBODY {
    constructor (props, subtree) {
        const tagname = "tbody";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < td >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class TD {
    constructor (props, subtree) {
        const tagname = "td";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < template >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class TEMPLATE {
    constructor (props, subtree) {
        const tagname = "template";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < textarea >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class TEXTAREA {
    constructor (props, subtree) {
        const tagname = "textarea";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < tfoot >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class TFOOT {
    constructor (props, subtree) {
        const tagname = "tfoot";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < th >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class TH {
    constructor (props, subtree) {
        const tagname = "th";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < thead >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class THEAD {
    constructor (props, subtree) {
        const tagname = "thead";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < time >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class TIME {
    constructor (props, subtree) {
        const tagname = "time";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < title >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class TITLE {
    constructor (props, subtree) {
        const tagname = "title";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < tr >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class TR {
    constructor (props, subtree) {
        const tagname = "tr";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < track >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class TRACK {
    constructor (props, subtree) {
        const tagname = "track";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < tt >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class TT {
    constructor (props, subtree) {
        const tagname = "tt";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < u >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class U {
    constructor (props, subtree) {
        const tagname = "u";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < ul >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class UL {
    constructor (props, subtree) {
        const tagname = "ul";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < var >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class VAR {
    constructor (props, subtree) {
        const tagname = "var";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < video >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class VIDEO {
    constructor (props, subtree) {
        const tagname = "video";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

/**
 * Creates HTMLElement < wbr >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/
export class WBR {
    constructor (props, subtree) {
        const tagname = "wbr";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        }
        else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

// export {
// export {A,ABBR,ACRONYM,ADDRESS,APPLET,AREA,ARTICLE,ASIDE,AUDIO,B,BASE,BASEFONT,BDI,BDO,BIG,BLOCKQUOTE,BODY,BR,BUTTON,CANVAS,CAPTION,CENTER,CITE,CODE,COL,COLGROUP,DATA,DATALIST,DD,DEL,DETAILS,DFN,DIALOG,DIR,DIV,DL,DT,EM,EMBED,FIELDSET,FIGCAPTION,FIGURE,FONT,FOOTER,FORM,FRAME,FRAMESET,H1,H2,H3,H4,H5,H6,HEAD,HEADER,HR,HTML,I,IFRAME,IMG,INPUT,INS,KBD,LABEL,LEGEND,LI,LINK,MAIN,MAP,MARK,META,METER,NAV,NOFRAMES,NOSCRIPT,OBJECT,OL,OPTGROUP,OPTION,OUTPUT,P,PARAM,PICTURE,PRE,PROGRESS,Q,RP,RT,RUBY,S,SAMP,SCRIPT,SECTION,SELECT,SMALL,SOURCE,SPAN,STRIKE,STRONG,STYLE,SUB,SUMMARY,SUP,SVG,TABLE,TBODY,TD,TEMPLATE,TEXTAREA,TFOOT,TH,THEAD,TIME,TITLE,TR,TRACK,TT,U,UL,VAR,VIDEO,WBR}
/**
 * ["A","Abbr","Acronym","Address","Applet","Area","Article","Aside","Audio","B","Base","Basefont","Bdi","Bdo","Big","Blockquote","Body","Br","Button","Canvas","Caption","Center","Cite","Code","Col","Colgroup","Data","Datalist","Dd","Del","Details","Dfn","Dialog","Dir","Div","Dl","Dt","Em","Embed","Fieldset","Figcaption","Figure","Font","Footer","Form","Frame","Frameset","H1","H2","H3","H4","H5","H6","Head","Header","Hr","Html","I","Iframe","Img","Input","Ins","Kbd","Label","Legend","Li","Link","Main","Map","Mark","Meta","Meter","Nav","Noframes","Noscript","Object","Ol","Optgroup","Option","Output","P","Param","Picture","Pre","Progress","Q","Rp","Rt","Ruby","S","Samp","Script","Section","Select","Small","Source","Span","Strike","Strong","Style","Sub","Summary","Sup","Svg","Table","Tbody","Td","Template","Textarea","Tfoot","Th","Thead","Time","Title","Tr","Track","Tt","U","Ul","Var","Video","Wbr"]
 */
