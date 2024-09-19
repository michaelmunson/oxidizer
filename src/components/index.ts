import { Configuration } from "../config";
import { RenderParameters, HTMLCustomElementTagName, HTMLElementFromTagName, HTMLIntrinsicTagName } from "../intrinsics/types"
import { createIntrinsicElement, createIntrinsicElementComponent, createShadowElement } from "../intrinsics/utils"
import { Props } from "../props/types";


export abstract class Component extends HTMLElement {
    /**
     * @description Attributes whose change in value triggers `attributeChangedCallback` 
     * @see  */
    static observedAttributes: string[];
    /**
     * @description Invoked when the custom element is first connected to the document's DOM.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Web_components#connectedcallback*/
    connectedCallback?(): void
    /**
     * @description Invoked when the custom element is disconnected from the document's DOM.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Web_components#disconnectedcallback*/
    disconnectedCallback?(): void
    /**
     * @description Invoked when the custom element is moved to a new document.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Web_components#adoptedcallback*/
    adoptedCallback?(): void
    /**
     * @description Invoked when one of the custom element's attributes is added, removed, or changed.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Web_components#attributechangedcallback*/
    attributeChangedCallback?(): void
}

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
export function createComponent<T extends HTMLCustomElementTagName = any, C extends typeof HTMLElement = any>(
    tagName: T, 
    classDefinition: C
) {
    customElements.define(tagName, classDefinition);
    return <P extends Props = any>(
        ...params: RenderParameters<InstanceType<C>, P>
    ) => createIntrinsicElement(tagName as any, ...params) as HTMLElement;
}

export function createComponentExtension<T extends HTMLCustomElementTagName, E extends HTMLIntrinsicTagName, C extends typeof HTMLElement>(
    tagName: T,
    extension: E,
    classDefinition: C
){
    customElements.define(tagName, classDefinition, {extends: extension});
    return <P extends Props = any>(
        ...params: RenderParameters<HTMLElementFromTagName<E>, P>
    ) => createIntrinsicElementComponent(extension, tagName, ...params);
}

export function createShadowComponent<T extends HTMLCustomElementTagName = any, C extends typeof HTMLElement = any>(
    tagName: T, 
    classDefinition: C,
    options?: ShadowRootInit
) {
    const shadowInit = options ?? Configuration.get().components.shadowInit;
    customElements.define(tagName, classDefinition);
    return <P extends Props = any>(
        ...params: RenderParameters<InstanceType<C>, P>
    ) => createShadowElement(tagName as any, shadowInit, ...params) as HTMLElement;
}
