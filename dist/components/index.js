"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
exports.createComponent = createComponent;
exports.createComponentExtension = createComponentExtension;
exports.createShadowComponent = createShadowComponent;
const config_1 = require("../config");
const utils_1 = require("../intrinsics/utils");
class Component extends HTMLElement {
    /**
     * @description Attributes whose change in value triggers `attributeChangedCallback`
     * @see  */
    static observedAttributes;
}
exports.Component = Component;
/**
 * @description A factory class used for creating a rendering function for you custom elements.
 * @example
    const TestApp = createComponent(
        'test-app',
        class extends HTMLElement implements Component {
            connectedCallback(): void {
                this.style.color = "red";
                this.style.background = "blue";
            }
        }
    );

    document.body.append(
        TestApp(
            {id: "root"},
            H1('Hello!'),
            P('How do you like my app?')
        )
    )
 */
function createComponent(tagName, classDefinition) {
    customElements.define(tagName, classDefinition);
    return (...params) => (0, utils_1.createIntrinsicElement)(tagName, ...params);
}
function createComponentExtension(tagName, extension, classDefinition) {
    customElements.define(tagName, classDefinition, { extends: extension });
    return (...params) => (0, utils_1.createIntrinsicElementComponent)(extension, tagName, ...params);
}
function createShadowComponent(tagName, classDefinition, options) {
    const shadowInit = options ?? config_1.Configuration.get().components.shadowInit;
    customElements.define(tagName, classDefinition);
    return (...params) => (0, utils_1.createShadowElement)(tagName, shadowInit, ...params);
}
