export default class $Map extends Map {
    constructor(){
        super()
    }
    toArray(){
        return [...this.entries()]
    }
    valueAt(i){
        return Array.from(this.values())[i]
    }
    keyAt(i){
        return Array.from(this.keys())[i]
    }
    entryAt(i){
        return Array.from(this.entries())[i]
    }
}

