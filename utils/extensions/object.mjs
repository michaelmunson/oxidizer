import {isObj} from "../misc/analyze.mjs";
import DeepProxy from "../misc/deepProxy.mjs";
import { objEnforcer } from "../misc/type.mjs";

const walk = function(obj,callback){
    for (const key in obj){
        const value = obj[key]; 
        if (isObj(value)){
            obj[key] = walk(value,callback); 
            continue;
        }
        obj[key] = callback(key,value) ? callback(key,value) : value; 
    }
    return obj; 
}

class Obj extends Object {
    constructor(object){
        objEnforcer(object); 
        super(object)
        for (let i in object){
            this[i] = object[i]; 
        }
    }
    keys(callback){
        if (callback){
            this.keys().forEach((key,index,array) => {
                callback.call(this,key,index,array); 
            }); 
            return this.keys(); 
        }
        return Object.keys(this)
    }
    values(callback){
        if (callback){
            this.values().forEach((value,index,array) => {
                callback.call(this,value,index,array); 
            }); 
            return this.values(); 
        }
        return Object.values(this); 
    }
    entries(callback){
        if (callback){
            this.entries().forEach((entry,index,array) => {
                callback.call(this,entry,index,array); 
            }); 
            return this.entries(); 
        }
        return Object.entries(this); 
    }
    walk(callback){
        return walk(this,callback); 
    }
    proxy(handler){
        return new Proxy(this,handler); 
    }
    deepProxy(handler){
        return new DeepProxy(this,handler); 
    }
    static test(object){
        return isObj(object); 
    }
    static enforce(object){
        return objEnforcer(object)
    }
    static create(a,b){
        const o = {}
        o[a] = b;
        return o; 
    }
}

const $obj = (obj) => new Obj(obj); 

export default Obj
export {Obj,$obj,walk} 