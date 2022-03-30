
import { analyzer, isNode, isNum, isStr, strEnforcer } from "../utils/utils.mjs";
import {css, styleElementMethods} from "./styler/css.mjs";
/**
     * @param {}  
     * @returns {HTMLElement} 
    */
const nodeMethods = {
    defaultCSS(){
        return defaultCSS.getDefaultCSS(this);; 
    }, 
    /** 
     * @param {string} event - event string (i.e. "click")  
     * @param {function} callback - event string (i.e. "click") 
     * @param {object} options - listener options
     * @tutorial https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
     * @returns {HTMLElement}
    */
    on(event,callback,options={}){
        event = event.split(' ');
        for (const e of event){
            this.addEventListener(e,callback,options);
        }
        return this; 
    }, 
    /** 
     * @param {object} callbacks - Functions for MutationObserver
     * @tutorial https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
     * @returns {HTMLElement}
    */
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
    /**
     * @param {boolean} clearChildren - remove listeners from children ?  
     * @returns {HTMLElement} 
    */
    clearListeners(clearChildren=false){
        if (clearChildren) {
            this.parentNode.replaceChild(this.cloneNode(true), this);
        }
        else {
            const clone = this.cloneNode(false);
            while (this.hasChildNodes()) this.appendChild(this.firstChild);
            this.parentNode.replaceChild(clone, this);
        }
        return this
    },
    /**
     * @param {string | array } classes - string or list of strings to add    
     * @returns {HTMLElement} 
    */
    addClass(...classes){
        const cleaned = []
        for (const cls of classes) cleaned.push(...cls.split(" "))
        this.classList.add(...cleaned);
        return this; 
    },
    /**
     * @param {...string | array } classes - string or list of strings to remove   
     * @returns {HTMLElement} 
    */
    removeClass(...classes){
        const cleaned = []
        for (const cls of classes) cleaned.push(...cls.split(" "))
        this.classList.remove(...cleaned);
        return this; 
    },
    /**
     * @param {string | array } classOld - String or list of strings to replace
     * @param {string} classNew - String to replace classOld
     * @returns {HTMLElement} 
    */
    replaceClass(classOld,classNew){
        this.classList.replace(classOld,classNew)
        return this; 
    },
    /**
     * @param {string | array } - String or list of strings to toggle   
     * @returns {HTMLElement} 
    */
    toggleClass(...classes){
        const cleaned = []
        for (const cls of classes) cleaned.push(...cls.split(" "))
        for (const cls of cleaned) this.classList.toggle(cls);
        return this; 
    },
    /**
    * @description - Removes all classes from specified area, adds class to this 
    * @param {String | Array} classes
    * @param {String | Number} from - "*" to shift from all nodes, number specified number of ancestors to climb
    * @return {HTMLElement} 
    */    
    shiftClass(classes,from="*"){
        classes = classes.split(' ')
        if (from === "*"){
            document.querySelectorAll('*').forEach(node => node.classList.remove(...classes))
            this.addClass(...classes);
        }
        if (isNum(from)){
            let node = this;
            if (from < 0) from = from * -1; 
            for (let i = from; i > 0; i--){
                node = node.parentNode; 
            } 
            node.classList.remove(...classes);
            this.addClass(...classes);
        }
        return this; 
    },
    class(...classes){
        if (classes.length === 0) return this.classList
        const cleaned = []
        for (const cls of classes) cleaned.push(...cls.split(" "))
        for (const cls of cleaned){
            if (cls.startsWith("+")) this.addClass(cls.slice(1));
            else if (cls.startsWith("-")) this.removeClass(cls.slice(1));
            else if (cls.startsWith("?")) this.toggleClass(cls.slice(1));
            else if (cls.startsWith("!")) this.shiftClass(cls.slice(1));
        }
        return this; 
    },
    /**
     * @description - renders HTMLElements
     * @param {...string} nodes 
     * @returns {HTMLElement} 
    */
    render(...nodes){
        this.html(); 
        nodes.forEach(node => this.append(node))
    },
    /**
     * @description - this.innerHTML = (DOMStrings)
     * @param {...string} DOMStrings 
     * @returns {HTMLElement} 
    */
    html(...DOMStrings){
        if (DOMStrings.length === 0){return this.innerHTML}
        this.innerHTML = DOMStrings.join(""); 
        return this; 
    },
    /**
     * @description - this.insertAdjacentHTML("afterbegin",DOMStrings)
     * @param {...string} DOMStrings 
     * @returns {HTMLElement} 
    */
    prepend(...DOMStrings){
        this.insertAdjacentHTML('afterbegin',DOMStrings.join(""))
        return this; 
    },
    /**
     * @description - this.insertAdjacentHTML("beforebegin",DOMStrings)
     * @param {...string} DOMStrings 
     * @returns {HTMLElement} 
    */
    before(...DOMStrings){
        this.insertAdjacentHTML('beforebegin',DOMStrings.join(""))
        return this; 
    },
    /**
     * @description - this.insertAdjacentHTML("afterend",DOMStrings)
     * @param {...string} DOMStrings 
     * @returns {HTMLElement} 
    */
    after(...DOMStrings){
        this.insertAdjacentHTML('afterend',DOMStrings.join(""))
        return this; 
    },
    /**
     * @description - this.textContent = (DOMStrings)
     * @param {...string} DOMStrings 
     * @returns {HTMLElement} 
    */
    txt(...text){
        if (text.length === 0){ return this.textContent }
        this.textContent = text.join(""); 
        return this; 
    },
    /**
     * @description - this.setAttribute(name,value)
     * @param {string} name - attribute name (optional)
     * @param {string} value - attribute value (optional)
     * @returns {NamedNodeMap | String | HTMLElement} - NamedNodeMap if 0 args, attribute value if 1 arg, this if 2 args
    */
    attr(name,value){
        if (name==null&&value==null){
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
    /**
     * @description - this.toggleAttribute(name,force)
     * @param {string} name - attribute name to toggle 
     * @param {boolean} force - attribute value (optional) (default = true)
     * @returns {HTMLElement} - return this
    */
    toggleAttr(name,force=true){
        this.toggleAttribute(name,force)
        return this
    },
    /**
     * @description - this.removeAttribute(name)
     * @param {string} name - attribute name to remove 
     * @returns {HTMLElement} - return this
    */
    removeAttr(name){
        this.removeAttribute(name);
        return this;  
    },
    /**
     * @description - this.value = value
     * @param {string} value - attribute name to remove 
     * @returns {string | HTMLElement} - return this.value if 0 args, or this if 1 arg
    */
    val(value){
        if (value==null){
            return this.getAttribute('value'); 
        }
        this.setAttribute('value',value);
        return this; 
    },
    /**
     * @param {object | string} cssObject - object of cssProperty:value pairs or css string
     * @returns {HTMLElement} 
    */
    css(cssObject){
        if (!cssObject){ return this.style}
        const styles = (analyzer.str(cssObject)) ? css.parse(cssObject) : cssObject; 
        for (const prop in styles){
            this.style[css.toDashed(prop)] = styles[prop]; 
        }
        return this; 
    },
    /**
     * @description reverts an elements css to its orignal css
     * @returns {HTMLElement} 
    */
    cssRevert(){
        this.css(this.defaultCSS()); 
        return this; 
    },
    /**
     * @description xPosition? this.style.left = xPosition : this.offsetLeft
     * @param {number} xPosition (optional)
    * @returns {number | HTMLElement} returns number if no arg provided
    */
    x(xPosition){
        if (!xPosition){ return this.offsetLeft }
        this.style.left = xPosition;
        return this; 
    },
    /**
     * @description yPosition? this.style.top = yPosition : this.offsetTop
     * @param {number} yPosition (optional)
     * @returns {number | HTMLElement} returns number if no arg provided
    */
    y(yPosition){
        if (!yPosition){ return this.offsetLeft }
        this.style.top = yPosition;
        return this; 
    },
    /**
     * @description height? this.style.height = height : this.offsetHeight
     * @param {number} yPosition (optional)
     * @returns {number | HTMLElement} returns number if no arg provided
    */
    height(height){
        if (!height){ return this.offsetHeight }
        this.style.height = height;
        return this; 
    },
    /**
     * @description height? this.style.width = width : this.offsetWidth
     * @param {number} yPosition (optional)
     * @returns {number | HTMLElement} returns number if no arg provided
    */
    width(width){
        if (!width){ return this.offsetWidth }
        this.style.width = width; 
        return this; 
    },
    /**
     * @description height? this.style.height = height : this.offsetHeight
     * @param {number} yPosition (optional)
     * @returns {number | HTMLElement} returns number if no arg provided
    */
    h(height){
        if (!height){ return this.offsetHeight }
        this.style.height = height;
        return this; 
    },
    /**
     * @description height? this.style.width = width : this.offsetWidth
     * @param {number} yPosition (optional)
     * @returns {number | HTMLElement} returns number if no arg provided
    */
    w(width){
        if (!width){ return this.offsetWidth }
        this.style.width = width; 
        return this; 
    },
    /**
     * @returns {object} returns { top, left, height, width }
    */
    offset(){
        return {
            top : this.offsetTop,
            left : this.offsetLeft,
            height : this.offsetHeight,
            width : this.offsetWidth, 
        }
    },
    /**
     * @description wrapper for this.querySelector
     * @param {string} selectorString
     * @returns {Query}
    */
    find(selectorString){
        return new Query(this.querySelector(selectorString)); 
    },
    /**
     * @description wrapper for this.querySelectorAll
     * @param {string} selectorString
     * @param {function} filter filter for returned nodes
     * @returns {Query}
    */
    findAll(selectorString, filter=a=>true){
        if (isStr(filter)) filter = q => q.matches(filter); 
        return $(this.querySelectorAll(selectorString))
    },
    /**
     * @description wrapper for this.parentNode
     * @returns {HTMLElement} 
    */
    parent(){
        return new Query(this.parentNode); 
    },
    /**
     * @description array of ancestors up till :root
     * @param {function | string} filter filter for array, if string, filter is (str=str) => this.matches(str) 
     * @returns {HTMLElement} 
    */
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
    /**
     * @description array of children
     * @param {object} options valid option properties are filter & textNode
     * @paramdesc filter is function that filters the array, textNode is a boolean for whether or not to include text nodes
     * @returns {HTMLElement} 
    */
    childs(options){
        options = {filter:node=>true, textNode:false, ...options}
        filter = options.filter;
        if (isStr(filter)) options.filter = node => node.matches(filter);  
        let children = [...this.childNodes]; 
        if (!options.textNode) children = children.filter(node => node.nodeName !== "#text");
        return children.filter(node => options.filter.call(node,node)).map(n => $(n));
    },
    /**
     * @description returns boolean indicating whether this is in the visible window
     * @returns {boolean} 
    */
    inView(){
        const rect = this.getBoundingClientRect();
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
        const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
        const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
        return(vertInView && horInView);
    },
    
}
const specialNodeMethods = {
    "style" : styleElementMethods
}

export const defaultCSS = {
    getDefaultCSS(element){
        let defCSS = {}
        Object.entries(this).forEach(e => {
            const [selector,val] = e; 
            if (element.matches(selector)){
                defCSS = {...defCSS,...val}
            }
        })
        const o = {}
        const styles = element.style;
        for (const prop in styles){
            if (isNaN(prop) && styles[prop] && isStr(styles[prop])) defCSS[prop] = styles[prop]
        }
        return defCSS; 
    }
}

/**
 * @class 
 * @param { ... String | ... HTMLElement } nodes - Takes String or HTMLElement 
 * @classdesc Wrapper class for HTMLElement... basically homemade JQuery
*/


export class Query extends Array {    
    constructor(...nodes){
        super()
        nodes
        .map(node => (typeof node === "string") ? document.querySelectorAll(node) : node)
        .map(node => (node instanceof NodeList) ? [...node] : node)
        .map(node => Array.isArray(node) ? node : [node])
        .forEach(nodes => {
            nodes.forEach(node => {
                if (node.tagName.toLowerCase() in specialNodeMethods){
                    const specMethds = specialNodeMethods[node.tagName.toLowerCase()]
                    for (const i in specMethds) {
                        if (isNode(node))
                        if (node[i] === undefined) node[i] = specMethds[i]
                    }
                }
                for (const i in nodeMethods) {
                    if (isNode(node))
                    if (node[i] === undefined) node[i] = nodeMethods[i]
                }
                this.push(node);
            });
        });
        if (this.length === 1){
            return this[0]; 
        }
    }
    map(f){
        const n = []; 
        this.forEach(node => n.push(f.call(node,node)));
        return n; 
    }
    render(...nodes){
        this.forEach(node => node.render.apply(node, nodes))
    }
    /** 
     * @param {string} event - event string (i.e. "click")  
     * @param {function} callback - event string (i.e. "click") 
     * @param {object} options - listener options
     * @tutorial https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
     * @returns {HTMLElement}
    */
    on(event,callback,options){
        this.forEach(node => node.on.apply(node,[event,callback,options]))
        return this;  
    }
    /** 
     * @param {object} callbacks - Functions for MutationObserver
     * @tutorial https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
     * @returns {HTMLElement}
    */
    observe(observerConfig={attributes : mutation => mutation,childList : mutation => mutation,subtree : mutation => mutation }){
        this.forEach(node => node.observe.apply(node,[observerConfig]))
        return this; 
    }
    /**
     * @param {boolean} clearChildren - remove listeners from children ?  
     * @returns {HTMLElement} 
    */
    clearListeners(clearChildren=false){
        this.forEach(node => node.clearListeners.apply(node,[]))
        return this;
    }
    /**
     * @param {string | array } classes - string or list of strings to add    
     * @returns {HTMLElement} 
    */
    addClass(...classes){
        this.forEach(node => node.addClass.apply(node,[...classes]))
        return this; 
    }
    /**
     * @param {string | array } classes - string or list of strings to add    
     * @returns {HTMLElement | Map} 
    */
    class(...classes){
        if (classes.length === 0){
            const m = new Map(); 
            this.forEach(node => m.set(node, node.class.apply(node,[...classes])))
            return m; 
        }
        this.forEach(node => node.addClass.apply(node,[...classes]))
        return this; 
    }
    /**
     * @param {...string | array } classes - string or list of strings to remove   
     * @returns {HTMLElement} 
    */
    removeClass(...classes){
        this.forEach(node => node.removeClass.apply(node,[...classes]))
        return this; 
    }
    /**
     * @param {string | array } classOld - String or list of strings to replace
     * @param {string} classNew - String to replace classOld
     * @returns {HTMLElement} 
    */
    replaceClass(...classes){
        this.forEach(node => node.replaceClass.apply(node,[...classes]))
        return this; 
    }
    /**
     * @param {string | array } - String or list of strings to toggle   
     * @returns {HTMLElement} 
    */
    toggleClass(...classes){
        this.forEach(node => node.toggleClass.apply(node,[...classes]))
        return this; 
    }
    /**
    * @description - Removes all classes from specified area, adds class to this 
    * @param {String | Array} classes
    * @param {String | Number} from - "*" to shift from all nodes, number specified number of ancestors to climb
    * @return {HTMLElement} 
    */    
    // shiftClass(...classes){
    //     this.forEach(node => node.shiftClass.apply(node,[...classes]))
    //     return this; 
    // }
    /**
     * @description - this.insertAdjacentHTML("beforeend",DOMStrings)
     * @param {...string} DOMStrings 
     * @returns {HTMLElement} 
    */
    html(...DOMStrings){
        if (DOMStrings.length > 0) {
            this.forEach(node => node.html.apply(node,[...DOMStrings]))
            return this;
        }  
        else {
            const m = new Map(); 
            this.forEach(node => m.set(node, node.html.call(node)));
            return m; 
        }
    }
    /**
     * @description - this.insertAdjacentHTML("beforeend",DOMStrings)
     * @param {...string} DOMStrings 
     * @returns {HTMLElement} 
    */
    append(...DOMStrings){
        this.forEach(node => node.append.apply(node,[...DOMStrings]))
        return this;  
    }
    /**
     * @description - this.insertAdjacentHTML("afterbegin",DOMStrings)
     * @param {...string} DOMStrings 
     * @returns {HTMLElement} 
    */
    prepend(...DOMStrings){
        this.forEach(node => node.prepend.apply(node,[...DOMStrings]))
        return this;  
    }
    /**
     * @description - this.insertAdjacentHTML("beforebegin",DOMStrings)
     * @param {...string} DOMStrings 
     * @returns {HTMLElement} 
    */
    before(...DOMStrings){
        this.forEach(node => node.before.apply(node,[...DOMStrings]))
        return this;  
    }
    /**
     * @description - this.insertAdjacentHTML("afterend",DOMStrings)
     * @param {...string} DOMStrings 
     * @returns {HTMLElement} 
    */
    after(...DOMStrings){
        this.forEach(node => node.after.apply(node,[...DOMStrings]))
        return this;  
    }
    /**
     * @description - this.textContent = (DOMStrings)
     * @param {...string} DOMStrings 
     * @returns {HTMLElement} 
    */
    txt(...text){
        if (DOMStrings.length > 0) {
            this.forEach(node => node.txt.apply(node,[...DOMStrings]))
            return this;
        }  
        else {
            const m = new Map(); 
            this.forEach(node => m.set(node, node.txt.call(node)));
            return m; 
        }
    }
    /**
     * @description - this.setAttribute(name,value)
     * @param {string} name - attribute name (optional)
     * @param {string} value - attribute value (optional)
     * @returns {NamedNodeMap | String | HTMLElement} - NamedNodeMap if 0 args, attribute value if 1 arg, this if 2 args
    */
    attr(name,value){
        if (!name){
            const m = new Map(); 
            this.forEach(node => m.set(node, node.attr.call(node,[]))); 
            return m; 
        }
        else if (!value){
            const m = new Map(); 
            this.forEach(node => m.set(node, node.attr.call(node,[name]))); 
            return m; 
        }
        this.forEach(node => node.attr.apply(node,[name,value]))
        return this;  
    }
    /**
     * @description - this.toggleAttribute(name,force)
     * @param {string} name - attribute name to toggle 
     * @param {boolean} force - attribute value (optional) (default = true)
     * @returns {HTMLElement} - return this
    */
    toggleAttr(name,force=false){
        this.forEach(node => node.toggleAttr.apply(node,[name,force]))
        return this; 
    }
    /**
     * @description - this.removeAttribute(name)
     * @param {string} name - attribute name to remove 
     * @returns {HTMLElement} - return this
    */
    removeAttr(name){
        this.forEach(node => node.removeAttr.apply(node,[name]))
        return this;  
    }
    /**
     * @description - this.value = value
     * @param {string} value - attribute name to remove 
     * @returns {string | HTMLElement} - return this.value if 0 args, or this if 1 arg
    */
    val(value){
        if (!value){
            const m = new Map(); 
            this.forEach(node => m.set(node, node.val.call(node,[]))); 
            return m;
        }
        this.forEach(node => node.val.apply(node,[value]))
        return this;  
    }
    /**
     * @param {object | string} cssObject - object of cssProperty:value pairs or css string
     * @returns {HTMLElement} 
    */
    css(cssObject){
        this.forEach(node => node.css.apply(node,[cssObject]))
        return this; 
    }
    /**
     * @description reverts an elements css to its orignal css
     * @returns {HTMLElement} 
    */
    cssRevert(){
        this.forEach(node => node.cssRevert.apply(node,[]))
        return this; 
    }
    /**
     * @description xPosition? this.style.left = xPosition : this.offsetLeft
     * @param {number} xPosition (optional)
    * @returns {number | HTMLElement} returns number if no arg provided
    */
    x(xPosition){
        if (!xPosition){
            const m = new Map();
            this.forEach(node => m.set(node, node.offsetLeft))
            return m 
        }
        this.forEach(node => node.x.apply(node,[xPosition]))
        return this; 
    }
    /**
     * @description yPosition? this.style.top = yPosition : this.offsetTop
     * @param {number} yPosition (optional)
     * @returns {number | HTMLElement} returns number if no arg provided
    */
    y(yPosition){
        if (!yPosition){
            const m = new Map();
            this.forEach(node => m.set(node, node.offsetTop))
            return m 
        }
        this.forEach(node => node.y.apply(node,[yPosition]))
        return this; 
    }
    /**
     * @description height? this.style.height = height : this.offsetHeight
     * @param {number} yPosition (optional)
     * @returns {number | HTMLElement} returns number if no arg provided
    */
    h(height){
        if (!height){
            const m = new Map();
            this.forEach(node => m.set(node, node.offsetHeight))
            return m 
        }
        this.forEach(node => node.height.apply(node,[height]))
        return this; 
    }
    /**
     * @description height? this.style.width = width : this.offsetWidth
     * @param {number} yPosition (optional)
     * @returns {number | HTMLElement} returns number if no arg provided
    */
    w(width){
        if (!width){
            const m = new Map();
            this.forEach(node => m.set(node, node.offsetWidth))
            return m 
        }
        this.forEach(node => node.width.apply(node,[width]))
        return this; 
    }
    /**
     * @description height? this.style.height = height : this.offsetHeight
     * @param {number} yPosition (optional)
     * @returns {number | HTMLElement} returns number if no arg provided
    */
    height(height){
        if (!height){
            const m = new Map();
            this.forEach(node => m.set(node, node.offsetHeight))
            return m 
        }
        this.forEach(node => node.height.apply(node,[height]))
        return this; 
    }
    /**
     * @description height? this.style.width = width : this.offsetWidth
     * @param {number} yPosition (optional)
     * @returns {number | HTMLElement} returns number if no arg provided
    */
    width(width){
        if (!width){
            const m = new Map();
            this.forEach(node => m.set(node, node.offsetWidth))
            return m 
        }
        this.forEach(node => node.width.apply(node,[width]))
        return this; 
    }
    offset(){
        const m = new Map()
        this.forEach(node => m.set(node, node.offset.apply(node,[])));
        return m; 
    }
    /**
     * @description wrapper for this.querySelector
     * @param {string} selectorString
     * @returns {Query}
    */
    find(selectorString){
        const m = new Map(); 
        this.forEach(node => {
            m.set(node, node.find.apply(node,[selectorString, filter]))
        })
        return this; 
    }
    /**
     * @description wrapper for this.querySelectorAll
     * @param {string} selectorString
     * @param {function} filter filter for returned nodes
     * @returns {Query}
    */
    findAll(selectorString, filter = a => true){
        const m = new Map(); 
        this.forEach(node => {
            m.set(node, node.findAll.apply(node,[selectorString, filter]))
        })
        return this; 
    }
    /**
     * @description wrapper for this.parentNode
     * @returns {HTMLElement} 
    */
    parent(){
        const m = new Map();
        this.forEach(node => m.set(node, node.parent.apply(node,[])))
        return m;
    }
    /**
     * @description array of ancestors up till :root
     * @param {function | string} filter filter for array, if string, filter is (str=str) => this.matches(str) 
     * @returns {HTMLElement} 
    */
    ancestors(filter = (a) => true){
        const m = new Map();
        this.forEach(node => m.set(node, node.ancestors.apply(node,[filter])))
        return m;  
    }
    /**
     * @description array of children
     * @param {function | string} filter filter for children array , if string, filter is (str=str) => child.matches(str) 
     * @returns {HTMLElement} 
    */
    childs(options){
        options = {filter:node=>true, textNode:false, ...options}
        const m = new Map();
        this.forEach(node => m.set(node, node.childs.apply(node,[options])))
        return m;
    }
    /**
     * @description returns boolean indicating whether this is in the visible window
     * @returns {boolean} 
    */
    inView(){
        const m = new Map();
        this.forEach(node => m.set(node, node.inView.apply(node,[])))
        return m;
    }
    /**
     * @description returns boolean indicating whether this is in the visible window
     * @returns {boolean} 
    */
    animations(){
        const m = new Map();
        this.forEach(node => m.set(node, node.getAnimations.apply(node,[])))
        return m; 
    } 

/********  EXTENSIONS ************/
/*
    const m = new Map()
    this.forEach(node => m.set(node, node..apply(node,[...args])));
    return m; 
*/    
    closest(filter = (a) => true){
        const m = new Map()
        this.forEach(node => {
            console.log(node.closest)
            m.set(node, node.closest.apply(node,[filter]))
        });
        return m; 
    }
    matches(selectorString){
        const m = new Map()
        this.forEach(node => m.set(node, node.matches.apply(node,[selectorString])));
        return m; 
    }
    scroll(...args){
        this.forEach(node => node.scroll.apply(node,[...args]))
        return this;
    }
    scrollBy(...args){
        this.forEach(node => node.scrollBy.apply(node,[...args]))
        return this;
    }
    scrollIntoView(...args){
        this.forEach(node => node.scrollIntoView.apply(node,[...args]))
        return this;
    }
    scrollIntoViewIfNeeded(...args){
        this.forEach(node => node.scrollIntoViewIfNeeded.apply(node,[...args]))
        return this;
    }
    scrollTo(...args){
        this.forEach(node => node.scrollTo.apply(node,[...args]))
        return this;
    }
    animate(...args){
        const m = new Map()
        this.forEach(node => m.set(node, node.animate.apply(node,[...args])));
        return m; 
    }   
    attachShadow(...args){
        this.forEach(node => node.attachShadow.apply(node,[...args]))
        return this;
    }
    closest(...args){
        const m = new Map()
        this.forEach(node => m.set(node, node.closest.apply(node,[...args])));
        return m; 
    }
    computedStyleMap(...args){
        const m = new Map()
        this.forEach(node => m.set(node, node.computedStyleMap.apply(node,[...args])));
        return m; 
    }
    createShadowRoot(...args){
        this.forEach(node => node.createShadowRoot.apply(node,[...args]))
        return this;
    }
    getAnimations(...args){
        const m = new Map()
        this.forEach(node => m.set(node, node.getAnimations.apply(node,[...args])));
        return m; 
    }
    getAttribute(...args){
        const m = new Map()
        this.forEach(node => m.set(node, node.getAttribute.apply(node,[...args])));
        return m; 
    }
    getAttributeNames(...args){
        const m = new Map()
        this.forEach(node => m.set(node, node.getAttributeNames.apply(node,[...args])));
        return m; 
    }
    getAttributeNode(...args){
        const m = new Map()
        this.forEach(node => m.set(node, node.getAttributeNode.apply(node,[...args])));
        return m; 
    }
    getAttributeNodeNS(...args){
        this.forEach(node => node.getAttributeNodeNS.apply(node,[...args]))
        return this;
    }
    getAttributeNS(...args){
        const m = new Map()
        this.forEach(node => m.set(node, node.getAttributeNS.apply(node,[...args])));
        return m; 
    }
    getBoundingClientRect(...args){
        const m = new Map()
        this.forEach(node => m.set(node, node.getBoundingClientRect.apply(node,[...args])));
        return m; 
    }
    getClientRects(...args){
        const m = new Map()
        this.forEach(node => m.set(node, node.getClientRects.apply(node,[...args])));
        return m; 
    }
    getElementsByClassName(...args){
        const m = new Map()
        this.forEach(node => m.set(node, node.getElementsByClassName.apply(node,[...args])));
        return m; 
    }
    getElementsByTagName(...args){
        const m = new Map()
        this.forEach(node => m.set(node, node.getElementsByTagName.apply(node,[...args])));
        return m; 
    }
    getElementsByTagNameNS(...args){
        const m = new Map()
        this.forEach(node => m.set(node, node.getElementsByTagNameNS.apply(node,[...args])));
        return m; 
    }
    hasAttribute(...args){
        const m = new Map()
        this.forEach(node => m.set(node, node.hasAttributes.apply(node,[...args])));
        return m; 
    }
    hasAttributeNS(...args){
        const m = new Map()
        this.forEach(node => m.set(node, node.hasAttributeNS.apply(node,[...args])));
        return m; 
    }
    hasAttributes(...args){
        const m = new Map()
        this.forEach(node => m.set(node, node.hasAttributes.apply(node,[...args])));
        return m; 
    }
    hasPointerCapture(...args){
        const m = new Map()
        this.forEach(node => m.set(node, node.hasPointerCapture.apply(node,[...args])));
        return m; 
    }
    insertAdjacentElement(...args){
        this.forEach(node => node.insertAdjacentElement.apply(node,[...args]))
        return this;
    }
    insertAdjacentHTML(...args){
        this.forEach(node => node.insertAdjacentHTML.apply(node,[...args]))
        return this;
    }
    insertAdjacentText(...args){
        this.forEach(node => node.insertAdjacentText.apply(node,[...args]))
        return this;
    }
    msZoomTo(...args){
        this.forEach(node => node.msZoomTo.apply(node,[...args]))
        return this;
    }
    querySelector(query){
        const m = new Map()
        this.forEach(node => m.set(node, node.querySelector.apply(node,[...args])));
        return m; 
    }
    querySelectorAll(query){
        const m = new Map()
        this.forEach(node => m.set(node, node.querySelectorAll.apply(node,[...args])));
        return m; 
    }
    releasePointerCapture(...args){
        this.forEach(node => node.releasePointerCapture.apply(node,[...args]))
        return this;
    }
    removeAttribute(...args){
        this.forEach(node => node.removeAttribute.apply(node,[...args]))
        return this;
    }
    removeAttributeNode(...args){
        this.forEach(node => node.removeAttributeNode.apply(node,[...args]))
        return this;
    }
    removeAttributeNS(...args){
        this.forEach(node => node.removeAttributeNS.apply(node,[...args]))
        return this;
    }
    replaceChildren(...args){
        this.forEach(node => node.replaceChildren.apply(node,[...args]))
        return this;
    }
    replaceWith(...args){
        this.forEach(node => node.replaceWith.apply(node,[...args]))
        return this;
    }
    requestFullscreen(...args){
        this.forEach(node => node.requestFullscreen.apply(node,[...args]))
        return this;
    }
    requestPointerLock(...args){
        this.forEach(node => node.requestPointerLock.apply(node,[...args]))
        return this;
    }
    scrollBy(...args){
        this.forEach(node => node.scrollBy.apply(node,[...args]))
        return this;
    }
    scrollIntoViewIfNeeded(...args){
        this.forEach(node => node.scrollIntoViewIfNeeded.apply(node,[...args]))
        return this;
    }
    scrollTo(...args){
        this.forEach(node => node.scrollTo.apply(node,[...args]))
        return this;
    }
    setAttribute(...args){
        this.forEach(node => node.setAttribute.apply(node,[...args]))
        return this;
    }
    setAttributeNode(...args){
        this.forEach(node => node.setAttributeNode.apply(node,[...args]))
        return this;
    }
    setAttributeNodeNS(...args){
        this.forEach(node => node.setAttributeNodeNS.apply(node,[...args]))
        return this;
    }
    setAttributeNS(...args){
        this.forEach(node => node.setAttributeNS.apply(node,[...args]))
        return this;
    }
    setCapture(...args){
        this.forEach(node => node.setCapture.apply(node,[...args]))
        return this;
    }
    setHTML(...args){
        this.forEach(node => node.setHTML.apply(node,[...args]))
        return this;
    }
    setPointerCapture(...args){
        this.forEach(node => node.setPointerCapture.apply(node,[...args]))
        return this;
    }
    toggleAttribute(...args){
        this.forEach(node => node.toggleAttribute.apply(node,[...args]))
        return this;
    }
}

export const $ = (query) => new Query(query);

Object.defineProperties($, {
    head : {
        get(){
            return $('head'); 
        }
    },
    body : {
        get(){
            return $('body'); 
        }
    },
    new : {
        get(){
            return function(string){
                strEnforcer(string);
                const node = document.createElement(string);
                if (node.tagName.toLowerCase() in specialNodeMethods){
                    const specMethds = specialNodeMethods[node.tagName.toLowerCase()]
                    for (const i in specMethds) {
                        if (isNode(node))
                        if (node[i] === undefined) node[i] = specMethds[i]
                    }
                }
                for (const f in nodeMethods){
                    if (node[f] === undefined) node[f] = nodeMethods[f]
                } 
                return node; 
            }
        }
    },
    create : {
        get(){
            return this.new;
        }
    },
    exists : {
        get(){
            return function(query){
                return document.querySelectorAll(query).length > 0
            }
        }
    }
})
 
 

export default $; 