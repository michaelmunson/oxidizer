import { isArr, isFn, isObj } from "../../utils/utils.mjs";
import { css } from "../css.mjs";
import html from "./html.mjs";

const $create = html.create;

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/

export class A {
    constructor (props, subtree) {
        const node = $create("a", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class ABBR {
    constructor (props, subtree) {
        const node = $create("abbr", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class ACRONYM {
    constructor (props, subtree) {
        const node = $create("acronym", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class ADDRESS {
    constructor (props, subtree) {
        const node = $create("address", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class APPLET {
    constructor (props, subtree) {
        const node = $create("applet", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class AREA {
    constructor (props, subtree) {
        const node = $create("area", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class ARTICLE {
    constructor (props, subtree) {
        const node = $create("article", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class ASIDE {
    constructor (props, subtree) {
        const node = $create("aside", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class AUDIO {
    constructor (props, subtree) {
        const node = $create("audio", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class B {
    constructor (props, subtree) {
        const node = $create("b", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class BASE {
    constructor (props, subtree) {
        const node = $create("base", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class BASEFONT {
    constructor (props, subtree) {
        const node = $create("basefont", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class BDI {
    constructor (props, subtree) {
        const node = $create("bdi", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class BDO {
    constructor (props, subtree) {
        const node = $create("bdo", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class BIG {
    constructor (props, subtree) {
        const node = $create("big", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class BLOCKQUOTE {
    constructor (props, subtree) {
        const node = $create("blockquote", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class BODY {
    constructor (props, subtree) {
        const node = $create("body", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class BR {
    constructor (props, subtree) {
        const node = $create("br", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class BUTTON {
    constructor (props, subtree) {
        const node = $create("button", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class CANVAS {
    constructor (props, subtree) {
        const node = $create("canvas", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class CAPTION {
    constructor (props, subtree) {
        const node = $create("caption", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class CENTER {
    constructor (props, subtree) {
        const node = $create("center", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class CITE {
    constructor (props, subtree) {
        const node = $create("cite", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class CODE {
    constructor (props, subtree) {
        const node = $create("code", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class COL {
    constructor (props, subtree) {
        const node = $create("col", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class COLGROUP {
    constructor (props, subtree) {
        const node = $create("colgroup", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class DATA {
    constructor (props, subtree) {
        const node = $create("data", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class DATALIST {
    constructor (props, subtree) {
        const node = $create("datalist", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class DD {
    constructor (props, subtree) {
        const node = $create("dd", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class DEL {
    constructor (props, subtree) {
        const node = $create("del", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class DETAILS {
    constructor (props, subtree) {
        const node = $create("details", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class DFN {
    constructor (props, subtree) {
        const node = $create("dfn", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class DIALOG {
    constructor (props, subtree) {
        const node = $create("dialog", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class DIR {
    constructor (props, subtree) {
        const node = $create("dir", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class DIV {
    constructor (props, subtree) {
        const node = $create("div", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class DL {
    constructor (props, subtree) {
        const node = $create("dl", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class DT {
    constructor (props, subtree) {
        const node = $create("dt", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class EM {
    constructor (props, subtree) {
        const node = $create("em", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class EMBED {
    constructor (props, subtree) {
        const node = $create("embed", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class FIELDSET {
    constructor (props, subtree) {
        const node = $create("fieldset", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class FIGCAPTION {
    constructor (props, subtree) {
        const node = $create("figcaption", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class FIGURE {
    constructor (props, subtree) {
        const node = $create("figure", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class FONT {
    constructor (props, subtree) {
        const node = $create("font", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class FOOTER {
    constructor (props, subtree) {
        const node = $create("footer", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class FORM {
    constructor (props, subtree) {
        const node = $create("form", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class FRAME {
    constructor (props, subtree) {
        const node = $create("frame", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class FRAMESET {
    constructor (props, subtree) {
        const node = $create("frameset", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class H1 {
    constructor (props, subtree) {
        const node = $create("h1", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class H2 {
    constructor (props, subtree) {
        const node = $create("h2", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class H3 {
    constructor (props, subtree) {
        const node = $create("h3", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class H4 {
    constructor (props, subtree) {
        const node = $create("h4", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class H5 {
    constructor (props, subtree) {
        const node = $create("h5", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class H6 {
    constructor (props, subtree) {
        const node = $create("h6", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class HEAD {
    constructor (props, subtree) {
        const node = $create("head", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class HEADER {
    constructor (props, subtree) {
        const node = $create("header", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class HR {
    constructor (props, subtree) {
        const node = $create("hr", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class HTML {
    constructor (props, subtree) {
        const node = $create("html", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class I {
    constructor (props, subtree) {
        const node = $create("i", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class IFRAME {
    constructor (props, subtree) {
        const node = $create("iframe", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class IMG {
    constructor (props, subtree) {
        const node = $create("img", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class INPUT {
    constructor (props, subtree) {
        const node = $create("input", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class INS {
    constructor (props, subtree) {
        const node = $create("ins", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class KBD {
    constructor (props, subtree) {
        const node = $create("kbd", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class LABEL {
    constructor (props, subtree) {
        const node = $create("label", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class LEGEND {
    constructor (props, subtree) {
        const node = $create("legend", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class LI {
    constructor (props, subtree) {
        const node = $create("li", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class LINK {
    constructor (props, subtree) {
        const node = $create("link", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class MAIN {
    constructor (props, subtree) {
        const node = $create("main", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class MAP {
    constructor (props, subtree) {
        const node = $create("map", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class MARK {
    constructor (props, subtree) {
        const node = $create("mark", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class META {
    constructor (props, subtree) {
        const node = $create("meta", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class METER {
    constructor (props, subtree) {
        const node = $create("meter", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class NAV {
    constructor (props, subtree) {
        const node = $create("nav", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class NOFRAMES {
    constructor (props, subtree) {
        const node = $create("noframes", props, subtree)
        if (this.render) {
            node.subtree = this.render.bind(node);
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class NOSCRIPT {
    constructor (props, subtree) {
        const node = $create("noscript", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class OBJECT {
    constructor (props, subtree) {
        const node = $create("object", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class OL {
    constructor (props, subtree) {
        const node = $create("ol", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class OPTGROUP {
    constructor (props, subtree) {
        const node = $create("optgroup", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class OPTION {
    constructor (props, subtree) {
        const node = $create("option", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class OUTPUT {
    constructor (props, subtree) {
        const node = $create("output", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class P {
    constructor (props, subtree) {
        const node = $create("p", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class PARAM {
    constructor (props, subtree) {
        const node = $create("param", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class PICTURE {
    constructor (props, subtree) {
        const node = $create("picture", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class PRE {
    constructor (props, subtree) {
        const node = $create("pre", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class PROGRESS {
    constructor (props, subtree) {
        const node = $create("progress", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class Q {
    constructor (props, subtree) {
        const node = $create("q", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class RP {
    constructor (props, subtree) {
        const node = $create("rp", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class RT {
    constructor (props, subtree) {
        const node = $create("rt", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class RUBY {
    constructor (props, subtree) {
        const node = $create("ruby", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class S {
    constructor (props, subtree) {
        const node = $create("s", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class SAMP {
    constructor (props, subtree) {
        const node = $create("samp", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class SCRIPT {
    constructor (props, subtree) {
        const node = $create("script", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class SECTION {
    constructor (props, subtree) {
        const node = $create("section", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class SELECT {
    constructor (props, subtree) {
        const node = $create("select", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class SMALL {
    constructor (props, subtree) {
        const node = $create("small", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class SOURCE {
    constructor (props, subtree) {
        const node = $create("source", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class SPAN {
    constructor (props, subtree) {
        const node = $create("span", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class STRIKE {
    constructor (props, subtree) {
        const node = $create("strike", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class STRONG {
    constructor (props, subtree) {
        const node = $create("strong", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class STYLE {
    constructor (cssRules) {
        const node = $create("style");
        if (typeof cssRules === "string") {
            cssRules = css.parse(cssRules);
        }
        else if (cssRules instanceof Map) {
            node.router = cssRules;
        }
        else if (isObj(cssRules)) {
            node.compile(cssRules);
        }
        else if (isFn(cssRules)) {
            this.factory = cssRules;
        }
        return node;
    }

    static compile (cssObject) {
        const styles = css.flatten(cssObject)
        const rules = new Map()
        const eventHandlers = new Map()
        for (const sel in styles) {
            if (sel === '@media' || sel === '@keyframes') continue
            else if (sel.includes('@media') || sel.includes('@keyframes')) {
                const inrMap = new Map()
                for (const sel1 in styles[sel]) {
                    const selector = isNaN(sel1) ? sel1 : sel1 + '%'
                    const styDec = new css.Declarations(styles[sel][sel1])
                    inrMap.set(selector, styDec)
                    css.defaultCSS[selector] = styDec.toObject()
                }
                rules.set(sel, inrMap)
            } else {
                if (isObj(styles[sel])) {
                    const fns = {}
                    for (const sel1 in styles[sel]) {
                        if (isFn(styles[sel][sel1])) fns[sel1] = styles[sel][sel1]
                    }
                    if (Object.keys(fns).length > 0) eventHandlers.set(sel, fns)
                    const stydec = new css.Declarations(styles[sel])
                    rules.set(sel, stydec)
                    css.defaultCSS[sel] = stydec.toObject()
                } else if (isArr(styles[sel])) rules.set(sel, styles[sel])
            }
        }
        return { rules, eventHandlers }
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class SUB {
    constructor (props, subtree) {
        const node = $create("sub", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class SUMMARY {
    constructor (props, subtree) {
        const node = $create("summary", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class SUP {
    constructor (props, subtree) {
        const node = $create("sup", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class SVG {
    constructor (props, subtree) {
        const node = $create("svg", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class TABLE {
    constructor (props, subtree) {
        const node = $create("table", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class TBODY {
    constructor (props, subtree) {
        const node = $create("tbody", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class TD {
    constructor (props, subtree) {
        const node = $create("td", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class TEMPLATE {
    constructor (props, subtree) {
        const node = $create("template", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class TEXTAREA {
    constructor (props, subtree) {
        const node = $create("textarea", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class TFOOT {
    constructor (props, subtree) {
        const node = $create("tfoot", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class TH {
    constructor (props, subtree) {
        const node = $create("th", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class THEAD {
    constructor (props, subtree) {
        const node = $create("thead", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class TIME {
    constructor (props, subtree) {
        const node = $create("time", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class TITLE {
    constructor (props, subtree) {
        const node = $create("title", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class TR {
    constructor (props, subtree) {
        const node = $create("tr", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class TRACK {
    constructor (props, subtree) {
        const node = $create("track", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class TT {
    constructor (props, subtree) {
        const node = $create("tt", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class U {
    constructor (props, subtree) {
        const node = $create("u", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class UL {
    constructor (props, subtree) {
        const node = $create("ul", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class VAR {
    constructor (props, subtree) {
        const node = $create("var", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class VIDEO {
    constructor (props, subtree) {
        const node = $create("video", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

/**
 * @param {object} props - Node Properties
 * @param {array|function} - Array or Function of Nodes
*/
export class WBR {
    constructor (props, subtree) {
        const node = $create("wbr", props, subtree)
        if (this.render) {
            subtree = this.render.bind(node);
            node.subtree = subtree;
        }
        return node;
    }
}

// export {
// export {A,ABBR,ACRONYM,ADDRESS,APPLET,AREA,ARTICLE,ASIDE,AUDIO,B,BASE,BASEFONT,BDI,BDO,BIG,BLOCKQUOTE,BODY,BR,BUTTON,CANVAS,CAPTION,CENTER,CITE,CODE,COL,COLGROUP,DATA,DATALIST,DD,DEL,DETAILS,DFN,DIALOG,DIR,DIV,DL,DT,EM,EMBED,FIELDSET,FIGCAPTION,FIGURE,FONT,FOOTER,FORM,FRAME,FRAMESET,H1,H2,H3,H4,H5,H6,HEAD,HEADER,HR,HTML,I,IFRAME,IMG,INPUT,INS,KBD,LABEL,LEGEND,LI,LINK,MAIN,MAP,MARK,META,METER,NAV,NOFRAMES,NOSCRIPT,OBJECT,OL,OPTGROUP,OPTION,OUTPUT,P,PARAM,PICTURE,PRE,PROGRESS,Q,RP,RT,RUBY,S,SAMP,SCRIPT,SECTION,SELECT,SMALL,SOURCE,SPAN,STRIKE,STRONG,STYLE,SUB,SUMMARY,SUP,SVG,TABLE,TBODY,TD,TEMPLATE,TEXTAREA,TFOOT,TH,THEAD,TIME,TITLE,TR,TRACK,TT,U,UL,VAR,VIDEO,WBR}
/**
 * ["A","Abbr","Acronym","Address","Applet","Area","Article","Aside","Audio","B","Base","Basefont","Bdi","Bdo","Big","Blockquote","Body","Br","Button","Canvas","Caption","Center","Cite","Code","Col","Colgroup","Data","Datalist","Dd","Del","Details","Dfn","Dialog","Dir","Div","Dl","Dt","Em","Embed","Fieldset","Figcaption","Figure","Font","Footer","Form","Frame","Frameset","H1","H2","H3","H4","H5","H6","Head","Header","Hr","Html","I","Iframe","Img","Input","Ins","Kbd","Label","Legend","Li","Link","Main","Map","Mark","Meta","Meter","Nav","Noframes","Noscript","Object","Ol","Optgroup","Option","Output","P","Param","Picture","Pre","Progress","Q","Rp","Rt","Ruby","S","Samp","Script","Section","Select","Small","Source","Span","Strike","Strong","Style","Sub","Summary","Sup","Svg","Table","Tbody","Td","Template","Textarea","Tfoot","Th","Thead","Time","Title","Tr","Track","Tt","U","Ul","Var","Video","Wbr"]
 */
