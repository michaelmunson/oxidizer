


export class StylerElementGroup extends HTMLElement {
    
    constructor() {
        super();
        this.stylers = new Map();
    }
    connectedCallback() {
        if (document.querySelectorAll(StylerElementGroup.tagName) > 1) this.remove();
        this.createStyleElement('ox-imports'); 
        this.createStyleElement('ox-keyframes'); 
    }
    disconnectedCallback(){
        console.log(this); 
    }
    
    static init(){
        if (!document.querySelector('head')){
            document.querySelector('html').prepend(document.createElement('head'))
        }
        document.querySelector('head').insertAdjacentHTML('beforeend', `<${StylerElementGroup.tagName}></${StylerElementGroup.tagName}>`)
    }
    static get tagName(){return "styler-group"}
    static get find(){
        return $(StylerElementGroup.tagName)
    }

    
}
