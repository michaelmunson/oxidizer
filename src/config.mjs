import { DeepProxy, isObj } from "../utils/utils.mjs";
import css from "./css.mjs";

const configuration = {
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

export const config = new DeepProxy(configuration, {
    set (t, k, v) {
        if (!(k in t)) return false;
        if (isObj(v)) {
            t[k] = { ...t[k], ...v }
        } else t[k] = v;
        return true;
    }
})

export default config
