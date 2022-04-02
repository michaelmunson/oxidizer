import { isArr, isFn, isObj, isStr } from "../../utils/utils.mjs";
import { css } from "./css.mjs";
import $  from "../query.mjs";
import {StylerDeclarations,StylerSheet} from "./stylerSheet.mjs";
import StylerRouter from "./stylerRouter.mjs";

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

/**
 * @param { Function | Object } styler - Function | Object
*/
class Styler {
    
    constructor(styler){
        this.stylerSheet = new StylerSheet(styler);
        if (this.stylerSheet) {
            this.styleElement = $(this.stylerSheet.styleElement);
            this.id = this.stylerSheet.id; 
            this.rules = this.stylerSheet.rules; 
        }
    }
    render(...argv){
        if (!this.stylerSheet){
            this.stylerSheet = this.factory.apply(this,argv);
        }
        this.styleElement = this.stylerSheet.styleElement;
        this.id = this.stylerSheet.id; 
        this.rules = this.stylerSheet.rules; 
        this.stylerSheet.render();
        return this.stylerSheet; 
    }
    add(r){
        this.stylerSheet.set(r); 
        return this; 
    }
    delete(r){
        this.stylerSheet.delete(r); 
        return this; 
    }
    insert(r,i){
        this.stylerSheet.insert(r,i); 
        return this; 
    }
    clear(){
        this.stylerSheet.clear()
    }
    static get Sheet(){return StylerSheet}
    static get Declarations(){return StylerDeclarations}
    static get Router(){return StylerRouter}

    static get css(){return css}
    static get stylerSheets(){return StylerSheet.stylerSheets}
    static get config(){return config}
    static set config(o=config){return this.configure(o)}

    static configure(o){
        for (const c in o) config[c] = o[c]; 
    }
    static init = (()=> {

        if (!$.exists('head')){
            document.querySelector('html').prepend(document.createElement('head'))
        }

        $.body.observe({
            childList:function(mut){
                mut.addedNodes.forEach(node => {
                    if (node.matches === undefined) return 
                    const v = Object.values(Styler.stylerSheets); 
                    for (const s of v){
                        const evh = s.eventHandlers
                        if (evh) {
                            for (const e of evh){
                                const [sel,fn] = e;
                                if (node.matches(sel)){
                                    attachMethods(node,fn)    
                                }
                            }
                        }
                        
                    }
                })
            }, 
            subtree:true
        });

    })(); 
}

export {
    Styler,
    css,
    $,
}

export default Styler; 
