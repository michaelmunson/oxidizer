
export default function evaluator(toEvaluate,...parameters){
    const evaluator = new Function(parameters,"return "+toEvaluate);
    return {
        toEvaluate, 
        evaluator,
        evaluate : function($this=globalThis,...args){
            try {
                return this.evaluator.apply($this,args); 
            }
            catch(e){
                console.error(e);
                return null;  
            }
        },
        eval : this.eval
    }  
}

