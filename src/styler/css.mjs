import data from "./css/css-data.json";
import {isStr,isObj, isArr, isFn, isNum, Str} from "../../utils/utils.mjs";
import bootstrap from "./css/bootstrap.json";
import Unit from "./css/units.mjs"

const selectorFormatters = [
    // camelCase => camel-case
    [/(?!^[A-Z])([A-Z])/g , m => "-" + m.toLowerCase()],
    // $class => .class
    [/(\$(?=[A-Za-z]))/g , (m,...args) => {return "."}],
    // _div => > div
    [/(\_)/g, m => ">"],
    // space before everything not : 
    [/(^[^:])/g,m => " "+m],
    // '&' used to connect classes, psuedo-selectors etc... 
    [/(\s*\&\s*)/g, m => ""]
];
const valueFormatters = [
    // any value ending with "!" => value+'!important'
    [/([!][\s]*$)/g, m => "!important"]
];
const hasCSS = () => {
    try {
            return CSS.supports("color:red");
    }
    catch(e){
            return false
    }
}

export const css = {
    ...data,
    bootstrap,
    Unit,
    toDashed(str){
        return new Str(str).camelCaseToDashed().toString(); 
    },
    toCamel(str){
        return new Str(str).dashedToCamelCase().toString();
    
    },
    formatSelector(selectorString,implicit){
        selectorFormatters.forEach(
            rs => selectorString = selectorString.replace(rs[0],rs[1])
        );
        if (implicit){
            return this.formatSelector(implicit + selectorString)
        }
        return selectorString.replaceAll(/[\s]+/g," ").trim(); 
    },
    formatProp(prop){
        return new Str(prop).camelCaseToDashed().toString().replaceAll("\n","").replaceAll(" ","")
    },
    formatValue(value){
        if (Array.isArray(value)){
            return value; 
        }
        valueFormatters.forEach(
            rs => value = value.toString().replace(rs[0],rs[1])
        )
        return value
    },
    stringify(obj,nl=""){
        obj = this.flatten(obj)
        if (isStr(obj)) return obj; 
        let stringified = "";
        Object.entries(obj).forEach(e => {
            const [k,v] = e; 
            const newv = Object.entries(v).filter(e => isStr(e[1]) || isNum(e[1])).map(e => e.join(":")).join(";"+nl); 
            stringified += k + " {    "+nl + newv +nl+"}"+nl; 
        });
        return stringified; 
    },
    supports(dec){
        if (hasCSS()) return CSS.supports(dec)
        dec = this.stringify(dec);
        const tester = document.createElement('div'); 
        tester.style = dec;
        if (tester.getAttribute('style').length === 0){
            return false; 
        }
        return true; 
    },
    supportsProp(prop){
        const tester = document.createElement('div');
        return prop in tester.style
    },

    flatten(object,path="",acc={}){
        /* Flatten */
        for (const key in object){
            const val = object[key]; 
            if (isObj(val)){
                if (path.includes("@")){
                    acc[path+" "+key] = val;
                    continue;
                }
                const accPath = this.formatSelector(key,path); 
                acc[accPath] = val;
                this.flatten(val,accPath,acc);
            }
            if (isArr(val)){
                const accPath = this.formatSelector(key,path); 
                acc[accPath] = val;
            }
        }
        return acc; 
    },
    parse(str,parseObj={}){
        if (str.includes("{")){
            const sel = str.slice(0,str.indexOf("{"))
            const {inner,after} = new Str(str).stackAnalysis("{","}");
            parseObj[sel.trim().replaceAll("\n","")] = this.parse(inner,{});
            this.parse(after,parseObj)
        }
        else {
            const decs = str.split(";");
            decs.forEach(dec => {
                if (dec.includes(":")){
                    const [p,v] = dec.split(":");
                    parseObj[css.formatProp(p)] = v.trim(); 
                }
            });
        }
        return parseObj;
    },
    generateStyleElement(id){
        if (id==null) id = "stylesheet-"+document.querySelectorAll('style').length; 
        const ss = document.createElement('style');
        ss.setAttribute('id',id); 
        return ss; 
    }
}
export const Unit = Unit;


export default css;





