import { DeepProxy } from "../utils/utils.mjs";
import Styler from "./styler/styler.mjs"


const configuration = {
    props : {
        setAttributes : true,
    },
    component : {
        /**
         * @property customElement <boolean> - whether or not to define customElements from components
         * @property useClass <boolean> - use class name for element tag name
         * @property defaultName <string> - tag name to use if useClass is false 
         * @property append <string> - string to append tag name
         * @property append <string> - string to prepend tag name
         */
        isCustomElement : true,
        tagName : {
            isClassName : true,
            defaultName : "component",
            prepend : "ox-",
            append : "",
        },
        tagAppend : "",
        tagPrepend : "ox-",
    },

    get styler(){
        return Styler.config; 
    },
    set styler(o){
        Styler.configure(o);
    },
}

export const config = new DeepProxy(configuration,{
    set(t,k,v){
        if (!(k in t)) return false;
        if (isObj(v)){
            t[k] = {...t[k], ...v}
        }
        else t[k]= v ;
        return true; 
    }
})





export default config
