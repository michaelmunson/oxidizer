import { DeepProxy, isObj, nodeEnforcer } from "../../utils/utils.mjs";


export class NodeProps {
    constructor(node,object){
        nodeEnforcer(node); 
        const handler = {
            node,
            set(target,key,value){
                if (JSON.stringify(target[key]) === JSON.stringify(value)){
                    return true; 
                }
                if (isObj(value)){
                    value = new DeepProxy(value,handler)
                }
                target[key] = value; 
                this.node.render(); 
                return true;
            }
        }
        const props = new DeepProxy(object,handler);  
        node.props = props; 
        return props;
    }
}