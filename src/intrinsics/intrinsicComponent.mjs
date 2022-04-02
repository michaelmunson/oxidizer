import {  isArr, isFn, isObj, objEnforcer, TypeConverter, Typevout} from "../../utils/utils.mjs";
import config from "../config.mjs";
import { argvout } from "./icargv.mjs";
import { NodeProps } from "./props.mjs";

const argvout = new Typevout({
    '{}' : a => { return { props:a[0],descendants:[] } },
    '[]' : a => { return { props:{},descendants:a[0] } },
    '{},[]' : a => { return { props:a[0],descendants:a[1] } },
    '[],[]' : a => { return { props:a[0],descendants:a[1] } },
    '$' : a => { return {props:{}, descendants:a[0] } },
    '{},$' : a => { return {props:a[0], descendants:a[1] } },
    'null' : a => { return { props:{}, descendants:[] } },
    '{},HTMLElement' : a => { return {props:a[0],descendants:[a[1]]} },
    'HTMLElement' : a => { return {props:{}, descendants: [a[0]]} },
    '?' : a => {throw new Error(a)}
});




export const externals = {
    insert(position,nodes){
        if (nodes == null) {
            nodes = position;
            position = "beforeend" 
        }
        nodes = new TypeConverter({ array : a => a, node : a => [a]})(nodes);
        for (const node of nodes){
            this.insertAdjacentElement(position,node); 
        }
    },
    setProperties(props){
        objEnforcer(props); 
        for (const propKey in props){
            const propVal = props[propKey]; 
            this.setProperty(propKey,propVal); 
        }
        return this; 
    },
    setProperty(key,val){
        if (config.autoSetAttrs){
            if (this[key] === undefined && typeof val === 'string'){
                this.setAttribute(key,val); 
            }
            else {
                this[key] = val; 
            }
        }
        else {
            if (key === "attributes" || key === "attrs"){
                this.attr(val); 
            }
            this[key] = val;
        }
        return this; 
    },
    setProps(props){
        if (props == null){
            return this.setProperties(this.props); 
        }
        this.props = new NodeProps(this,props);
        return this.setProperties(this.props) 
    },
    setSubtree(subtree){
        subtree = new TypeConverter({ array : a => a, node : a => [a], $ : a=>a})(subtree);
        if (isArr(subtree)){
            this.subtree = new Map();
            for (const desc of subtree){
                if (isFn(desc)){
                    const node = desc.call(this,this.props);
                    this.insert(node);
                    this.subtree.set(desc,node); 
                }
                else this.append(desc); 
            }
        }
        else if (isFn(subtree)){
            this.subtree = subtree; 
            const nodes = subtree.call(this,this.props); 
            this.insert(nodes);
        }
        return this; 
    },
    render(){
        if (this.subtree instanceof Map){
            for (const e of this.subtree){
                const [fn, node] = e; 
                const newNode = fn.call(this,this.props);
                node.replaceWith(newNode);
                this.subtree.set(fn,newNode); 
            }
        }
        else if (isFn(this.subtree)){
            this.innerHTML = ""; 
            const newSubtree = this.subtree.call(this,this.props); 
            this.insert(newSubtree); 
        }
        return this.setProperties(this.props); 
    },
    defaultCSS(){
        return defaultCSS.getDefaultCSS(this);; 
    }, 
    /* Event Methods */
    on(event,callback,options={}){
        event = event.split(' ');
        for (const e of event){
            this.addEventListener(e,callback,options);
        }
        return this; 
    }, 
    observe(callbacks={}){
        const config = {
            attributes : "attributes" in callbacks,
            childList : "childList" in callbacks,
            subtree : "subtree" in callbacks ? callbacks.subtree : false,
        };
        const targetNode = this;
        const callback = function(mutationsList, observer) {
            for(const mutation of mutationsList) {
                if ('childList' in callbacks && mutation.type === 'childList') {
                    callbacks.childList(mutation);
                }
                if ('attributes' in callbacks && mutation.type === 'attributes') {
                    callbacks.attributes(mutation);
                }
            }
        };
        const observer = new MutationObserver(callback)
        observer.observe(targetNode, config);
        if (this.observers) this.observers.push(observer)
        else this.observers = [observer]
        return this; 
    },
    clearListeners(clearChildren=false){
        if (clearChildren) {
            this.parentNode.replaceChild(this.cloneNode(true), this);
        }
        else {
            const clone = this.cloneNode(false);
            while (this.hasChildNodes()) this.appendChild(this.firstChild);
            this.parentNode.replaceChild(clone, this);
        }
    },
    /* Class Methods */
    addClass(...classes){
        this.classList.add(...classes);
        return this; 
    },
    removeClass(...classes){
        this.classList.remove(...classes);
        return this; 
    },
    replaceClass(...classes){
        this.classList.replace(...classes)
        return this; 
    },
    toggleClass(...classes){
        classes.forEach(c => this.classList.toggle(c))
        // this.classList.toggle(...classes)
        return this; 
    },
    shiftClass(...classes){
        document.querySelectorAll('*').forEach(node => node.classList.remove(...classes))
        this.addClass(...classes);
        return this; 
    },
    /* DOMString Methods */
    html(...DOMStrings){
        if (DOMStrings.length === 0){return this.innerHTML}
        this.innerHTML = DOMStrings.join(""); 
        return this; 
    },
    append(...DOMStrings){
        this.insertAdjacentHTML('beforeend',DOMStrings.join(""))
        return this; 
    },
    prepend(...DOMStrings){
        this.insertAdjacentHTML('afterbegin',DOMStrings.join(""))
        return this; 
    },
    before(...DOMStrings){
        this.insertAdjacentHTML('beforebegin',DOMStrings.join(""))
        return this; 
    },
    after(...DOMStrings){
        this.insertAdjacentHTML('afterend',DOMStrings.join(""))
        return this; 
    },
    txt(...text){
        if (text.length === 0){ return this.textContent }
        this.textContent = text.join(""); 
        return this; 
    },
    /*  Attribute */
    attr(name,value){
        if (isObj(name)){
            for (const a in name){
                this.setAttribute(a, name[a]); 
            }            
        }
        else if (name==null&&value==null){
            return this.attributes; 
        }
        else if (name && value==null){
            return this.getAttribute(name); 
        }
        else if (name && value){
            this.setAttribute(name,value); 
        }
        return this; 
    },
    toggleAttr(name,force){
        if (force==null){
            this.toggleAttribute(name)
        }
        else {
            this.toggleAttribute(name,force)
        }
        return this
    },
    removeAttr(name){
        this.removeAttribute(name);
        return this;  
    },
    val(value){
        if (value==null){
            return this.getAttribute('value'); 
        }
        this.setAttribute('value',value);
        return this; 
    },
    /*  Style Methods */
    css(cssObject){
        if (!cssObject){ return this.style}
        const styles = (analyzer.str(cssObject)) ? css.parse(cssObject) : cssObject; 
        for (const prop in styles){
            this.style[css.toDashed(prop)] = styles[prop]; 
        }
        return this; 
    },
    cssRevert(){
        this.css(this.defaultCSS()); 
        return this; 
    },
    x(xPosition){
        if (!xPosition){ return this.offsetLeft }
        this.style.left = xPosition;
        return this; 
    },
    y(yPosition){
        if (!yPosition){ return this.offsetLeft }
        this.style.top = yPosition;
        return this; 
    },
    position(){
        return {
            y : this.offsetTop,
            x : this.offsetLeft,
        }
    },
    size(){
        return {
            height : this.offsetHeight,
            width : this.offsetWidth,
        }
    },
    height(height){
        if (!height){ return this.offsetHeight }
        this.style.height = height;
        return this; 
    },
    width(width){
        if (!width){ return this.offsetWidth }
        this.style.width = width; 
        return this; 
    },
    /*  Query Methods */
    query(selectorString){
        return new $Query(this.querySelector(selectorString)); 
    },
    find(selectorString){
        return new $Query(this.querySelectorAll(selectorString));
    },
    parent(selectorString){
        if (selectorString){ return this.parentNode.matches(selectorString) }
        return new $Query(this.parentNode); 
    },
    ancestors(filter = (a) => true){
        const fn = (typeof filter === "string") ? a => a.matches(filter) : filter; 
        const ancestorNodes = []; 
        let currNode = this; 
        while(!(currNode instanceof Document)){
            ancestorNodes.push(currNode.parentNode); 
            currNode = currNode.parentNode; 
        }
        return ancestorNodes.filter(fn); 
    },
    childs(filter = (a) => true){
        const fn = (typeof filter === "string") ? a => a.matches(filter) : filter; 
        const children = []; 
        let currNode = this; 
        while(!(currNode instanceof Document)){
            children.push(currNode.parentNode); 
            currNode = currNode.parentNode; 
        }
        return children.filter(fn);
    },
    /* Booleans */
    inView(){
        const rect = this.getBoundingClientRect();
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
        const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
        const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
        return(vertInView && horInView);
    },
};

export class IntrinsicComponent {
    constructor(...argv){
        const node = document.createElement(this.constructor.name);  
        for (const a in externals){
            if (node[a] === undefined){
                node[a] = externals[a]; 
            }
        }
        const {props,descendants} = argvout(argv);
        node.setProps(props).setSubtree(descendants);
        return node;
    }
}

export default IntrinsicComponent
