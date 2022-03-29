import Root from "./root.mjs";

export default class Template {
    constructor(template){
        this.template = template;
        this.root = new Root('body');  
    }
    render(props,insert="append"){
        const node = this.renderTemplate(props);
        this.root.clear(); 
        this.root[insert](node);
        return node; 
    }
    renderTemplate(props){
        return this.template(props); 
    }
    setRoot(query='body'){
        this.root = new Root(query);
        return this; 
    }
}