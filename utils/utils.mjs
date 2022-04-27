import { $arr, Arr } from "./extensions/array.mjs";
import $Map from "./extensions/map.mjs";
import { $obj, Obj } from "./extensions/object.mjs";
import { $str, Str } from "./extensions/str.mjs";
import { analyzer, enforce, isArr, isBool, isFn, isInt, isNan, isNode, isNum, isObj, isStr, isWeakStr, methods, isDef, isUndef } from "./misc/analyze.mjs";
import { Argvout } from "./misc/argvout.mjs";
import { assign, Assignee, Assigner, Global } from "./misc/assign.mjs";
import Attempt from "./misc/attempt.mjs";
import DeepProxy from "./misc/deepProxy.mjs";
import evaluator from "./misc/evaluator.mjs";
import { consoleStrs, log, print, printf, println } from "./misc/terminal.mjs";
import Type, { arrConverter, arrEnforcer, nodeConverter, nodeEnforcer, objEnforcer, strEnforcer, TypeConverter, TypeEnforcer, Typevout } from "./misc/type.mjs";

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
    methods,
    isDef,
    isUndef
};
