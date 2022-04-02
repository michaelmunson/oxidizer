import cssConfig from "./cssConfig.mjs"
import Unit from "./cssUnits.mjs"
import { Str } from "../../../utils/utils.mjs"
import cssdata from "./cssData.json"; 
import bootstrap from "./bs.json"; 

const isCSSOM = (()=>{
    try {
        CSS!==undefined; 
    }
    catch(e){
        return false;
    }
})();

export const cssData = {...cssdata,...bootstrap}; 

export const toDashed = function (str) {
    return new Str(str).camelCaseToDashed().toString()
}
export const toCamel = function (str) {
    return new Str(str).dashedToCamelCase().toString()
}
export const formatSelector = function (selectorString, implicit) {
    const selectorFormatters = [
        // camelCase => camel-case
        [/(?!^[A-Z])([A-Z])/g, m => '-' + m.toLowerCase()],
        // $class => .class
        [/(\$(?=[A-Za-z]))/g, (m, ...args) => { return '.' }],
        // _div => > div
        [/(\_)/g, m => '>'],
        // space before everything not :
        [/(^[^:])/g, m => ' ' + m],
        // '&' used to connect classes, psuedo-selectors etc...
        [/(\s*\&\s*)/g, m => '']
    ]
    selectorFormatters.forEach(
        rs => selectorString = selectorString.replace(rs[0], rs[1])
    )
    if (implicit) {
        return formatSelector(implicit + selectorString)
    }
    return selectorString.replaceAll(/[\s]+/g, ' ').trim()
}
export const formatProp = function (prop) {
    return new Str(prop).camelCaseToDashed().toString().replaceAll('\n', '').replaceAll(' ', '')
}
export const formatValue = function (value) {
    const valueFormatters = [
        // any value ending with "!" => value+'!important'
        [/([!][\s]*$)/g, m => '!important']
    ]
    if (Array.isArray(value)) {
        return value
    }
    if (isStr(value)) {
        valueFormatters.forEach(
            rs => value = value.toString().replace(rs[0], rs[1])
        )
    }
    return value
}
export const supports = function (dec) {
    if (isCSSOM) return CSS.supports(dec)
    dec = stringify(dec)
    const tester = document.createElement('div')
    tester.style = dec
    if (tester.getAttribute('style').length === 0) {
        return false
    }
    return true
}
export const supportsProp = function (prop) {
    const tester = document.createElement('div')
    return prop in tester.style
}
export const flatten = function (object, path = '', acc = {}) {
    /* Flatten */
    for (const key in object) {
        const val = object[key]
        if (isObj(val)) {
            if (path.includes('@')) {
                acc[path + ' ' + key] = val
                continue
            }
            const accPath = formatSelector(key, path)
            acc[accPath] = val
            flatten(val, accPath, acc)
        }
        if (isArr(val)) {
            const accPath = formatSelector(key, path)
            acc[accPath] = val
        }
    }
    return acc
}
export const stringify = function (obj, type = 'string') {
    if (isArr(obj)) {
        if (type === 'string') return obj.join(';').replaceAll(';;', ';')
        else return obj
    }
    obj = flatten(obj)
    if (isStr(obj)) return obj
    let stringified = (type === 'string') ? '' : []
    Object.entries(obj).forEach(e => {
        const [k, v] = e
        const newv = Object.entries(v).filter(e => isStr(e[1]) || isNum(e[1])).map(e => e.join(':')).join(';')
        if (type === 'array') stringified.push(k + ' {    ' + newv + '}')
        else stringified += k + ' {    ' + newv + '}'
    })
    return stringified
}
export const parse = function (str, parseObj = {}) {
    if (isObj(str)) {
        const ents = Object.entries(str)
        if (isStr(ents[0][1])) str = ents.map(ent => ent.join('{') + '}')
        else return str
    }
    try {
        if (isArr(str)) {
            if (str[0].includes('{')) str = str.join('')
            else if (str[0].includes(':')) str = str.join(';')
            else {
                const newstr = ''
                for (const s in str) {
                    const ch = (parseInt(s) % 2 === 1) ? ';' : ':'
                    newstr += str[s] + ch
                }
                str = newstr
            }
            str = str.replace(';;', ';')
        }
        if (str.includes('{')) {
            const sel = str.slice(0, str.indexOf('{'))
            const { inner, after } = new Str(str).stackAnalysis('{', '}')
            parseObj[sel.trim().replaceAll('\n', '')] = parse(inner, {})
            parse(after, parseObj)
        } else {
            const decs = str.split(';')
            decs.forEach(dec => {
                if (dec.includes(':')) {
                    const [p, v] = dec.split(':')
                    parseObj[formatProp(p)] = v.trim()
                }
            })
        }
        return parseObj
    } catch (e) {
        config.onError(e)
    }
}
export const generateStyleElement = function (id) {
    if (id == null) id = 'stylesheet-' + document.querySelectorAll('style').length
    const ss = document.createElement('style')
    ss.setAttribute('id', id)
    return ss
}
export const unit = function (number, unit) {
    return new Unit(number, unit)
}
export const configure = function(object){
    if (!object) return cssConfig; 
    else {
        for (const key in object){
            cssConfig[key] = object[key];
        }        
    }
}

export class CSSUnsupportedError extends Error {
    constructor (declaration) {
        super(declaration)
        // new TypeEnforcer("string")(declaration);
        const [prop, val] = declaration.replace(';', '').split(':')
        const isSup = supportsProp(prop) ? '' : `(!) ${prop} is not a supported CSS Property.`
        const name = 'CSSDeclarationError'
        const message = `"${prop}:${val}" is not a supported CSS Declaration\n${isSup}`
        // super(message);
        this.name = name
        this.message = message
    }
}
export class CSSRuleInsertionError extends Error {
    constructor (message) {
        super(message)
        this.name = 'CSSStyleSheetError'
        this.message = message
    }
}

export {Unit}

