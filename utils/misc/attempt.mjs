import {analyzer,isFn} from "./analyze.mjs";
import { Arr } from "../extensions/array.mjs";

export default class Attempt {
    [Symbol.toPrimitive](hint) {
        return this.out() 
    }
    constructor(...attempters){
        this.attempters = attempters; 
        this.attempts = Arr();
        this.failed = Arr();
        this.worked = Arr(); 
        this.config = {
            halter(){},
            onError(){}
        }
        if (this.attempters.filter(f => typeof f !== 'function').length > 0){
            this.config = {...this.config,...this.attempters.filter(f => typeof f !== 'function')[0]}

        }
        const halterVal = this.run();
        if (halterVal){
            return halterVal; 
        } 
    }
    run(){
        console.log(this.config)
        let lastOut = null;
        for (let fn of this.attempters){
            try {
                const a = fn(lastOut);
                this.attempts.push({output:a,attempt:fn}); 
                this.worked.push({output:a,attempt:fn});
                lastOut = this.worked.last().output; 
            }
            catch(e){
                this.attempts.push({output:e,attempt:fn}); 
                this.failed.push({error:e,attempt:fn});
                this.config.onError(lastOut)
                lastOut = null
            }
            if (this.config.halter(lastOut) != null){
                return lastOut;     
            }
        }
    }
    out(n=0){
        if (n<0){
            n = length+n
        }
        return this.worked[n].output
    }
}
