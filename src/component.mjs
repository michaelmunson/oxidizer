import { methods } from "../utils/utils.mjs";
import config from "./config.mjs";
import { css } from "./css.mjs";
import { html } from "./oxidizer.mjs";

const customizer = (name, assigner) => {
    const { onConnected, onDisconnected, observedAttributes, onAttributeChange } = assigner;
    if (customElements.get(name) === undefined) {
        try {
            customElements.define(name, class extends HTMLElement {
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
        catch (e) {}
    }
}

export class Component {
    constructor (props = {}) {
        const { isTagConstructor, tagName } = config.component;
        const name = (isTagConstructor)
            ? css.toDashed(this.constructor.name)
            : css.toDashed(tagName);
        const formatedName = (name.startsWith("-")) ? name.slice(1) : name;
        const $render = (this.render) ? this.render.call(this, props) : undefined;
        const node = html.create(formatedName, props, $render);
        if (this.styles) {
            const styles = (this.styles instanceof css.RuleList) ? this.styles : (css(this.styles));
            styles.forEach(style => document.querySelector('#oxss').sheet.insertRule(style.toString()))
        }

        customizer(name, {
            onConnected: (this.onConnected) ? this.onConnected : (this.onConnectedCallback) ? this.onConnectedCallback : () => {},
            onDisconnected: (this.onDisconnected) ? this.onDisconnected : (this.onDisconnectedCallback) ? this.onDisconnectedCallback : () => {},
            onAttributeChange: (this.onAttrChange) ? this.onAttrChange : (this.onAttributeChange) ? this.onAttributeChange : (this.onAttributeChangeCallback) ? this.onAttributeChangeCallback : () => {},
            observedAttributes: (this.observedAttributes) ? this.observedAttributes : []
        });

        methods(this).filter(i => !(['constructor', 'render']).includes(i)).forEach(method => {
            node[method] = this[method];
        });

        return node;
    }
}

export default Component;
