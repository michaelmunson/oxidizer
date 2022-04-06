import { DeepProxy, isArr, isObj, nodeEnforcer } from '../../utils/utils.mjs'

export class Props {
    constructor (node, object) {
        nodeEnforcer(node)
        const handler = {
            node,
            set (target, key, value) {
                if (JSON.stringify(target[key]) === JSON.stringify(value)) {
                    return true
                }
                if (isObj(value) || isArr(value)) {
                    value = new DeepProxy(value, handler)
                }
                target[key] = value;
                // node.setProperty(key, value);
                this.node.render();
                return true
            }
        }
        const props = new DeepProxy(object, handler);
        return props
    }
}

export default Props
