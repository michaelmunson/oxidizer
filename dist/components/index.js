"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
exports.createComponent = createComponent;
exports.createComponentExtension = createComponentExtension;
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
    return (...params) => {
        const element = (0, utils_1.createIntrinsicElement)(extension, ...params);
        element.setAttribute('is', tagName);
        return element;
    };
}
