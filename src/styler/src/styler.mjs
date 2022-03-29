import { isArr, isFn, isObj, isStr } from "../../../utils/utils.mjs";
import { css } from "./css.mjs";
import configuration from "./config.mjs";
import $, {defaultCSS} from "../../query.mjs";
import { CSSDeclarationError, CSSStyleSheetError } from "./error.mjs";

const config = configuration; 
const attachMethods = (node,fn) => {
    node.eventHandlers = (node.eventHandlers) ? node.eventHandlers : []; 
    for (const f in fn){
        const func = function(){
            const n = $(this); 
            const styles = fn[f].call(n);
            if (styles === false) n.revertCss(); 
            else if (isObj(styles)) n.css(new StylerDeclarations(styles))
        }
        if (node.eventHandlers.filter(fn0 => fn0.toString() === fn[f].toString()).length > 0) continue;  
        node.addEventListener(f,func);
        node.eventHandlers.push(fn[f]);

    }
}
export const css = css; 
export const Unit = css.Unit;
export const colors = css.colors; 
export const $ = $; 

/**
 * @param {Function} cssFactory 
*/
export class StylerFactory {
    constructor(cssFactory){
        cssFactory = isFn(cssFactory) ? cssFactory : arg => cssFactory;
        this.factory = cssFactory;
    }
    mint(arg){
        const out = this.factory.call(this,arg);
        return new StylerSheet(out);
    }
    render(arg, styleElement){
        return this.mint(arg).render(styleElement); 
    }
}
/**
 * @param { Object } decObject - Declaration Object {property:value}
 */
export class StylerDeclarations {
    constructor(decObject){
        Object.entries(decObject).forEach(e => {
            const [p,v] = e; 
            if (isObj(v) || isFn(v)) return; 
            this.append(p,v); 
        });
    }
    append(prop,val){
        if (prop in config.properties){
            const out = config.properties[prop](val);
            for (const o in out) this[css.formatProp(o)] = css.formatValue(out[o]); 
        }
        else this[css.formatProp(prop)] = css.formatValue(val); 
        this.clean();
        this.inspect();  
    }
    clean(){
        for (const i in this){
            if (i in config.unitDefaults){
                if (!isNaN(this[i])) this[i] += config.unitDefaults[i]; 
            }
            else if (css.toCamel(i) in config.unitDefaults){
                if (!isNaN(this[i])) this[i] += config.unitDefaults[css.toCamel(i)]; 
            }
        }
    }
    inspect(){
        for (const p in this){
            const dec = p+":"+this[p]; 
            if (!css.supports(dec)) config.onUnsupported(new CSSDeclarationError(dec)); 
        }
    }
    toObject(){
        const o = {};
        for (const i in this) o[i] = this[i]; 
        return o; 
    }
    toString(){
        return Object.entries(this).map(e => e[0]+":"+e[1]).join(";"); 
    }
    stringify(type = "string"){
        type = type.toLowerCase(); 
        if (type.startsWith("str")) return this.toString(); 
        else if (type.startsWith("arr")) return this.toString().split(";"); 
        else if (type.startsWith("obj")) return css.parse(this.toString()); 
    }
}

/**
 * @param { Object } styleObject
*/
export class StylerSheet {
    constructor(styleObject){
        const {rules,eventHandlers} = StylerSheet.compile(styleObject); 
        this.rules = rules;
        this.eventHandlers = eventHandlers;
        this.styleElement = css.generateStyleElement(); 
        $.head.append(this.styleElement);
        Styler.sheetMap.push(this); 
    }
    static compile(object){
        const styles = css.flatten(object);
        const rules = new Map(); 
        const eventHandlers = new Map(); 
        for (const sel in styles){
            if (sel==="@media" || sel==="@keyframes") continue; 
            else if (sel.includes("@media") || sel.includes("@keyframes")){
                const inrMap = new Map(); 
                for (const sel1 in styles[sel]){
                    const selector = isNaN(sel1) ? sel1 : sel1 + "%";
                    const styDec = new StylerDeclarations(styles[sel][sel1]);  
                    inrMap.set(selector,styDec);
                    defaultCSS[selector] = styDec.toObject(); 
                }
                rules.set(sel, inrMap); 
            }
            else {
                if (isObj(styles[sel])) {
                    const fns = {} 
                    for (const sel1 in styles[sel]){
                        if (isFn(styles[sel][sel1])) fns[sel1] = styles[sel][sel1]
                    }
                    if (Object.keys(fns).length>0) eventHandlers.set(sel, fns); 
                    const stydec = new StylerDeclarations(styles[sel])
                    rules.set(sel,stydec); 
                    defaultCSS[sel] = stydec.toObject(); 
                } 
                else if (isArr(styles[sel])) rules.set(sel, styles[sel]); 
            }
        }
        return {rules,eventHandlers,}
    }
    attachMethods(){
        for (const e of this.eventHandlers){
            const [sel,fn] = e; 
            document.querySelectorAll(sel).forEach(node => attachMethods(node,fn))
        }        
    }
    toString(){
        let strArr = []; 
        for (const e of this.rules.entries()){
            const [sel,val] = e; 
            if (isArr(val)) val.forEach(v => strArr.push(sel + " "+v));
            else if (val instanceof Map){
                for (const vale of val.entries()){
                    const [sel1, val1 ] = vale; 
                    strArr.push(sel + " { " + sel1 + " { " + val1.toString() + " } } "); 
                }
            }
            else if (val instanceof StylerDeclarations){
                strArr.push(sel + " { " + val.toString() + " } "); 
            }
        }
        return strArr.join("\n"); 
    }
    stringify(type="array"){
        type = type.toLowerCase(); 
        let strArr = [];
        const obj = {}; 
        for (const e of this.rules.entries()){
            const [sel,val] = e; 
            if (isArr(val)) val.forEach(v => strArr.push(sel + " "+v));
            else if (val instanceof Map){
                for (const vale of val.entries()){
                    const [sel1, val1 ] = vale; 
                    strArr.push(sel + " { " + sel1 + " { " + val1.toString() + " } } "); 
                    obj[sel] = sel1 + " { " + val1.toString() + " } ";
                }
            }
            else if (val instanceof StylerDeclarations){
                strArr.push(sel + " { " + val.toString() + " } "); 
                obj[sel] = val.toString(); 
            }
        }
        if (type.startsWith("arr")) return strArr; 
        else if (type.startsWith("str")) return strArr.join("\n");
        else if (type.startsWith("obj")) return obj; 
        else return strArr; 
    }
    render(styleElement=this.styleElement){
        try {
            const stringed = this.stringify(); 
            stringed.forEach(str => {
                if (str.includes("@import")) {
                    $('#dynamic-imports').sheet.insertRule(str); 
                    return; 
                }
                try {
                    styleElement.sheet.insertRule(str); 
                }
                catch(e){
                    config.onError(e);
                }
            });
            this.attachMethods(); 
            return this; 
        }
        catch(e){

        }
        
    }
}

/**
 * @param { Function | Object } styler - Function | Object
*/
export class Styler {
    constructor(styler){
        if (isFn(styler)) return new StylerFactory(styler);
        else if (isObj(styler)) return new StylerSheet(styler);
        else {
            throw new TypeError("Styler constructor argument must be type Function or Object"); 
        }
    }
    static css = css; 
    static Factory = StylerFactory;
    static Sheet = StylerSheet; 
    static Declaration = StylerDeclarations;
    static sheetMap = [] 
    static config = new Proxy(config,{
        set(target,key,value){
            target[key] = value;
            return true; 
        }
    });
    static init = (()=>{
        const impSty = $.create('style').attr('id','dynamic-imports');
        $.head.append(impSty); 
        $.body.observe({
            childList:function(mut){
                mut.addedNodes.forEach(node => {
                    if (node.matches === undefined) return 
                    for (const sht of Styler.sheetMap){
                        for (const e of sht.eventHandlers){
                            const [sel,fn] = e;
                            if (node.matches(sel)){
                                attachMethods(node,fn)    
                            }
                        }
                    }
                })
            }, 
            subtree:true
        });
        return true; 
    })(); 
}

new StylerFactory()

export default Styler; 
