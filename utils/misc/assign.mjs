/* eslint-disable prefer-reflect */
const assign = (assignee={},assigner={},filter=o=>true) => {
    function getMethods(obj=assigner){
        const properties = new Set()
        let currentObj = obj; 
        do {
            Object.getOwnPropertyNames(currentObj).map(item => properties.add(item))
        }   while ((currentObj = Object.getPrototypeOf(currentObj)))
        return [...properties.keys()].filter(item => typeof obj[item] === 'function')
    }
    const force = Assignee.config.force; 
    const assignerMethods = getMethods(assigner);
    const assignmentKeys = Reflect.ownKeys(assigner).filter(filter); 
    if (Assignee.config.includeMethods){
        for (const methodName in assignerMethods){
            assignee[methodName] = assigner[methodName]
        }
    }
    for (const a in assignmentKeys){
        assignee[assignmentKeys[a]] = 
            (assignee[assignmentKeys[a]]===null && !force) 
                ? assignee[assignmentKeys[a]]
                : assigner[assignmentKeys[a]]; 
    }
    return assignee; 
}

class Assigner {
    constructor(assigner){
        this.assigner = assigner;
        return this.assign.bind(this);  
    }
    assign(assignee,filter=o=>true){
        return assign(assignee,this.assigner,filter); 
    }
}

class Assignee {
    static map(assignee={},assigner={},filter=o=>true){
        return assign(assignee,assigner,filter); 
    }
    static config(object){
        for (const key in object){
            Assignee.config[key] = object[key]; 
        }
        return {...Assignee.config}; 
    }
    constructor(object={},config={force:false}){
        this.assignee = object;
        Assignee.config(config);
        return this.assign.bind(this); 
    }
    assign(assigner,filter=o=>true){
        return Assignee.map(this.assignee,assigner,filter); 
    }
    keys(each=(key,index)=>{}){
        Object.keys(this.assignee).forEach((key,index) => {
            Reflect.apply(each,this,[key,index]); 
        }); 
        return this; 
    }
    values(each=(value,index)=>{}){
        Object.values(this.assignee).forEach((value,index) => {
            Reflect.apply(each,this,[value,index]); 
        }); 
        return this; 
    }
    entries(each=(key,value,index)=>{}){
        Object.values(this.assignee).forEach((key,value,index) => {
            Reflect.apply(each,this,[key,value,index]); 
        }); 
        return this; 
    }
}

Assignee.config({
    force : false,
    methods : false
});

Assignee.assign = assign;

const Global = new Assignee(global); 

export {assign,Global,Assignee,Assigner}
