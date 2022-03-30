import { printf } from "./terminal.mjs";
import assert from "assert"
/**
 * @param {function} func function to test
 * @param expected expected result
 * @param {string} assertionType strictEqual/notEqual/equal/etc...  
*/

const printRes = (name,out) => {
    if (out.passed) {
        printf(`%green% ✔︎ ${name}`); 
    }
    else {
        printf(`%red% 𐄂 ${name}`); 
    }
}

export class Test {
    constructor(name,func,expected,operator="strictEqual"){
    
        this.name = name; 
        this.testFunc = func; 
        this.expected = expected; 
        this.operator = operator; 
        this.asserter = assert[operator];
    }
    run(...args){
        const name = this.name; 
        const actual = this.testFunc.apply(global,args);
        const expected = this.expected; 
        const operator = this.operator; 
        let passed = false; 
        try {
            this.asserter(actual,expected);
            passed = true; 
        }
        catch(e){}
        const out = {
            passed,
            expected,
            actual,
            operator,
        }
        printRes(name,out)
        return out; 
    }
}

export class Tests {
    constructor(tests){
        this.tests = {}
        for (const test in tests){
            this.tests[test] = new Test(test,...tests[test])
        }
    }
    run(...args){
        
        const output = {}
        for (const test in this.tests){
            output[test] = this.tests[test].run(args)
        }
    }
}






