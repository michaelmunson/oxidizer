import config from "./config.mjs";
import { css } from "./css.mjs";

const observedNodes = {
    style: {
        onConnected (node) {
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
            ? this.constructor.name
            : tagName;

        if (!(name in observedNodes)) {
            const onConnected = (this.onConnected) ? this.onConnected : (this.onConnectedCallback) ? this.onConnectedCallback : undefined;
            const onDisconnected = (this.onDisconnected) ? this.onDisconnected : (this.onDisconnectedCallback) ? this.onDisconnectedCallback : undefined;
            const onAttributeChange = (this.onAttrChange) ? this.onAttrChange : (this.onAttributeChange) ? this.onAttributeChange : (this.onAttributeChangeCallback) ? this.onAttributeChangeCallback : undefined;
            observedNodes[name] = {
                onAttributeChange,
                onConnected,
                onDisconnected
            }
        }

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
