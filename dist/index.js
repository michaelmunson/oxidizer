"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LEGEND = exports.LABEL = exports.LI = exports.INPUT = exports.IMG = exports.IFRAME = exports.I = exports.INS = exports.KBD = exports.HTML = exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = exports.HEAD = exports.HR = exports.HGROUP = exports.FORM = exports.FOOTER = exports.FIGURE = exports.FIELDSET = exports.EMBED = exports.EM = exports.DIV = exports.DIALOG = exports.DETAILS = exports.DATALIST = exports.DATA = exports.DL = exports.DD = exports.COLGROUP = exports.CODE = exports.CITE = exports.CANVAS = exports.BUTTON = exports.BODY = exports.BASE = exports.BDO = exports.BDI = exports.B = exports.BR = exports.ASIDE = exports.ARTICLE = exports.ADDRESS = exports.ABBR = exports.AUDIO = exports.AREA = exports.A = void 0;
exports.UL = exports.U = exports.TRACK = exports.TITLE = exports.TIME = exports.TEXTAREA = exports.TEMPLATE = exports.TBODY = exports.TFOOT = exports.THEAD = exports.TR = exports.TABLE = exports.COL = exports.TD = exports.TH = exports.CAPTION = exports.SECTION = exports.SEARCH = exports.SUMMARY = exports.SUB = exports.STYLE = exports.SPAN = exports.SOURCE = exports.SLOT = exports.SELECT = exports.SCRIPT = exports.BLOCKQUOTE = exports.Q = exports.SMALL = exports.RUBY = exports.RP = exports.RT = exports.PROGRESS = exports.PRE = exports.PICTURE = exports.P = exports.OUTPUT = exports.OPTION = exports.OPTGROUP = exports.OBJECT = exports.OL = exports.DEL = exports.METER = exports.META = exports.NOSCRIPT = exports.NAV = exports.MARK = exports.MENU = exports.MAP = exports.LINK = void 0;
exports.WBR = exports.VAR = exports.VIDEO = void 0;
const component_1 = require("./component");
const shadowComponent_1 = require("./shadowComponent");
const intrinsics_1 = require("./intrinsics");
const css_1 = require("./utils/css");
_a = intrinsics_1.Intrinsics.Elements, exports.A = _a.A, exports.AREA = _a.AREA, exports.AUDIO = _a.AUDIO, exports.ABBR = _a.ABBR, exports.ADDRESS = _a.ADDRESS, exports.ARTICLE = _a.ARTICLE, exports.ASIDE = _a.ASIDE, exports.BR = _a.BR, exports.B = _a.B, exports.BDI = _a.BDI, exports.BDO = _a.BDO, exports.BASE = _a.BASE, exports.BODY = _a.BODY, exports.BUTTON = _a.BUTTON, exports.CANVAS = _a.CANVAS, exports.CITE = _a.CITE, exports.CODE = _a.CODE, exports.COLGROUP = _a.COLGROUP, exports.DD = _a.DD, exports.DL = _a.DL, exports.DATA = _a.DATA, exports.DATALIST = _a.DATALIST, exports.DETAILS = _a.DETAILS, exports.DIALOG = _a.DIALOG, exports.DIV = _a.DIV, exports.EM = _a.EM, exports.EMBED = _a.EMBED, exports.FIELDSET = _a.FIELDSET, exports.FIGURE = _a.FIGURE, exports.FOOTER = _a.FOOTER, exports.FORM = _a.FORM, exports.HGROUP = _a.HGROUP, exports.HR = _a.HR, exports.HEAD = _a.HEAD, exports.H1 = _a.H1, exports.H2 = _a.H2, exports.H3 = _a.H3, exports.H4 = _a.H4, exports.H5 = _a.H5, exports.H6 = _a.H6, exports.HTML = _a.HTML, exports.KBD = _a.KBD, exports.INS = _a.INS, exports.I = _a.I, exports.IFRAME = _a.IFRAME, exports.IMG = _a.IMG, exports.INPUT = _a.INPUT, exports.LI = _a.LI, exports.LABEL = _a.LABEL, exports.LEGEND = _a.LEGEND, exports.LINK = _a.LINK, exports.MAP = _a.MAP, exports.MENU = _a.MENU, exports.MARK = _a.MARK, exports.NAV = _a.NAV, exports.NOSCRIPT = _a.NOSCRIPT, exports.META = _a.META, exports.METER = _a.METER, exports.DEL = _a.DEL, exports.OL = _a.OL, exports.OBJECT = _a.OBJECT, exports.OPTGROUP = _a.OPTGROUP, exports.OPTION = _a.OPTION, exports.OUTPUT = _a.OUTPUT, exports.P = _a.P, exports.PICTURE = _a.PICTURE, exports.PRE = _a.PRE, exports.PROGRESS = _a.PROGRESS, exports.RT = _a.RT, exports.RP = _a.RP, exports.RUBY = _a.RUBY, exports.SMALL = _a.SMALL, exports.Q = _a.Q, exports.BLOCKQUOTE = _a.BLOCKQUOTE, exports.SCRIPT = _a.SCRIPT, exports.SELECT = _a.SELECT, exports.SLOT = _a.SLOT, exports.SOURCE = _a.SOURCE, exports.SPAN = _a.SPAN, exports.STYLE = _a.STYLE, exports.SUB = _a.SUB, exports.SUMMARY = _a.SUMMARY, exports.SEARCH = _a.SEARCH, exports.SECTION = _a.SECTION, exports.CAPTION = _a.CAPTION, exports.TH = _a.TH, exports.TD = _a.TD, exports.COL = _a.COL, exports.TABLE = _a.TABLE, exports.TR = _a.TR, exports.THEAD = _a.THEAD, exports.TFOOT = _a.TFOOT, exports.TBODY = _a.TBODY, exports.TEMPLATE = _a.TEMPLATE, exports.TEXTAREA = _a.TEXTAREA, exports.TIME = _a.TIME, exports.TITLE = _a.TITLE, exports.TRACK = _a.TRACK, exports.U = _a.U, exports.UL = _a.UL, exports.VIDEO = _a.VIDEO, exports.VAR = _a.VAR, exports.WBR = _a.WBR;
var Oxidizer;
(function (Oxidizer) {
    Oxidizer.Component = component_1.Component;
    Oxidizer.ShadowComponent = shadowComponent_1.ShadowComponent;
    Oxidizer.StyleSheet = css_1.OxidizerCSS.StyleSheet;
    Oxidizer.createElement = component_1.createElement;
    Oxidizer.createShadowElement = shadowComponent_1.createShadowElement;
    function root(element) {
        return Object.assign(element, {
            render(toRender) {
                element.innerHTML = "";
                if (Array.isArray(toRender)) {
                    this.render(toRender);
                }
                else if (toRender instanceof Oxidizer.Component) {
                    this.render(toRender.render());
                }
                else {
                    element.append(toRender);
                }
            }
        });
    }
    Oxidizer.root = root;
    // export import Component = OxidizerComponent;
})(Oxidizer || (Oxidizer = {}));
exports.default = Oxidizer;
