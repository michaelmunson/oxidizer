import config from "./config.mjs";
import { css } from "./css.mjs";
import { $ } from "./html/query.mjs";

export class Component {
    constructor (props = {}) {
        const { isTagConstructor, tagName } = config.component;
        const name = (isTagConstructor)
            ? css.toDashed(this.constructor.name)
            : css.toDashed(tagName);
        const formatedName = (name.startsWith("-")) ? name.slice(1) : name;
        const node = $.create(formatedName, props);

        if (this.render) {
            node.subtree = this.render.bind(node);
            node.render();
        }

        if (this.styles) {
            const styles = this.styles
            styles.forEach(style => document.querySelector('#oxss').sheet.insertRule(style.toString()))
        }

        if (!customElements.get(name)) {
            const onConnected = (this.onConnected) ? this.onConnected : (this.onConnectedCallback) ? this.onConnectedCallback : () => {};
            const onDisconnected = (this.onDisconnected) ? this.onDisconnected : (this.onDisconnectedCallback) ? this.onDisconnectedCallback : () => {};
            const onAttributeChange = (this.onAttrChange) ? this.onAttrChange : (this.onAttributeChange) ? this.onAttributeChange : (this.onAttributeChangeCallback) ? this.onAttributeChangeCallback : () => {};
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
    }
}

export default Component;
