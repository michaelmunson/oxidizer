import { isArr, isFn, isNode, isStr, objEnforcer, Type } from "../../utils/utils.mjs";
import config from "../config.mjs";
import css from "../css.mjs";
import Props from "./props.mjs";
import { $ } from "./query.mjs";

export const html = function (DOMString) {
    const template = html.create('div');
    template.innerHTML = DOMString;
    const ch = template.childNodes
    return (ch.length === 1) ? ch[0] : [...ch];
}

html.create = (tag, props, subtree) => {
    if (subtree == null) {
        if (isArr(props) || isFn(props) || isNode(props)) {
            subtree = props
            props = {}
        } else subtree = false
    }
    if (props == null) props = {}
    const node = document.createElement(tag);
    html.assign(node);
    node.props = props;
    if (subtree) node.subtree = subtree;
    node.render();
    return node;
}

html.assign = (node) => {
    if (node.isAssigned) return
    Object.defineProperties(node, {
        attach: {
            get () {
                return function (query, position = "beforeend") {
                    $(query, 0).insert(position, this);
                }
            }
        },
        styles: {
            get () {
                return this.__styles__
            },
            set (styles) {
                styles = css(styles);
                this.__styles__ = styles;
            }
        },
        setProperty: {
            get () {
                return function (key, val) {
                    if (config.props.setAttributes) {
                        if (this[key] === undefined && typeof val === 'string') {
                            this.setAttribute(key, val)
                        } else {
                            this[key] = val
                        }
                    } else {
                        if (key === 'attributes' || key === 'attrs') {
                            this.attr(val)
                        }
                        this[key] = val
                    }
                    return this
                }
            }
        },
        setProperties: {
            get () {
                return function (props) {
                    if (!props) return;
                    objEnforcer(props)
                    for (const propKey in props) {
                        const propVal = props[propKey]
                        this.setProperty(propKey, propVal)
                    }
                    return this
                }
            }
        },
        render: {
            get () {
                return function (props) {
                    if (!props) props = this.props;
                    if (this.template) this.renderTemplate(props);
                    else {
                        [...this.children].forEach(child => {
                            child.render();
                        });
                    }
                    this.setProperties(props);
                }
            }
        },
        renderTemplate: {
            get () {
                return function (props) {
                    const tret = this.template.call(this, props);
                    if (isArr(tret)) {
                        this.innerHTML = "";
                        for (const node of tret) {
                            this.append(node);
                        }
                    }
                    else {
                        this.replaceWith(tret)
                    }
                }
            }
        },
        props: {
            get () { return this.__props__ },
            set (props) {
                this.__props__ = new Props(this, props);
                this.setProperties(props);
            }
        },
        template: {
            get () { return this.__template__ },
            set (template) {
                this.__template__ = template;
            }
        },
        subtree: {
            get () { return this.__subtree__ },
            set (subtree) {
                if (isFn(subtree)) {
                    const subcall = subtree.call(this, this.props);
                    if (isNode(subcall)) {
                        subcall.template = subtree;
                        this.append(subcall);
                        console.log(subcall)
                    }
                    else if (isArr(subcall)) {
                        this.template = subtree;
                        for (const node of subcall) this.append(node);
                    }
                }
                if (isStr(subtree) || isNode(subtree)) subtree = [subtree];
                if (isArr(subtree)) {
                    for (const n of subtree) {
                        if (isFn(n)) {
                            const nnode = n.call(this, this.props);
                            nnode.template = n;
                            this.append(nnode);
                        }
                        else {
                            this.append(n);
                        }
                    }
                }
                this.__subtree__ = subtree;
            }
        }

    });
    return node;
}

export default html;


/**
 * @typedef {(array|function|node)} HTMLSubtree
*/

/**
 * a class for creating html elements
 * @class
 * @param {string} tag - tag name {string} OR node {HTMLElement};
 * @param argv - props {object} AND/OR subtree {HTMLSubtree}
 * @returns instance of HTMLElement
*/

const extMethods = {
    attach: {
        get () {
            return function (query, position = "beforeend") {
                $(query, 0).insert(position, this);
            }
        }
    },
    styles: {
        get () {
            return this.__styles__
        },
        set (styles) {
            styles = css(styles);
            this.__styles__ = styles;
        }
    },
    setProperty: {
        get () {
            return function (key, val) {
                if (config.props.setAttributes) {
                    if (this[key] === undefined && typeof val === 'string') {
                        this.setAttribute(key, val)
                    } else {
                        this[key] = val
                    }
                } else {
                    if (key === 'attributes' || key === 'attrs') {
                        this.attr(val)
                    }
                    this[key] = val
                }
                return this
            }
        }
    },
    setProperties: {
        get () {
            return function (props) {
                if (!props) return;
                objEnforcer(props)
                for (const propKey in props) {
                    const propVal = props[propKey]
                    this.setProperty(propKey, propVal)
                }
                return this
            }
        }
    },
    render: {
        get () {
            return function (props) {
                if (!props) props = this.props;
                if (this.template) this.renderTemplate(props);
                else {
                    [...this.children].forEach(child => {
                        child.render();
                    });
                }
                this.setProperties(props);
            }
        }
    },
    renderTemplate: {
        get () {
            return function (props) {
                const tret = this.template.call(this, props);
                if (isArr(tret)) {
                    this.innerHTML = "";
                    for (const node of tret) {
                        this.append(node);
                    }
                }
                else {
                    this.replaceWith(tret)
                }
            }
        }
    },
    props: {
        get () { return this.__props__ },
        set (props) {
            this.__props__ = new Props(this, props);
            this.setProperties(props);
        }
    },
    template: {
        get () { return this.__template__ },
        set (template) {
            this.__template__ = template;
        }
    },
    subtree: {
        get () { return this.__subtree__ },
        set (subtree) {
            if (isFn(subtree)) {
                const subcall = subtree.call(this, this.props);
                if (isNode(subcall)) {
                    subcall.template = subtree;
                    this.append(subcall);
                    console.log(subcall)
                }
                else if (isArr(subcall)) {
                    this.template = subtree;
                    for (const node of subcall) this.append(node);
                }
            }
            if (isStr(subtree) || isNode(subtree)) subtree = [subtree];
            if (isArr(subtree)) {
                for (const n of subtree) {
                    if (isFn(n)) {
                        const nnode = n.call(this, this.props);
                        nnode.template = n;
                        this.append(nnode);
                    }
                    else {
                        this.append(n);
                    }
                }
            }
            this.__subtree__ = subtree;
        }
    }
};

export class HTML {
    constructor (tag, ...argv) {
        const node = HTML.assign(document.createElement(HTML.formatTag(tag)));
        const { props, subtree } = HTML.sortArgv(argv);
        node.props = props;
        node.subtree = subtree;
        return node.render();
    }

    static assign (node) {
        if (node.isAssigned) return
        Object.defineProperties(node, {
            attach: {
                get () {
                    return function (query, position = "beforeend") {
                        $(query, 0).insert(position, this);
                    }
                }
            },
            styles: {
                get () {
                    return this.__styles__
                },
                set (styles) {
                    styles = css(styles);
                    this.__styles__ = styles;
                }
            },
            setProperty: {
                get () {
                    return function (key, val) {
                        if (config.props.setAttributes) {
                            if (this[key] === undefined && typeof val === 'string') {
                                this.setAttribute(key, val)
                            } else {
                                this[key] = val
                            }
                        } else {
                            if (key === 'attributes' || key === 'attrs') {
                                this.attr(val)
                            }
                            this[key] = val
                        }
                        return this
                    }
                }
            },
            setProperties: {
                get () {
                    return function (props) {
                        if (!props) return;
                        objEnforcer(props)
                        for (const propKey in props) {
                            const propVal = props[propKey]
                            this.setProperty(propKey, propVal)
                        }
                        return this
                    }
                }
            },
            render: {
                get () {
                    return function (props) {
                        if (!props) props = this.props;
                        if (this.template) this.renderTemplate(props);
                        else {
                            [...this.children].forEach(child => {
                                child.render();
                            });
                        }
                        this.setProperties(props);
                    }
                }
            },
            renderTemplate: {
                get () {
                    return function (props) {
                        const tret = this.template.call(this, props);
                        if (isArr(tret)) {
                            this.innerHTML = "";
                            for (const node of tret) {
                                this.append(node);
                            }
                        }
                        else {
                            this.replaceWith(tret)
                        }
                    }
                }
            },
            props: {
                get () { return this.__props__ },
                set (props) {
                    this.__props__ = new Props(this, props);
                    this.setProperties(props);
                }
            },
            template: {
                get () { return this.__template__ },
                set (template) {
                    this.__template__ = template;
                }
            },
            subtree: {
                get () { return this.__subtree__ },
                set (subtree) {
                    if (isFn(subtree)) {
                        const subcall = subtree.call(this, this.props);
                        if (isNode(subcall)) {
                            subcall.template = subtree;
                            this.append(subcall);
                            console.log(subcall)
                        }
                        else if (isArr(subcall)) {
                            this.template = subtree;
                            for (const node of subcall) this.append(node);
                        }
                    }
                    if (isStr(subtree) || isNode(subtree)) subtree = [subtree];
                    if (isArr(subtree)) {
                        for (const n of subtree) {
                            if (isFn(n)) {
                                const nnode = n.call(this, this.props);
                                nnode.template = n;
                                this.append(nnode);
                            }
                            else {
                                this.append(n);
                            }
                        }
                    }
                    this.__subtree__ = subtree;
                }
            }

        });
    }

    static formatTag (tag) {
        tag = css.toDashed(tag);
        return tag.startsWith("-") ? tag.slice(1) : tag;
    }

    static sortArgv (argv = []) {
        const argo = {
            props: {},
            subtree: []
        };
        const subType = new Type("node", "array", "function");
        if (argv.length === 1) {
            if (subType.test(argv[0])) argo.subtree = argv[0];
        }
        else if (argo.length > 1) {
            argo.props = argv[0];
            argo.subtree = argv[1];
        }
        return argo;
    }
}
