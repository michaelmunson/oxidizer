import {analyzer,isNode,isArr,isBool,isFn,isInt,isNan,isNum,isObj,isStr,isWeakStr,enforce} from "./misc/analyze.mjs";
import {Arr,$arr} from "./extensions/array.mjs";
import { assign, Global, Assigner,Assignee } from "./misc/assign.mjs";
import Attempt from "./misc/attempt.mjs";
import evaluator from "./misc/evaluator.mjs";
import $Map from "./extensions/map.mjs";
import { $str, Str } from "./extensions/str.mjs";
import {$obj,Obj}  from "./extensions/object.mjs";
import DeepProxy from "./misc/deepProxy.mjs";
import {Argvout} from "./misc/argvout.mjs";
import Type, {TypeEnforcer,TypeConverter,Typevout,objEnforcer,strEnforcer,nodeConverter,nodeEnforcer,arrEnforcer,arrConverter} from "./misc/type.mjs";
import {consoleStrs,print,printf,println, log} from "./misc/terminal.mjs";


export {
    Global,
    analyzer,
    objEnforcer,
    strEnforcer,
    nodeConverter,
    nodeEnforcer,
    arrEnforcer,
    arrConverter,
    consoleStrs,
    
    Attempt,
    Obj,
    Arr,
    Assignee,
    Str,
    Argvout,
    Typevout,
    Assigner,
    DeepProxy,
    Type,
    TypeEnforcer,
    TypeConverter,
    $Map,
    
    assign,
    $obj,
    $arr,
    $str, 
    isNode,
    isArr,
    isBool,
    isFn,
    isInt,
    isNan,
    isNum,
    isObj,
    isStr,
    isWeakStr,
    enforce,
    evaluator,
    print,
    printf,
    println,
    log,
}



