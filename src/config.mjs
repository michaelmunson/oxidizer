import css from "./css.mjs";

const config = {
    props: {
        setAttributes: true
    },
    component: {
        /**
         * @property customElement <boolean> - whether or not to define customElements from components
         * @property useClass <boolean> - use class name for element tag name
         * @property defaultName <string> - tag name to use if useClass is false
         * @property append <string> - string to append tag name
         * @property append <string> - string to prepend tag name
         */
        isCustomElement: true,
        isTagConstructor: true,
        tagName: "ox-component"
    },
    css: css.config

}

export default config
