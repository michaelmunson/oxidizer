import { methods } from "../utils/utils.mjs";
import config from "./config.mjs";
import css from "./css.mjs";
import html from "./html.mjs";

export class Component {
    constructor (props = {}) {
        this.props = props;
        let name = (config.component.isTagConstructor)
            ? css.toDashed(this.constructor.name)
            : css.toDashed(config.component.tagName);
        name = (name.startsWith("-")) ? name.slice(1) : name;

        const node = html.create(name, props);

        methods(this).filter(i => !(['constructor', 'render']).includes(i)).forEach(method => {
            node[method] = this[method].bind(node);
        });

        const subtree = (this.render)
            ? this.render.bind(node)
            : [];

        node.subtree = subtree;

        if (this.render) node.render = this.render.bind(node);

        if (this.css) {
            const styles = (this.css.sheet)
                ? this.css
                : css(this.css);
            styles.sheet.adopt(true);
        }

        const customMethods = {
            onconnected: (this.onconnect)
                ? this.onconnect
                : (this.connectedCallback)
                    ? this.connectedCallback
                    : () => {},
            ondisconnect: (this.ondisconnect)
                ? this.ondisconnect
                : (this.disconnectedCallback)
                    ? this.disconnectedCallback
                    : () => {},
            onAttributeChange: (this.onAttributeChange)
                ? this.onAttributeChange
                : (this.attributeChangeCallback)
                    ? this.attributeChangeCallback
                    : () => {},
            observedAttributes: (this.observedAttributes)
                ? this.observedAttributes
                : []
        };

        if (customElements.get(name) === undefined) {
            try {
                customElements.define(name, class extends HTMLElement {
                    constructor () {
                        super()
                    }

                    connectedCallback () {
                        customMethods.onconnected.call(this);
                    }

                    disconnectedCallback () {
                        customMethods.ondisconnect.call(this)
                    }

                    static get observedAttributes () {
                        return customMethods.observedAttributes;
                    }

                    onAttributeChange (attribute) {
                        customMethods.onAttributeChange.call(this, attribute)
                    }

                    get __isOxidizerComponent__ () {
                        return true;
                    }
                })
            }
            catch (e) {
                console.warn(e)
            }
        }

        return node;
    }

    static [Symbol.hasInstance] (instance) {
        return instance.__isOxidizerComponent__ === true;
    }
}

export default Component;

/*
function handleName () {
    const name = (config.component.isTagConstructor)
        ? css.toDashed(this.constructor.name)
        : css.toDashed(config.component.tagName);
    return (name.startsWith("-")) ? name.slice(1) : name;
}

function createNode () {
    const name = this.tagname;
    const props = this.props;
    const subtree = (this.render)
        ? this.render.call(this, props)
        : [];
    const node = html.create(name, props, subtree);
    if (this.render) node.render = this.render;

    return node;
}

function handleMethods () {
    const node = this.node;

    methods(this).filter(i => !(['constructor', 'render']).includes(i)).forEach(method => {
        node[method] = this[method].bind(node);
    });

    return node;
}

function handleCSS () {
    if (this.css) {
        const styles = (this.css.sheet)
            ? this.css
            : css(this.css);
        styles.sheet.adopt(true);
    }
}

function defineCustomElement (tagname) {
    const name = tagname;
    const defaults = {
        connect: (this.onConnected)
            ? this.onConnected
            : (this.connectedCallback)
                ? this.connectedCallback
                : (this.onconnect)
                    ? this.onconnect
                    : () => {},
        disconnect: (this.onDisconnected)
            ? this.onDisconnected
            : (this.disconnectedCallback)
                ? this.disconnectedCallback
                : (this.ondisconnect)
                    ? this.ondisconnect
                    : () => {},
        atttributeChange: (this.onAttrChange)
            ? this.onAttrChange
            : (this.onAttributeChange)
                ? this.onAttributeChange
                : (this.onAttributeChangeCallback)
                    ? this.onAttributeChangeCallback
                    : () => {},
        observedAttributes: (this.observedAttributes)
            ? this.observedAttributes
            : []
    };
    if (customElements.get(name) === undefined) {
        try {
            customElements.define(name, class extends HTMLElement {
                constructor () {
                    super()
                }

                connectedCallback () {
                    defaults.connect.call(this);
                }

                disconnectedCallback () {
                    defaults.disconnect.call(this)
                }

                static get observedAttributes () {
                    return defaults.observedAttributes;
                }

                onAttributeChange (attribute) {
                    defaults.atttributeChange.call(this, attribute)
                }

                get __isOxidizerComponent__ () {
                    return true;
                }
            })
        }
        catch (e) {
            console.warn(e)
        }
    }
}
*/
