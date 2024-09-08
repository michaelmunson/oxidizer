import { createComponent, Component, H1, P } from "../../../src";

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

export default TestApp;
const ad = 
    2;


/**
 * ### `HTMLElement`
 * ```html
 * <wbr>
 * ```
 * @description creates an `HTMLElement` instance.
 * @example
 * ```typescript
 * const h1:HTMLHeadingElement = (
 *   H1(
 *     {id: 'h1'},
 *     SPAN('Hello')
 *     SPAN({style:'color:red;'}, 'World')
 *   )
 * )
 * ```
 */
const a = () => 3