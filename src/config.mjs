import Styler from "./styler/styler.mjs"


const configuration = {
    autoSetAttrs : true,
    get styler(){
        return Styler.config; 
    },
    set styler(o){
        Styler.configure(o);
    },
}

export const config = new Proxy(configuration,{
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
