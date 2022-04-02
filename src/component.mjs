import { Str, Obj, Assigner } from "../utils/utils.mjs";
import { externals } from "./intrinsics/intrinsicComponent.mjs";

export function CustomElement(name,fns){
    name = new Str(name).camelCaseToDashed().toString();
    if (name.startsWith("-")) name = name.slice(1);  
    return document.createElement(name);
}

export class Component {
    constructor(props={}){
        Obj.enforce(props);
        this.props = props;
        this.root = CustomElement(this.constructor.name);
        new Assigner(externals)(this.root);
        this.root.setProps(this.props).setDescs(this.render); 
        return this.root;
    }
}

export default Component;
