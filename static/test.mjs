// const HTML = await import('../utils/html.mjs').then(module => module.default);
import $ from "../src/query.mjs";
import { isArr,log,Str } from "../utils/utils.mjs";


const context = {
    $div :  $.new('div').html("<div><button>a</button></div>","<div><button>b</button></div>"),
}

export const queryTests = {
    ".html()" : [
        () => {
            return context.$div.html(); 
        },
        () => "<div><button>a</button></div><div><button>b</button></div>"
    ],
    ".find()" : [
        () => {
            return context.$div.find('button')
        },
        () => {
            return context.$div.querySelector("button")
        }
    ],
    ".findAll()" : [
        () => {
            return context.$div.findAll('*').map(n => n.outerHTML).join(""); 
        },
        () => {
            return $([...context.$div.querySelectorAll("*")].map(n => n.outerHTML)).join("")
        }
    ],
    ".addClass()" : [
        () => {
            context.$div.addClass("c d");
            return true
        },
        () => {return context.$div.classList.contains("c","d")}
    ],
    ".removeClass()" : [
        () => {
            context.$div.removeClass("a b");
            return false
        },
        () => {return context.$div.classList.contains("a","b")}
    ],
    ".toggleClass()" : [
        () => {
            context.$div.toggleClass("e f");
            return true
        },
        () => {return context.$div.classList.contains("e","f")}
    ],
    run(conf = {args:[],showOut:false}){
        const {args,showOut} = {args:[],showOut:false,...conf}
        log(["Test outputs may not be the return value of the function being tested",{color:"yellow", fontStyle:'italic',background:'black'}])
        const testOutcomes = {}; 
        const passFail = [0,0];
        for (let tst in this){
            const testerArr = this[tst]
            if (tst !== 'run' && isArr(testerArr)){
                const testOutput = testerArr[0](...args); 
                const expectedOutput = testerArr[1](...args);
                if (testOutput === expectedOutput){
                    passFail[0] += 1; 
                    testOutcomes['✅ '+tst] = {testOutput,expectedOutput,};
                }
                else {
                    passFail[1] += 1; 
                    testOutcomes['❌ '+tst] = {testOutput,expectedOutput,};
                }
            }
        }
         

        Object.entries(testOutcomes).forEach(t => {
            log([t[0],{fontSize:"1.3em"}])
            if (showOut) log(t[1])  
        });
        return passFail[0] + "/" + (passFail[0]+passFail[1]) + " tests passed."
    }
}
export const strTests = {
    ".stack()" : [
        () => {return new Str("asdasdasdaiu({goose})asdq123,").stack("{","}").toString()},
        () => {return "goose"}
    ],
    ".dashedToCamelCase()" : [
        () => {return new Str("font-size").dashedToCamelCase().toString()},
        () => {return "fontSize"}
    ],
    ".camelCaseToDashed()" : [
        () => {return new Str("fontSize").camelCaseToDashed().toString()},
        () => {return "font-size"}
    ],
    run(conf = {args:[],showOut:false}){
        console.clear(); 
        const {args,showOut} = {args:[],showOut:false,...conf}
        log(["Test outputs may not be the return value of the function being tested",{color:"yellow", fontStyle:'italic',background:'black'}])
        const testOutcomes = {}; 
        const passFail = [0,0];
        for (let tst in this){
            const testerArr = this[tst]
            if (tst !== 'run' && isArr(testerArr)){
                const testOutput = testerArr[0](...args); 
                const expectedOutput = testerArr[1](...args);
                if (testOutput === expectedOutput){
                    passFail[0] += 1; 
                    testOutcomes['✅ '+tst] = {testOutput,expectedOutput,};
                }
                else {
                    passFail[1] += 1; 
                    testOutcomes['❌ '+tst] = {testOutput,expectedOutput,};
                }
            }
        }
         
        for (const t in testOutcomes){
            log([t,{fontSize:"1.15em",fontWeight:'bold'}])
            if (showOut) {
                console.log(testOutcomes[t])  
            }
        };
        return passFail[0] + "/" + (passFail[0]+passFail[1]) + " tests passed."
    }
}

const tests = {queryTests,strTests}

export default tests; 
