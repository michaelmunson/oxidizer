import Component from "./component.mjs";
import config from "./config.mjs";
import css from "./css.mjs";
import * as Intrinsics from "./html/intrinsics.mjs";
import { A, ABBR, ACRONYM, ADDRESS, APPLET, AREA, ARTICLE, ASIDE, AUDIO, B, BASE, BASEFONT, BDI, BDO, BIG, BLOCKQUOTE, BODY, BR, BUTTON, CANVAS, CAPTION, CENTER, CITE, CODE, COL, COLGROUP, DATA, DATALIST, DD, DEL, DETAILS, DFN, DIALOG, DIR, DIV, DL, DT, EM, EMBED, FIELDSET, FIGCAPTION, FIGURE, FONT, FOOTER, FORM, FRAME, FRAMESET, H1, H2, H3, H4, H5, H6, HEAD, HEADER, HR, HTML, I, IFRAME, IMG, INPUT, INS, KBD, LABEL, LEGEND, LI, LINK, MAIN, MAP, MARK, META, METER, NAV, NOFRAMES, NOSCRIPT, OBJECT, OL, OPTGROUP, OPTION, OUTPUT, P, PARAM, PICTURE, PRE, PROGRESS, Q, RP, RT, RUBY, S, SAMP, SCRIPT, SECTION, SELECT, SMALL, SOURCE, SPAN, STRIKE, STRONG, STYLE, SUB, SUMMARY, SUP, SVG, TABLE, TBODY, TD, TEMPLATE, TEXTAREA, TFOOT, TH, THEAD, TIME, TITLE, TR, TRACK, TT, U, UL, VAR, VIDEO, WBR } from "./html/intrinsics.mjs";
import { $, html } from "./html/query.mjs";
import Root from "./root.mjs";
import Template from "./template.mjs";

export default class Oxidizer {
    static configure (o) {
        for (const c in o) config[c] = o[c];
    }

    static get config () {
        return config;
    }

    static set config (o) {
        Oxidizer.configure(o)
    }

    static get observedNodes () {
        return Component.observedNodes;
    }

    static get Component () { return Component }
    static get Root () { return Root }
    static get Template () { return Template }
    static get Intrinsics () { return Intrinsics }
    static init () {
        if (!Oxidizer.initialized) {
            Oxidizer.initialized = true;
            if (css.config.handleEvents) {
                $.body.observe({
                    childList: function (mut) {
                        mut.addedNodes.forEach(addedNode => {
                            const name = addedNode.tagName.toLowerCase()
                            if (name in Oxidizer.observedNodes) {
                                const observe = Oxidizer.observedNodes[name];
                                observe.onConnected.call(this, addedNode);
                                if (observe.onAttributeChange) {
                                    $(addedNode, 0).observe({
                                        attribute: observe.onAttributeChange.bind(addedNode)
                                    });
                                }
                            }
                            Oxidizer.observedNodes["*"].onConnected.call(this, addedNode);
                        })
                        mut.removedNodes.forEach(removedNode => {
                            const name = removedNode.tagName.toLowerCase()
                            if (name in Oxidizer.observedNodes) {
                                Oxidizer.observedNodes[name].onDisconnected.call(this, removedNode);
                            }
                        })
                    },
                    subtree: true
                });
            }
            document.head.insertAdjacentHTML("beforeend", "<style id='oxss'></style>")
            for (const i in Intrinsics) {
                global[i] = Intrinsics[i];
            }
        }
    }
}

Oxidizer.init();

export {
    Oxidizer, Component, Root, Template, $, css, html,
    A, ABBR, ACRONYM, ADDRESS, APPLET, AREA, ARTICLE, ASIDE, AUDIO, B, BASE, BASEFONT, BDI, BDO, BIG, BLOCKQUOTE, BODY, BR, BUTTON, CANVAS, CAPTION, CENTER, CITE, CODE, COL, COLGROUP, DATA, DATALIST, DD, DEL, DETAILS, DFN, DIALOG, DIR, DIV, DL, DT, EM, EMBED, FIELDSET, FIGCAPTION, FIGURE, FONT, FOOTER, FORM, FRAME, FRAMESET, H1, H2, H3, H4, H5, H6, HEAD, HEADER, HR, HTML, I, IFRAME, IMG, INPUT, INS, KBD, LABEL, LEGEND, LI, LINK, MAIN, MAP, MARK, META, METER, NAV, NOFRAMES, NOSCRIPT, OBJECT, OL, OPTGROUP, OPTION, OUTPUT, P, PARAM, PICTURE, PRE, PROGRESS, Q, RP, RT, RUBY, S, SAMP, SCRIPT, SECTION, SELECT, SMALL, SOURCE, SPAN, STRIKE, STRONG, STYLE, SUB, SUMMARY, SUP, SVG, TABLE, TBODY, TD, TEMPLATE, TEXTAREA, TFOOT, TH, THEAD, TIME, TITLE, TR, TRACK, TT, U, UL, VAR, VIDEO, WBR
};
