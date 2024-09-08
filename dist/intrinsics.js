"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Intrinsics = void 0;
const component_1 = require("./component");
const engine_1 = require("./engine");
const css_1 = require("./utils/css");
var Intrinsics;
(function (Intrinsics) {
    function isHTML(x) {
        return typeof x === "string"
            || x instanceof HTMLElement;
    }
    Intrinsics.isHTML = isHTML;
    function isFields(x) {
        return !!x && !isChildren(x);
    }
    Intrinsics.isFields = isFields;
    function isElement(x) {
        return x instanceof HTMLElement;
    }
    Intrinsics.isElement = isElement;
    function isChildren(x) {
        if (Array.isArray(x)) {
            for (const y of x) {
                if (!isChildren(y)) {
                    return false;
                }
            }
            return true;
        }
        return isHTML(x)
            || isElement(x)
            || typeof x === "function"
            || x instanceof component_1.Component;
    }
    Intrinsics.isChildren = isChildren;
    let IntrinsicProps;
    (function (IntrinsicProps) {
        function create(element, props) {
            return new Proxy(props, {
                set(target, property, newValue, receiver) {
                    // console.log("State Change: ", {target, property, newValue, receiver});
                    target[property] = newValue;
                    engine_1.OxidizerRenderMap.render(element);
                    return true;
                },
            });
        }
        IntrinsicProps.create = create;
    })(IntrinsicProps = Intrinsics.IntrinsicProps || (Intrinsics.IntrinsicProps = {}));
    function renderChildren(element, children) {
        if (Array.isArray(children)) {
            children.forEach(el => renderChildren(element, el));
        }
        else if (typeof children === "function") {
            let result = children.call(element, element.props ?? undefined);
            if (typeof result === "string") {
                result = document.createTextNode(result);
            }
            engine_1.OxidizerRenderMap.append(element, result, children);
            renderChildren(element, result);
        }
        else if (children instanceof component_1.Component) {
            if (children.render) {
                const result = children.render();
                renderChildren(element, result);
            }
        }
        else {
            element.append(children);
        }
        return [...element.children];
    }
    Intrinsics.renderChildren = renderChildren;
    function create(tagName, fields, children) {
        const _fields = isFields(fields)
            ? fields
            : {};
        const _children = isChildren(children)
            ? children
            : isChildren(fields)
                ? fields
                : [];
        const _element = createElement(_fields);
        function createAssignment(rawElement, props) {
            const assignment = {
                rerender(children) {
                    this.innerHTML = '';
                    handleChildren(_element, children);
                }
            };
            if (props) {
                assignment.props = IntrinsicProps.create(rawElement, props);
            }
            return assignment;
        }
        function createElement(fields) {
            const rawElement = document.createElement(tagName);
            const assignment = createAssignment(rawElement, fields?.props);
            const element = Object.assign(rawElement, assignment);
            let field;
            for (field in fields) {
                let value = fields[field];
                if (field === "style") {
                    if (typeof value === "string") {
                        value = css_1.OxidizerCSS.parseString(value);
                    }
                    for (const property in value) {
                        element.style[property] = value[property];
                    }
                }
                else if (field !== 'props') {
                    try {
                        element[field] = value;
                    }
                    catch (e) {
                        console.warn(e);
                    }
                }
            }
            return element;
        }
        function handleChildren(element, children) {
            if (Array.isArray(children)) {
                children.forEach(el => handleChildren(element, el));
            }
            else if (typeof children === "function") {
                let result = children.call(element, element.props ?? undefined);
                if (typeof result === "string") {
                    result = document.createTextNode(result);
                }
                engine_1.OxidizerRenderMap.append(element, result, children);
                handleChildren(element, result);
            }
            else if (children instanceof component_1.Component) {
                if (children.render) {
                    const result = children.render();
                    handleChildren(element, result);
                }
            }
            else {
                element.append(children);
            }
        }
        handleChildren(_element, _children);
        return _element;
    }
    Intrinsics.create = create;
    Intrinsics.Elements = {
        A(fields, children) {
            return create('a', fields, children);
        },
        AREA(fields, children) {
            return create('area', fields, children);
        },
        AUDIO(fields, children) {
            return create('audio', fields, children);
        },
        ABBR(fields, children) {
            return create('abbr', fields, children);
        },
        ADDRESS(fields, children) {
            return create('address', fields, children);
        },
        ARTICLE(fields, children) {
            return create('article', fields, children);
        },
        ASIDE(fields, children) {
            return create('aside', fields, children);
        },
        BR(fields, children) {
            return create('br', fields, children);
        },
        B(fields, children) {
            return create('b', fields, children);
        },
        BDI(fields, children) {
            return create('bdi', fields, children);
        },
        BDO(fields, children) {
            return create('bdo', fields, children);
        },
        BASE(fields, children) {
            return create('base', fields, children);
        },
        BODY(fields, children) {
            return create('body', fields, children);
        },
        BUTTON(fields, children) {
            return create('button', fields, children);
        },
        CANVAS(fields, children) {
            return create('canvas', fields, children);
        },
        CITE(fields, children) {
            return create('cite', fields, children);
        },
        CODE(fields, children) {
            return create('code', fields, children);
        },
        COLGROUP(fields, children) {
            return create('colgroup', fields, children);
        },
        DD(fields, children) {
            return create('dd', fields, children);
        },
        DL(fields, children) {
            return create('dl', fields, children);
        },
        DATA(fields, children) {
            return create('data', fields, children);
        },
        DATALIST(fields, children) {
            return create('datalist', fields, children);
        },
        DETAILS(fields, children) {
            return create('details', fields, children);
        },
        DIALOG(fields, children) {
            return create('dialog', fields, children);
        },
        DIV(fields, children) {
            return create('div', fields, children);
        },
        EM(fields, children) {
            return create('em', fields, children);
        },
        EMBED(fields, children) {
            return create('embed', fields, children);
        },
        FIELDSET(fields, children) {
            return create('fieldset', fields, children);
        },
        FIGURE(fields, children) {
            return create('figure', fields, children);
        },
        FOOTER(fields, children) {
            return create('footer', fields, children);
        },
        FORM(fields, children) {
            return create('form', fields, children);
        },
        HGROUP(fields, children) {
            return create('hgroup', fields, children);
        },
        HR(fields, children) {
            return create('hr', fields, children);
        },
        HEAD(fields, children) {
            return create('head', fields, children);
        },
        H1(fields, children) {
            return create('h1', fields, children);
        },
        H2(fields, children) {
            return create('h2', fields, children);
        },
        H3(fields, children) {
            return create('h3', fields, children);
        },
        H4(fields, children) {
            return create('h4', fields, children);
        },
        H5(fields, children) {
            return create('h5', fields, children);
        },
        H6(fields, children) {
            return create('h6', fields, children);
        },
        HTML(fields, children) {
            return create('html', fields, children);
        },
        KBD(fields, children) {
            return create('kbd', fields, children);
        },
        INS(fields, children) {
            return create('ins', fields, children);
        },
        I(fields, children) {
            return create('i', fields, children);
        },
        IFRAME(fields, children) {
            return create('iframe', fields, children);
        },
        IMG(fields, children) {
            return create('img', fields, children);
        },
        INPUT(fields, children) {
            return create('input', fields, children);
        },
        LI(fields, children) {
            return create('li', fields, children);
        },
        LABEL(fields, children) {
            return create('label', fields, children);
        },
        LEGEND(fields, children) {
            return create('legend', fields, children);
        },
        LINK(fields, children) {
            return create('link', fields, children);
        },
        MAP(fields, children) {
            return create('map', fields, children);
        },
        MENU(fields, children) {
            return create('menu', fields, children);
        },
        MARK(fields, children) {
            return create('mark', fields, children);
        },
        NAV(fields, children) {
            return create('nav', fields, children);
        },
        NOSCRIPT(fields, children) {
            return create('noscript', fields, children);
        },
        META(fields, children) {
            return create('meta', fields, children);
        },
        METER(fields, children) {
            return create('meter', fields, children);
        },
        DEL(fields, children) {
            return create('del', fields, children);
        },
        OL(fields, children) {
            return create('ol', fields, children);
        },
        OBJECT(fields, children) {
            return create('object', fields, children);
        },
        OPTGROUP(fields, children) {
            return create('optgroup', fields, children);
        },
        OPTION(fields, children) {
            return create('option', fields, children);
        },
        OUTPUT(fields, children) {
            return create('output', fields, children);
        },
        P(fields, children) {
            return create('p', fields, children);
        },
        PICTURE(fields, children) {
            return create('picture', fields, children);
        },
        PRE(fields, children) {
            return create('pre', fields, children);
        },
        PROGRESS(fields, children) {
            return create('progress', fields, children);
        },
        RT(fields, children) {
            return create('rt', fields, children);
        },
        RP(fields, children) {
            return create('rp', fields, children);
        },
        RUBY(fields, children) {
            return create('ruby', fields, children);
        },
        SMALL(fields, children) {
            return create('small', fields, children);
        },
        Q(fields, children) {
            return create('q', fields, children);
        },
        BLOCKQUOTE(fields, children) {
            return create('blockquote', fields, children);
        },
        SCRIPT(fields, children) {
            return create('script', fields, children);
        },
        SELECT(fields, children) {
            return create('select', fields, children);
        },
        SLOT(fields, children) {
            return create('slot', fields, children);
        },
        SOURCE(fields, children) {
            return create('source', fields, children);
        },
        SPAN(fields, children) {
            return create('span', fields, children);
        },
        STYLE(styles) {
            let children;
            if (typeof styles === "string") {
                children = styles;
            }
            else {
                children = css_1.OxidizerCSS.stringify(styles ?? {});
            }
            return create('style', {}, children);
        },
        SUB(fields, children) {
            return create('sub', fields, children);
        },
        SUMMARY(fields, children) {
            return create('summary', fields, children);
        },
        SEARCH(fields, children) {
            return create('search', fields, children);
        },
        SECTION(fields, children) {
            return create('section', fields, children);
        },
        CAPTION(fields, children) {
            return create('caption', fields, children);
        },
        TH(fields, children) {
            return create('th', fields, children);
        },
        TD(fields, children) {
            return create('td', fields, children);
        },
        COL(fields, children) {
            return create('col', fields, children);
        },
        TABLE(fields, children) {
            return create('table', fields, children);
        },
        TR(fields, children) {
            return create('tr', fields, children);
        },
        THEAD(fields, children) {
            return create('thead', fields, children);
        },
        TFOOT(fields, children) {
            return create('tfoot', fields, children);
        },
        TBODY(fields, children) {
            return create('tbody', fields, children);
        },
        TEMPLATE(fields, children) {
            return create('template', fields, children);
        },
        TEXTAREA(fields, children) {
            return create('textarea', fields, children);
        },
        TIME(fields, children) {
            return create('time', fields, children);
        },
        TITLE(fields, children) {
            return create('title', fields, children);
        },
        TRACK(fields, children) {
            return create('track', fields, children);
        },
        U(fields, children) {
            return create('u', fields, children);
        },
        UL(fields, children) {
            return create('ul', fields, children);
        },
        VIDEO(fields, children) {
            return create('video', fields, children);
        },
        VAR(fields, children) {
            return create('var', fields, children);
        },
        WBR(fields, children) {
            return create('wbr', fields, children);
        },
    };
})(Intrinsics || (exports.Intrinsics = Intrinsics = {}));
