import { isArr, isDef, isFn, isNode, isObj, isStr, Str } from "../../utils/utils.mjs";
import config from "../config.mjs";
import Props from "./props.mjs";
import { $ } from "./query.mjs";

export const nodeProperties = {
    props: {
        get () {
            return this['-props'];
        },
        set (props) {
            this['-props'] = new Props(this, props);
            this.setProperties(props);
        }
    },
    subtree: {
        get () {
            return this['-subtree'];
        },
        set (subtree) {
            this['-subtree'] = subtree;
            this.renderSubtree(subtree);
        }
    },
    template: {
        get () {
            return this['-template'];
        },
        set (template) {
            this['-template'] = template;
        }
    },
    '-isAssigned': {
        get () { return true }
    }
}

export const nodeMethods = {
    ...config.intrinsics.methods,

    attachTo (selector, position = "beforeend") {
        $(selector, 0).insert(position, this);
        return this;
    },
    replaceSubtree (children) {
        children = (isFn(children))
            ? children.call(this, this.props)
            : children;
        children = (isNode(children))
            ? [children]
            : children;

        if (isDef(children.htmlit)) {
            this.innerHTML = children.DOMString;
        }
        else if (isArr(children)) {
            const childArr = [];
            for (const i in children) {
                if (children[i].htmlit) childArr.push(...children[i].nodes);
                else childArr.push(children[i]);
            }
            this.replaceChildren(...childArr);
        }
        else if (isStr(children)) {
            this.innerHTML = children;
        }
        return this;
    },
    replaceSelf (template) {
        template = (isFn(template))
            ? template.call(this, this.props)
            : template;
        template = (isNode(template))
            ? [template]
            : template;

        if (isStr(template)) {
            this.outerHTML = template;
        }
        else if (isDef(template.htmlit)) {
            this.outerHTML = template.DOMString;
        }
        else if (isArr(template)) {
            const childArr = [];
            for (const i in template) {
                if (template[i].htmlit) childArr.push(...template[i].nodes);
                else childArr.push(template[i]);
            }
            this.replaceWith(...childArr);
        }
        return this;
    },

    setProperty (key, val) {
        if (config.props.setAttributes) {
            if (this[key] === undefined && typeof val === 'string') {
                this.setAttribute(key, val)
            } else {
                this[key] = val
            }
        } else {
            this[key] = val
        }
        return this
    },
    setProperties (props) {
        if (!props) props = this.props;
        for (const propKey in props) {
            const propVal = props[propKey]
            this.setProperty(propKey, propVal)
        }
        return this
    },
    renderSubtree (subtree) {
        const props = this.props;
        if (!subtree) subtree = this.subtree;

        subtree = (isFn(subtree))
            ? subtree.call(this, props)
            : (isNode(subtree) || isStr(subtree))
                ? [subtree]
                : (subtree.htmlit)
                    ? [subtree.DOMString]
                    : subtree;

        if (isDef(subtree.htmlit)) {
            subtree = [subtree.DOMString];
        }

        if (isArr(subtree)) {
            for (let node of subtree) {
                if (isFn(node)) {
                    const fn = node;
                    node = node.call(this, props);
                    node.template = fn;
                }

                if (isStr(node)) {
                    this.insertAdjacentHTML('beforeend', node);
                }

                if (isNode(node)) {
                    this.append(node);
                }
            }
        }
    },

    rerender () {
        const props = this.props;

        if (isDef(this.render)) {
            const children = this.render(props);
            this.replaceSubtree(children);
        }

        else if (isDef(this.template)) {
            const template = this.template.call(this, props);
            this.replaceSelf(template);
        }

        else if (isFn(this.subtree)) {
            this.replaceChildren(this.subtree);
        }

        else {
            for (const node of [...this.children]) {
                if (isDef(node.rerender)) {
                    node.rerender();
                }
            }
        }
    }
}

export const createNode = function (tagName, props = {}, subtree = []) {
    if (!isObj(props)) {
        if (isArr(props) || isFn(props) || isNode(props) || isStr(props)) {
            subtree = props
            props = {}
        }
    }
    if (isDef(props.DOMString) && isDef(props.nodes)) {
        subtree = props.DOMString;
        props = {};
    }
    if (isDef(subtree.DOMString) && isDef(subtree.nodes)) {
        subtree = subtree.DOMString;
    }

    const node = document.createElement(tagName);
    assignToNode(node);

    node.props = props;
    node.subtree = subtree;

    return node;
}

export const assignToNode = function (node) {
    if (node['-assigned']) return node;

    assignProperties(node);
    assignMethods(node);
    assignPrimitives(node);

    return node;
}

export const assignProperties = function (node) {
    Object.defineProperties(node, nodeProperties);
}

export const assignMethods = function (node) {
    Object.assign(node, nodeMethods);
}

export const assignPrimitives = function (node) {
    node[Symbol.toPrimitive] = function (hint) {
        if (hint === "number") {
            const all = document.querySelectorAll("*");
            for (const i in all) {
                if (all[i] === this) return parseInt(i)
            }
        }
        if (hint === "string" || hint === "default") return this.outerHTML;
    };

    node[Symbol.search] = function (string) {
        return string.indexOf(this.outerHTML);
    };

    node[Symbol.iterator] = function * () {
        const childNodes = this.childNodes;
        for (const i in childNodes) {
            yield childNodes[i]
        }
    };
}

export const parseDOMString = function (DOMString) {
    const template = createNode('template');
    template.innerHTML = DOMString;
    return template.content;
}

export const formatTag = function (tag) {
    const name = new Str(tag).dashedToCamelCase().toString();
    return (name.startsWith("-")) ? name.slice(1) : name;
}
