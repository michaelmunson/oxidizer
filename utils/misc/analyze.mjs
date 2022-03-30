import { $str } from "../extensions/str.mjs";

function analyzer(toAnalyze){ 
    return {
        toAnalyze,
        type : function(...types){

            try{
                if (types.length === 0){
                    const types = {
                        'number' : this.toAnalyze instanceof Number,
                        'HTMLElement' : this.toAnalyze instanceof HTMLElement,
                        'string' : typeof this.toAnalyze === 'string' || this.toAnalyze instanceof String,
                        'number' : typeof this.toAnalyze === 'number',
                        'undefined' : typeof this.toAnalyze === 'undefined',
                        'function' : typeof this.toAnalyze === 'function',
                        'null' : this.toAnalyze === null,
                        'array' : Array.isArray(this.toAnalyze),
                        'boolean' : typeof this.toAnalyze === "boolean"
                    }
                    const type = Object.entries(types).filter(e => e[1] == true);
                    if (type.length == 0){
                        try {
                            const str = this.toAnalyze.toString();
                            return str.slice(str.indexOf(' ')+1).replace(']','');
                        } catch(e){}
                    }
                    return type[0][0];
                }
                
                else {
                    const t = analyzer(this.toAnalyze).type()
                    for (const type of types){
                        if (typeof type === "string"){
                            if (type === t){
                                return true; 
                            }
                        }
                        else {
                            if (this.toAnalyze instanceof type){
                                return true; 
                            }
                        }
                    }
                    return false; 
                }
            }
            catch(e){
                try {
                    return toAnalyze.__proto__.constructor.name; 
                }
                catch(e){}
            }
        },
        functionType : function(...types){
            if (types.length === 0){
                // Ian Carter -> https://stackoverflow.com/a/69316645
                const x = this.toAnalyze; 
                return typeof x !== 'function'
                ? ''
                : x.hasOwnProperty('arguments')
                    ? 'function'
                    : x.prototype
                        ? 'class'
                        : x.constructor.name === 'AsyncFunction'
                        ? 'async'
                        : 'arrow';
            }
            else {
                const t = analyzer(this.toAnalyze).functionType();
                for (const type of types){
                    if (type === t){
                        return true
                    }
                }
                return false; 
            }
        },
        functionParameters : function(fn = this.toAnalyze,fnString=this.toAnalyze.toString()){
            let parameters = "",
            head = fnString.slice(0,fnString.indexOf("{")); 
            if (this.functionType("arrow")){
                parameters = head.split("=>",1)[0].trim();
                if (parameters.charAt(0) === "("){
                    parameters = parameters.slice(1,-1); 
                }
            }
            else {
                parameters = $str(head).stack("(",")").str;
            }
            return parameters; 
        },
        functionBody : function(fn = this.toAnalyze){
            return $str(fn).stack("{","}").str; 
        },
        get isObj(){
            try {
                return this.constructor.name === "Object"
            }
            catch(e){
                return false; 
            }
        },
        get isStr(){
            return this.type("string")
        },
        get isWeakStr(){
            return this.type("string") || this.toAnalyze instanceof String
        },
        get isArr(){
            return this.type("array")
        },
        get isFn(){
            return this.type("function")
        },
        get isStrictObj(){
            try {
                const str = this.toAnalyze.toString();
                return str.slice(str.indexOf(' ')+1).replace(']','') === 'Object';
            } catch(e){
                return false; 
            }                                                        
        }, 
        get methods(){
            let properties = new Set()
            let currentObj = this.toAnalyze; 
            do {
              Object.getOwnPropertyNames(currentObj).map(item => properties.add(item))
            } while ((currentObj = Object.getPrototypeOf(currentObj)))
            return [...properties.keys()].filter(item => typeof this.toAnalyze[item] === 'function')
        },

        enforce(ObjectType,messageHandler=(expected,actual)=>{return `Expected type '${expected}', got '${actual}'`}){
            const type = this.type()
            const message = messageHandler(ObjectType,type); 
            if (type !== ObjectType && type.toLowerCase() !== ObjectType.toLowerCase() ){
                throw new TypeError(message);
            }
        }
    } 
}

analyzer.type = (o,t) => (t) ? analyzer(o).type(t) : analyzer(o).type(); 
analyzer.typev = (arr) => arr.map(a => analyzer.type(a))
analyzer.str = (o) => typeof o === 'string';
analyzer.weakStr = (o) => analyzer.str(o) || o instanceof String
analyzer.arr = (o) => Array.isArray(o)
analyzer.obj = o => analyzer(o).isStrictObj;
analyzer.fn = o => typeof o === 'function';
analyzer.int = o => typeof o === Number.isInteger(o);
analyzer.nan = o => isNaN(o);
analyzer.num = o => typeof o === 'number';
analyzer.bool = o => typeof o === 'boolean';
analyzer.enforce = (enforceObj = {},messageHandler) => {
    for (let type in enforceObj){
        const object = enforceObj[type];
        analyzer(object).enforce(type,messageHandler);
    }
}

const typev = analyzer.typev; 
const isStr = (o) => typeof o === 'string';
const isWeakStr = (o) => analyzer.str(o) || o instanceof String
const isArr = (o) => Array.isArray(o)
const isObj = o => analyzer(o).isStrictObj;
const isFn = o => typeof o === 'function';
const isInt = o => typeof o === Number.isInteger(o);
const isNan = o => isNaN(o);
const isNum = o => typeof o === 'number';
const isBool = o => typeof o === 'boolean';
const isNode = o => o instanceof HTMLElement; 
const enforce = (enforceObj = {},messageHandler) => {
    for (let type in enforceObj){
        const object = enforceObj[type];
        analyzer(object).enforce(type,messageHandler);
    }
}

export default analyzer
export {analyzer,typev,isArr,isBool,isFn,isInt,isNan,isNum,isObj,isStr,isWeakStr,isNode,enforce}