import data from "./css/css-data.json";
import bootstrap from "./css/bootstrap.json";
import Unit from "./css/units.mjs"
import {isStr,isObj, isArr, isFn, isNum, Str} from "../../utils/utils.mjs";
import config from "./config.mjs"
import { CSSStyleSheetError } from "./error.mjs";

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

export const styleElementMethods = {
    get onError(){
        return config.onError
    },
    getRules(){
        return [...this.sheet.rules] 
    },
    /**
     * 
     * @deprecated
     */
    addByHTML(obj){
        obj = css.stringify(obj);
        this.innerHTML = obj;
        return this; 
    },

    add(r){
        try {
            if (isObj(r)) toRender = css.stringify(toRender,"array"); 
            if (isStr(r)) toRender = [r];
            r.forEach(s => this.insert(s));
        }
        catch(e){
            config.onError(new CSSStyleSheetError(e))
        }
        return this; 
    },
    insert(r,i){
        if (i) this.sheet.insertRule(r,i)
        else this.sheet.insertRule(r)
        return this; 
    },
    clear(){
        while (this.sheet.cssRules.length > 0){ 
            this.sheet.deleteRule(0) 
        }
        return this; 
    },
    delete(rule){
        if (isStr(rule)) {
            for (const i in this.getRules()){
                if (this.getRules()[i].selectorText === rule) return this.delete(parseInt(i)); 
            }
        }
        if (isNum(rule)) this.sheet.deleteRule(i); 
        return this; 
    },
    replace(selector,rule){
        this.delete(selector);
        this.add(rule);
        return this; 
    },

    getRule(selector){
        return this.getRules().find(rule => rule.selectorText === selector)
    },
    getRuleDecs(rule,type){
        const decs = {}
        rule = this.getRule(rule); 
        const styles = [...rule.styles]; 
        for (const r of styles){
            const rd = css.toCamel(r); 
            decs[rd] =  rule.styles[rd];
        }
        if (type === "string") return css.stringify(decs); 
        else if (type === "array") return css.stringify(decs, "array")
        return decs; 
    },
    getRuleStyleMap(rule){
        return this.getRule(rule).styleMap; 
    },
    getRuleText(rule){
        this.getRule(rule).cssText; 
    },
    addRuleDecs(rule,decs){
        rule = this.getRule(rule)
        let txt = rule.cssText.replace("}","");
        if (isStr(decs)) decs = css.parse(txt + decs+" }"); 
        else if (isArr(decs)) decs = css.parse(decs); 
        for (const dec in decs){
            this.addRuleDec(dec,decs[dec]); 
        }
    },
    setRuleDec(rule,prop,val){
        this.getRuleStyleMap(rule).set(prop,val);
        return this; 
    },
    appendToHead(){
        if (this.sheet == null){
            document.head.append(this); 
        }
        return this; 
    },
    
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
        if (isStr(value)){
            valueFormatters.forEach(
                rs => value = value.toString().replace(rs[0],rs[1])
            )
        }
        return value
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
    stringify(obj,type="string"){
        if (isArr(obj)) {
            if (type==="string") return obj.join(";").replaceAll(";;",";")
            else return obj; 
        }; 
        obj = this.flatten(obj)
        if (isStr(obj)) return obj; 
        let stringified = (type==="string") ? "" : [] 
        Object.entries(obj).forEach(e => {
            const [k,v] = e; 
            const newv = Object.entries(v).filter(e => isStr(e[1]) || isNum(e[1])).map(e => e.join(":")).join(";"); 
            if (type === "array") stringified.push(k + " {    " + newv +"}")
            else stringified += k + " {    " + newv +"}"; 
        });
        return stringified; 
    },
    parse(str,parseObj={}){
        if (isObj(str)){
            const ents = Object.entries(str)
            if (isStr(ents[0][1])) str = ents.map(ent => ent.join("{")+"}"); 
            else return str
        }
        try {
            if (isArr(str)) {
                if (str[0].includes("{")) str = str.join("");
                else if (str[0].includes(":")) str = str.join(";");
                else {
                    const newstr = ""
                    for (const s in str){
                        const ch = (parseInt(s)%2===1) ? ";" : ":";
                        newstr+=str[s]+ch; 
                    }
                    str = newstr; 
                }
                str = str.replace(";;",";")
            };
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
        }
        catch(e){
            config.onError(e); 
        }
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





