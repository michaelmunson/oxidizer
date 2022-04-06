import { isArr, isFn, isNode, objEnforcer } from "../../utils/utils.mjs";
import config from "../config.mjs";
import css from "../css.mjs";
import Props from "./props.mjs";
export const html = function (DOMString) {
    const template = html.create('div');
    template.innerHTML = DOMString;
    const ch = template.childNodes
    return (ch.length === 1) ? ch[0] : [...ch];
}

const externals = {
    // setProperties (props = {}) {
    //     objEnforcer(props)
    //     for (const propKey in props) {
    //         const propVal = props[propKey]
    //         this.setProperty(propKey, propVal)
    //     }
    //     return this
    // },
    // setProperty (key, val) {
    //     if (config.props.setAttributes) {
    //         if (this[key] === undefined && typeof val === 'string') {
    //             this.setAttribute(key, val)
    //         } else {
    //             this[key] = val
    //         }
    //     } else {
    //         if (key === 'attributes' || key === 'attrs') {
    //             this.attr(val)
    //         }
    //         this[key] = val
    //     }
    //     return this
    // },
    // render (props) {
    //     if (!props) props = this.props;
    //     if (this.template) this.renderTemplate(props);
    //     else {
    //         [...this.children].forEach(child => {
    //             child.render();
    //         });
    //     }
    //     this.setProperties(props);
    // },
    // renderTemplate (props) {
    //     const tret = this.template.call(this, props);
    //     if (isArr(tret)) {
    //         this.innerHTML = "";
    //         for (const node of tret) {
    //             this.append(node);
    //         }
    //     }
    //     else {
    //         this.replaceWith(tret)
    //     }
    // }
}

html.create = (tag, props, subtree) => {
    if (subtree == null) {
        if (isArr(props) || isFn(props) || isNode(props)) {
            subtree = props
            props = {}
        } else subtree = false
    }
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
                else if (isArr(subtree)) {
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
                else if (isNode(subtree)) this.append(subtree);
                this.__subtree__ = subtree;
            }
        }

    });
    return node;
}

export default html
