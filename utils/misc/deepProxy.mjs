import { enforce, isObj } from "./analyze.mjs";

export class DeepProxy {
    constructor(object,handler){
        enforce({object:handler}); 
        for (let key in object){
            if (isObj(object[key])){
                object[key] = new DeepProxy(object[key],handler); 
            }
        }
        return new Proxy(object,handler);
    }
}

export default DeepProxy


