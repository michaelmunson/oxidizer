import Component from "./component.mjs";
import config from "./config.mjs";
import css from "./css.mjs";
import html from "./html.mjs";
import * as Intrinsics from "./intrinsics/intrinsics.mjs";
import { A, ABBR, ACRONYM, ADDRESS, APPLET, AREA, ARTICLE, ASIDE, AUDIO, B, BASE, BASEFONT, BDI, BDO, BIG, BLOCKQUOTE, BODY, BR, BUTTON, CANVAS, CAPTION, CENTER, CITE, CODE, COL, COLGROUP, DATA, DATALIST, DD, DEL, DETAILS, DFN, DIALOG, DIR, DIV, DL, DT, EM, EMBED, FIELDSET, FIGCAPTION, FIGURE, FONT, FOOTER, FORM, FRAME, FRAMESET, H1, H2, H3, H4, H5, H6, HEAD, HEADER, HR, HTML, I, IFRAME, IMG, INPUT, INS, KBD, LABEL, LEGEND, LI, LINK, MAIN, MAP, MARK, META, METER, NAV, NOFRAMES, NOSCRIPT, OBJECT, OL, OPTGROUP, OPTION, OUTPUT, P, PARAM, PICTURE, PRE, PROGRESS, Q, RP, RT, RUBY, S, SAMP, SCRIPT, SECTION, SELECT, SMALL, SOURCE, SPAN, STRIKE, STRONG, STYLE, SUB, SUMMARY, SUP, SVG, TABLE, TBODY, TD, TEMPLATE, TEXTAREA, TFOOT, TH, THEAD, TIME, TITLE, TR, TRACK, TT, U, UL, VAR, VIDEO, WBR } from "./intrinsics/intrinsics.mjs";
import { $ } from "./query.mjs";
import Root from "./root.mjs";
import Template from "./template.mjs";

export default class Oxidizer {
    static configure(o){
        for (const c in o) config[c] = o[c]; 
    }    
    static get config(){
        return config;
    }
    static set config(o){
        Oxidizer.configure(o)
    }
    static get Component(){return Component};
    static get Root(){return Root};
    static get Template(){return Template};  
    static get Styler(){return Styler}; 
    static get Intrinsics(){return Intrinsics};
    static init = (()=>{
        if (!$.exists('body')){
            document.querySelector('head').insertAdjacentHTML('afterend', '<body></body>');
        }
        
    })()
}

export {
    Oxidizer, Component, Root, Template, $, css, html,
    A, ABBR, ACRONYM, ADDRESS, APPLET, AREA, ARTICLE, ASIDE, AUDIO, B, BASE, BASEFONT, BDI, BDO, BIG, BLOCKQUOTE, BODY, BR, BUTTON, CANVAS, CAPTION, CENTER, CITE, CODE, COL, COLGROUP, DATA, DATALIST, DD, DEL, DETAILS, DFN, DIALOG, DIR, DIV, DL, DT, EM, EMBED, FIELDSET, FIGCAPTION, FIGURE, FONT, FOOTER, FORM, FRAME, FRAMESET, H1, H2, H3, H4, H5, H6, HEAD, HEADER, HR, HTML, I, IFRAME, IMG, INPUT, INS, KBD, LABEL, LEGEND, LI, LINK, MAIN, MAP, MARK, META, METER, NAV, NOFRAMES, NOSCRIPT, OBJECT, OL, OPTGROUP, OPTION, OUTPUT, P, PARAM, PICTURE, PRE, PROGRESS, Q, RP, RT, RUBY, S, SAMP, SCRIPT, SECTION, SELECT, SMALL, SOURCE, SPAN, STRIKE, STRONG, STYLE, SUB, SUMMARY, SUP, SVG, TABLE, TBODY, TD, TEMPLATE, TEXTAREA, TFOOT, TH, THEAD, TIME, TITLE, TR, TRACK, TT, U, UL, VAR, VIDEO, WBR
};

