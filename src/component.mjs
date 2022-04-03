import config from "./config.mjs";
import { css } from "./css.mjs";
import { $ } from "./html/query.mjs";

const observedNodes = {
    style: {
        onConnected (node) {
            if (node.ruleMap) {
                node.ruleMap.sheet = node.sheet;
            }
            if (node.handleEvents) {
                if (css.config.handleEvents) {
                    node.handleEvents();
                }
            }
        }
    },
    '*': {
        onConnected (node) {
            if (css.config.handleEvents) {
                for (const sty in document.styleSheets) {
                    if (sty.handleEvents) {
                        sty.handleEvents(node);
                    }
                }
            }
        }
    }
}

export class Component {
    constructor (props = {}) {
        const { isTagConstructor, isCustomElement, tagName } = config.component;
        const name = (isTagConstructor)
            ? css.toDashed(this.constructor.name)
            : css.toDashed(tagName);
        const formatedName = (name.startsWith("-")) ? name.slice(1) : name;
        const node = $.create(formatedName, props)
        if (this.render) {
            node.subtree = this.render.bind(node);
            node.render();
        }
        if (this.style) {
            const styles = this.style
            styles.forEach(style => document.querySelector('#oxss').sheet.insertRule(style.toString()))
        }
        if (!customElements.get(name)) {
            const onConnected = (this.onConnected) ? this.onConnected : (this.onConnectedCallback) ? this.onConnectedCallback : undefined;
            const onDisconnected = (this.onDisconnected) ? this.onDisconnected : (this.onDisconnectedCallback) ? this.onDisconnectedCallback : undefined;
            const onAttributeChange = (this.onAttrChange) ? this.onAttrChange : (this.onAttributeChange) ? this.onAttributeChange : (this.onAttributeChangeCallback) ? this.onAttributeChangeCallback : undefined;
            const observedAttributes = (this.observedAttributes) ? this.observedAttributes : []
            customElements.define(formatedName, class extends HTMLElement {
                constructor () {
                    super()
                }

                onConnectedCallback () {
                    onConnected.call(this);
                }

                onDisconnectedCallback () {
                    onDisconnected.call(this)
                }

                static get observedAttributes () {
                    return observedAttributes;
                }

                onAttributeChange (attribute) {
                    onAttributeChange.call(this, attribute)
                }
            })
        }
        return node;
        // if (!(name in observedNodes)) {
        //     const onConnected = (this.onConnected) ? this.onConnected : (this.onConnectedCallback) ? this.onConnectedCallback : undefined;
        //     const onDisconnected = (this.onDisconnected) ? this.onDisconnected : (this.onDisconnectedCallback) ? this.onDisconnectedCallback : undefined;
        //     const onAttributeChange = (this.onAttrChange) ? this.onAttrChange : (this.onAttributeChange) ? this.onAttributeChange : (this.onAttributeChangeCallback) ? this.onAttributeChangeCallback : undefined;
        //     observedNodes[name] = {
        //         onAttributeChange,
        //         onConnected,
        //         onDisconnected
        //     }
        // }

        // Obj.enforce(props);
        // this.props = props;
        // this.root = CustomElement(this.constructor.name);
        // new Assigner(externals)(this.root);
        // this.root.setProps(this.props).setDescs(this.render);
        // return this.root;
    }

    static get observedNodes () {
        return observedNodes;
    }
}

export default Component;
