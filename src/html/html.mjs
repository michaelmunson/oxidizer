import { isArr, isFn, isNode, objEnforcer } from "../../utils/utils.mjs";
import config from "../config.mjs";
import Props from "./props.mjs";
export const html = function (DOMString) {
    // const template = $.create('div');
    // template.innerHTML = DOMString;
    // return [...template.childNodes]
}

const externals = {
    setProperties (props) {
        objEnforcer(props)
        for (const propKey in props) {
            const propVal = props[propKey]
            this.setProperty(propKey, propVal)
        }
        return this
    },
    setProperty (key, val) {
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
    },
    render () {
        console.log(this);
        const props = this.props;
        if (this.template) this.renderTemplate(props);
        else {
            [...this.children].forEach(child => {
                child.render();
            });
        }
        this.setProperties(props);
    },
    renderTemplate (props) {
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
    Object.assign(node, externals);
    Object.defineProperties(node, {
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
                    this.template = subtree
                }
                else if (isArr(subtree)) {
                    for (const n of subtree) {
                        console.log(n);
                        if (isFn(n)) {
                            const nnode = n.call(this, this.props);
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

export default html
