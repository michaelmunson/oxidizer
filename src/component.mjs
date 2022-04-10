import { methods } from "../utils/utils.mjs";
import config from "./config.mjs";
import { css } from "./css.mjs";
import { html } from "./oxidizer.mjs";

const customizer = (name, assigner) => {
    const { onConnected, onDisconnected, observedAttributes, onAttributeChange } = assigner;
    if (customElements.get(name) === undefined) {
        try {
            customElements.define(name, class extends HTMLElement {
                [Symbol.toPrimitive] (hint) {
                    if (hint === "number") {
                        const all = document.querySelectorAll("*");
                        for (const i in all) {
                            if (all[i] === this) return parseInt(i)
                        }
                    }
                    if (hint === "string" || hint === "default") return this.outerHTML;
                }

                [Symbol.search] (string) {
                    return string.indexOf(this.outerHTML);
                }

                * [Symbol.iterator] () {
                    for (const i in this) yield this[i]
                }

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

                get __isOxidizerComponent__ () {
                    return true;
                }
            })
        }
        catch (e) {}
    }
}

export class Component {
    static [Symbol.hasInstance] (instance) {
        return instance.__isOxidizerComponent__ === true;
    }

    constructor (props = {}) {
        const { isTagConstructor, tagName } = config.component;
        const name = (isTagConstructor)
            ? css.toDashed(this.constructor.name)
            : css.toDashed(tagName);
        const formatedName = (name.startsWith("-")) ? name.slice(1) : name;
        const $render = (this.render) ? this.render.call(this, props) : undefined;
        const node = html.create(formatedName, props, $render);
        if (this.css) {
            const styles = (this.css instanceof css.RuleList) ? this.css : (css(this.css));
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
