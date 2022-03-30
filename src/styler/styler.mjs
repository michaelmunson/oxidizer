import { isArr, isFn, isObj, isStr } from "../../utils/utils.mjs";
import { css } from "./css.mjs";
import config from "./config.mjs";
import $, {defaultCSS} from "../query.mjs";
import {StylerDeclarations,StylerFactory,StylerSheet,styleManager} from "./stylersheet.mjs"

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
export class Styler {
    
    constructor(styler){
        if (isFn(styler)) this.factory = new StylerFactory(styler);
        else if (isObj(styler) || isArr(styler)) this.stylerSheet = new StylerSheet(styler); 
        
        if (this.stylerSheet) {
            this.styleElement = $(this.stylerSheet.styleElement);
            this.id = this.stylerSheet.id; 
            this.rules = this.stylerSheet.rules; 
        }
        
    }

    render(...argv){
        if (!this.stylerSheet){
            this.stylerSheet = this.factory.mint(this,...argv);
        }
        this.styleElement = this.stylerSheet.styleElement;
        this.id = this.stylerSheet.id; 
        this.rules = this.stylerSheet.rules; 
        this.stylerSheet.render();
        return this.stylerSheet; 
    }
    add(r){
        r = 
        this.rules.set()
    }

    static get css(){return css}

    static get stylerSheets(){return [...document.querySelectorAll("[stylersheet]")]}
    static get config(){return config}
    static set config(o=config){return this.configure(o)}
    
    static get Factory(){return StylerFactory}
    static get Sheet(){return StylerSheet}
    static get Declarations(){return StylerDeclarations}

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
                    for (const s of Styler.stylerSheets){
                        const evh = s.eventHandlers
                        
                        for (const e of evh){
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

    })(); 
}

export {
    css,
    $,
}

export default Styler; 
