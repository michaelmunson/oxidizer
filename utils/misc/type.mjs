import {analyzer, isFn, isStr, typev} from "./analyze.mjs";

const mapTypeName = (str) => {
    const keyMap = {
        '[]' : 'array',
        '{}' : 'Object',
        '$' : 'function',
        'fn' : 'function',
        'object' : 'Object',
        'obj' : 'Object',
        'Array':'array',
        'node' : 'HTMLElement'
    }
    for (const key in keyMap){
        str = str.replaceAll(key,keyMap[key])
    }
    return str; 
}
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

export class Type {
    constructor(...types){ 
        this.types = types.map(type => mapTypeName(isFn(type)?type.name:type))
    }
    isType(...objects){
        let passes = false; 
        for (const type of this.types){
            for (const object of objects){
                if (analyzer.type(object) === type){
                    passes = true; 
                }
            }
        }
        return passes; 
    }
    enforce(...objects){
        for (const object of objects){
            let passed = this.isType(object)
            if (!passed){
                throw new TypeError(`Expected type ${this.types}; got ${analyzer.type(object)}`);
            }
        }
    }
}

export class Typevout {
    constructor(argMap){
        this.mapper = mapTypeNames(argMap);
        return this.map.bind(this);  
    }
    map(args){
        const argmap = this.mapper;
        new TypeEnforcer(Array)(args)
        if (args.length === 0){
            args = [null]
        }
        const tv = typev(args);
        for (let v in argmap){
            const vs = v.split(','); 
            for (let i in vs){
                if (vs[i]==="*"){
                    vs[i] = tv[i]; 
                }
                else if (vs[i]==="...*"){
                    vs[i].push(tv.slice(i)); 
                }
            }
            argmap[vs] = argmap[v]; 
        }
        const tvs = tv.join(",");
        if (tvs in argmap){
            return argmap[tvs](args); 
        }
        else if ((tvs+",") in argmap){
            return argmap[tvs+','](args)
        }
        return argmap["?"](args); 

    }
}

export class TypeEnforcer extends Type {
    constructor(...types){
        super(...types)
        return this.enforce.bind(this); 
    }
}
export class TypeConverter {
    constructor(converterObject){
        this.converter = mapTypeNames(converterObject) 
        return this.convert.bind(this);    
    }
    convert(obj){
        const type = analyzer.type(obj);
        if (type in this.converter){
            return this.converter[type](obj)
        }
        else if ('?' in this.converter){
            return this.converter['?'](obj)
        }
        else {
            throw new TypeError('preconversion type not provided for.'); 
        }
    }
}

export const objEnforcer = new TypeEnforcer('object');
export const arrEnforcer = new TypeEnforcer('array'); 
export const strEnforcer = new TypeEnforcer('string'); 
export const nodeEnforcer = new TypeEnforcer('node'); 
export const nodeConverter = new TypeConverter({
    string : o => document.createElement(o),
    node : o => o, 
});  
export const arrConverter = new TypeConverter({
    array : o => o,
    '?' : o => [o]
})

export default Type
