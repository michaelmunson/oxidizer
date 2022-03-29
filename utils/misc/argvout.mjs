import analyzer, {isArr,isFn,isObj,typev} from "./analyze.mjs"
import Type, { arrEnforcer, TypeEnforcer } from "./type.mjs"

const mapTypeNames = (obj) => {
    const newObj = {}
    const keyMap = {
        '[]' : 'array',
        '{}' : 'Object',
        '$' : 'function',
        'fn' : 'function',
        'object' : 'Object',
        'obj' : 'Object',
        'node' : 'HTMLElement'
    }
    Object.entries(obj).forEach(entry => {
        let [key,val] = entry; 
        for (const k in keyMap){
            key = key.replaceAll(k, keyMap[k]);
        }
        newObj[key.replaceAll(' ','')] = val; 
    })
    return newObj; 
}

export class Argvout {
    constructor(converter){
        this.converter = converter; 
        return this.out.bind(this); 
    }
    out(args){
        arrEnforcer(args)
        return this.converter[args.length](args)
    }
}


export default Argvout; 