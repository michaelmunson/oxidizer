class Arr extends Array {
    constructor(...elems){
        super();
        if (elems.length > 0){
            elems.forEach(elem => this.push(elem));
        }
    }
    replace(el,handler){
        let truth =false
        this.forEach((e,index)=>{
            if (handler.call(this,e,index)){
                truth = true; 
                this[index] = el; 
            }
        });
        if (!truth){
            this.push(el); 
        }
        return this; 
    }
    get(filter){
        for (let i in this){
            if (filter(this[i])){
                return this[i]
            }
        }
    }
    last(){
        return this[this.length-1]
    }

}

const $arr = (arr) => {
    if (arr != null){
        return new Arr(arr)
    }
    return new Arr()
}

export {$arr, Arr}
export default Arr