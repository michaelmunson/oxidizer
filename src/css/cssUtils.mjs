import { isArr, isFn, isNum, isObj, isStr, Str } from "../../utils/utils.mjs";
import bootstrap from "./bs.json";
import cssConfig from "./cssConfig.mjs";
import cssdata from "./cssData.json";
import Unit from "./cssUnits.mjs";

const isCSSOM = (() => {
    try {
        return CSS !== undefined;
    }
    catch (e) {
        return false;
    }
})();

export const defaultCSS = {}

export const cssData = { ...cssdata, ...bootstrap };

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
    for (const rs of selectorFormatters) {
        selectorString = selectorString.replace(rs[0], rs[1])
    }
    if (implicit) {
        return formatSelector(implicit + selectorString)
    }
    return selectorString.replaceAll(/[\s]+/g, ' ').trim()
}
export const formatProperty = function (prop) {
    if (prop in cssConfig.properties) {
        prop = cssConfig.properties[prop](prop);
    }
    else if (prop.includes("-") && toDashed(prop) in cssConfig.properties) {
        prop = cssConfig.properties[toDashed(prop)](prop);
    }
    return prop;
}
export const formatValue = function (value, property) {
    const valueFormatters = [
        // any value ending with "!" => value+'!important'
        [/([!][\s]*$)/g, m => '!important']
    ]
    if (isStr(value)) {
        for (const rs of valueFormatters) {
            value = value.toString().replace(rs[0], rs[1])
        }
    }
    if (property) {
        if (property in cssConfig.unitDefaults) {
            if (!isNaN(value)) value += cssConfig.unitDefaults[property]
        }
        else if (toCamel(property) in cssConfig.unitDefaults) {
            if (!isNaN(value)) value += cssConfig.unitDefaults[toCamel(property)]
        }
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
    if (isStr(obj)) return obj
    if (isArr(obj)) {
        if (type === 'string') return obj.join(';').replaceAll(';;', ';')
        else return obj
    }
    obj = compile(obj).rules;
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
                let newstr = ''
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
                    parseObj[formatProperty(p)] = v.trim()
                }
            })
        }
        return parseObj
    } catch (e) {
        cssConfig.ruleError(e)
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
export const configure = function (object) {
    if (!object) return cssConfig;
    else {
        for (const key in object) {
            cssConfig[key] = object[key];
        }
    }
}
export const inspect = (declarationObject) => {
    for (const p in declarationObject) {
        const dec = p + ':' + declarationObject[p]
        if (!supports(dec)) cssConfig.onUnsupported(new CSSUnsupportedError(dec))
    }
}
export const formatDeclarations = (declarationObject) => {
    for (const e in declarationObject) {
        if (typeof declarationObject[e] === "function") continue;
        const [prop, val] = e;
        delete declarationObject[prop];
        if (prop in cssConfig.properties) {
            const out = cssConfig.properties[prop](val)
            for (const o in out) declarationObject[formatProperty(o)] = formatValue(out[o])
        } else {
            if (typeof val === "string" || typeof val === "number") declarationObject[formatProperty(prop)] = formatValue(val)
        }
    }
    return declarationObject;
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
export class CSSRuleError extends Error {
    constructor (message) {
        super(message)
        this.name = 'CSSRuleError'
        this.message = message
    }
}
export class CSSStyleSheetError extends Error {
    constructor (message) {
        super(message)
        this.name = 'CSSStyleSheetError'
        this.message = message
    }
}
export class Declarations {
    constructor (decObject) {
        Object.assign(this, formatDeclarations(decObject));
    }

    append (prop, val) {
        if (prop in cssConfig.properties) {
            const out = cssConfig.properties[prop](val)
            for (const o in out) this[formatProperty(o)] = formatValue(out[o])
        } else this[formatProperty(prop)] = formatValue(val)
        this.clean()
        this.inspect()
    }

    clean () {
        for (const i in this) {
            if (i in cssConfig.unitDefaults) {
                if (!isNaN(this[i])) this[i] += cssConfig.unitDefaults[i]
            } else if (toCamel(i) in cssConfig.unitDefaults) {
                if (!isNaN(this[i])) this[i] += cssConfig.unitDefaults[toCamel(i)]
            }
        }
    }

    inspect () {
        for (const p in this) {
            const dec = p + ':' + this[p]
            if (!supports(dec)) cssConfig.onUnsupported(new CSSUnsupportedError(dec))
        }
    }

    toObject () {
        const o = {}
        for (const i in this) o[i] = this[i]
        return o
    }

    toString () {
        return Object.entries(this).map(e => toDashed(e[0]) + ':' + e[1]).join(';')
    }

    stringify (type = 'string') {
        type = type.toLowerCase()
        if (type.startsWith('str')) return this.toString()
        else if (type.startsWith('arr')) return this.toString().split(';')
        else if (type.startsWith('obj')) return parse(this.toString())
    }
}
export class Rule {
    constructor (sheet, selector, declarations) {
        if (sheet instanceof CSSStyleSheet) {
            this.sheet = sheet;
        }
        else if (declarations == null && isStr(selector)) {
            declarations = selector;
            selector = sheet;
        }
        this.selector = selector;
        this.declarations = declarations;
    }

    get selector () {
        return this.__selector__;
    }

    set selector (selector) {
        if (!isNaN(selector)) selector = selector + "%"
        this.__selector__ = selector;
    }

    get declarations () {
        return this.__selector__;
    }

    set declarations (declarations) {
        this.__declarations__ = new Declarations(declarations);
    }

    get sheet () {
        return this.__sheet__;
    }

    set sheet (sheet) {
        if (this.sheet != null) {
            cssConfig.onError(new CSSStyleSheetError("cannot redefine sheet property"))
        }
        if (!(sheet instanceof CSSStyleSheet)) {
            cssConfig.onError(new CSSStyleSheetError("cannot redefine sheet property"))
        }
        this.__sheet__ = sheet
    }

    toString () {
        return this.selector + "{" + this.declarations.toString() + "}"
    }

    get cssText () { return this.toString() }
}
export class RuleMap extends Map {
    constructor (sheet, cssObject) {
        super()
        if (sheet instanceof CSSStyleSheet) {
            this.sheet = sheet;
        }
        else {
            if (isObj(sheet)) cssObject = sheet;
            else if (isStr(cssObject)) cssObject = parse(cssObject);
        }
        this.__set__ = this.set;
        this.__get__ = this.get;
        const styles = flatten(cssObject)
        this.eventHandlers = new Map()
        for (const sel in styles) {
            if (sel === '@media' || sel === '@keyframes') continue
            else if (sel.includes('@media') || sel.includes('@keyframes')) {
                const inrMap = new RuleMap();
                for (const sel1 in styles[sel]) {
                    inrMap.set(inrMap.size, new Rule(sel1, styles[sel][sel1]))
                }
                this.set(sel, inrMap)
            } else {
                if (isObj(styles[sel]) || isArr(styles[sel])) {
                    this.set(this.size, new Rule(sel, styles[sel]))
                    for (const fns in styles[sel]) {
                        if (isFn(styles[sel][fns])) this.eventHandlers.set(fns, styles[sel][fns]);
                    }
                }
            }
        }
    }

    get sheet () {
        return this.__sheet__;
    }

    set sheet (sheet) {
        if (this.sheet != null) {
            cssConfig.onError(new CSSStyleSheetError("cannot redefine sheet property"))
        }
        if (!(sheet instanceof CSSStyleSheet)) {
            cssConfig.onError(new CSSStyleSheetError("cannot redefine sheet property"))
        }
        this.__sheet__ = sheet
    }

    set (index, value) {
        if (value instanceof RuleMap || value instanceof Rule) this.__set__(index, value);
        else this.__set__(index, new Rule(value));
        return this;
    }

    toString () {
        let cssText = ""
        this.forEach(rule => { cssText += rule.toString() });
        return cssText;
    }
}
export class EventMap extends Map {
    constructor () {
        super()
    }

    attach (node) {
        for (const entry of this.entries()) {
            const [sel, fn] = entry;
            if (node.matches(sel)) {
                node.eventHandlers = (node.eventHandlers) ? node.eventHandlers : [];
                for (const f in fn) {
                    if (node.eventHandlers.filter(fn0 => fn0.toString() === fn[f].toString()).length > 0) continue;
                    const func = function () {
                        const n = this;
                        const styles = fn[f].call(n);
                        if (styles === false) n.revertCss();
                        else if (isObj(styles)) n.css(formatDeclarations(styles));
                    }
                    node.addEventListener(f, func);
                    node.eventHandlers.push(fn[f]);
                }
            }
        }
    }
}
export const compile = (cssObject) => {
    const styles = flatten(cssObject)
    const rules = new RuleMap()
    const eventHandlers = new Map()
    for (const sel in styles) {
        if (sel === '@media' || sel === '@keyframes') continue
        else if (sel.includes('@media') || sel.includes('@keyframes')) {
            const inrMap = new Rule()
            for (const sel1 in styles[sel]) {
                const selector = isNaN(sel1) ? sel1 : sel1 + '%'
                const styDec = new Declarations(styles[sel][sel1])
                inrMap.set(selector, styDec)
                defaultCSS[selector] = styDec.toObject()
            }
            rules.set(sel, inrMap)
        } else {
            if (isObj(styles[sel])) {
                const fns = {}
                for (const sel1 in styles[sel]) {
                    if (isFn(styles[sel][sel1])) fns[sel1] = styles[sel][sel1]
                }
                if (Object.keys(fns).length > 0) eventHandlers.set(sel, fns)
                const stydec = new Declarations(styles[sel])
                rules.set(rules.size, new Rule(stydec))
            } else if (isArr(styles[sel])) rules.set(sel, styles[sel])
        }
    }
    return { rules, eventHandlers }
}
export const HTMLStyleMethods = {

    get onError () {
        return cssConfig.ruleError
    },
    getRules () {
        return [...this.sheet.rules]
    },
    /**
     *
     * @deprecated
     */
    addByHTML (obj) {
        obj = stringify(obj)
        this.innerHTML = obj
        return this
    },
    add (r) {
        try {
            if (isObj(r)) r = stringify(r, 'array')
            if (isStr(r)) r = [r]
            r.forEach(s => this.insert(s))
        } catch (e) {
            cssConfig.ruleError(new CSSRuleError(e))
        }
        return this
    },
    insert (r, i) {
        if (isObj(r)) r = new Declarations(r).toString();
        if (isObj(r)) r = stringify(r, 'array');
        if (i) this.sheet.insertRule(r, i)
        else this.sheet.insertRule(r)
        return this
    },
    clear () {
        while (this.sheet.cssRules.length > 0) {
            this.sheet.deleteRule(0)
        }
        return this
    },
    delete (rule) {
        if (isStr(rule)) {
            for (const i in this.getRules()) {
                if (this.getRules()[i].selectorText === rule) return this.delete(parseInt(i))
            }
        }
        if (isNum(rule)) this.sheet.deleteRule(rule)
        return this
    },
    replace (selector, rule) {
        this.delete(selector)
        this.add(rule)
        return this
    },
    getRule (selector) {
        return this.getRules().find(rule => rule.selectorText === selector)
    },
    getRuleDecs (rule, type) {
        const decs = {}
        rule = this.getRule(rule)
        const styles = [...rule.styles]
        for (const r of styles) {
            const rd = toCamel(r)
            decs[rd] = rule.styles[rd]
        }
        if (type === 'string') return stringify(decs)
        else if (type === 'array') return stringify(decs, 'array')
        return decs
    },
    getRuleStyleMap (rule) {
        return this.getRule(rule).styleMap
    },
    getRuleText (rule) {
        // FIXME
        return rule
    },
    addRuleDecs (rule, decs) {
        rule = this.getRule(rule)
        const txt = rule.cssText.replace('}', '')
        if (isStr(decs)) decs = parse(txt + decs + ' }')
        else if (isArr(decs)) decs = parse(decs)
        for (const dec in decs) {
            this.addRuleDec(dec, decs[dec])
        }
    },
    setRuleDec (rule, prop, val) {
        this.getRuleStyleMap(rule).set(prop, val)
        return this
    },
    appendToHead () {
        if (this.sheet == null) {
            document.head.append(this)
        }
        return this
    },

    compile (cssObject) {
        this.ruleMap = new RuleMap(cssObject);
        this.eventHandlers = this.ruleMap.eventHandlers;
        // const styles = flatten(cssObject)
        // const rules = new Map()
        // const eventHandlers = new Map()
        // for (const sel in styles) {
        //     if (sel === '@media' || sel === '@keyframes') continue
        //     else if (sel.includes('@media') || sel.includes('@keyframes')) {
        //         const inrMap = new Map()
        //         for (const sel1 in styles[sel]) {
        //             const selector = isNaN(sel1) ? sel1 : sel1 + '%'
        //             const styDec = new Declarations(styles[sel][sel1])
        //             inrMap.set(selector, styDec)
        //             defaultCSS[selector] = styDec.toObject()
        //         }
        //         rules.set(sel, inrMap)
        //     } else {
        //         if (isObj(styles[sel])) {
        //             const fns = {}
        //             for (const sel1 in styles[sel]) {
        //                 if (isFn(styles[sel][sel1])) fns[sel1] = styles[sel][sel1]
        //             }
        //             if (Object.keys(fns).length > 0) eventHandlers.set(sel, fns)
        //             const stydec = new Declarations(styles[sel])
        //             rules.set(sel, stydec)
        //             defaultCSS[sel] = stydec.toObject()
        //         } else if (isArr(styles[sel])) rules.set(sel, styles[sel])
        //     }
        // }
        // this.ruleMap = rules;
        // this.eventHandlers = eventHandlers;
        // return { rules, eventHandlers }
    },
    stringify (type = 'array') {
        type = type.toLowerCase()
        const strArr = []
        const obj = {}
        for (const e of this.ruleMap.entries()) {
            const [sel, val] = e
            if (isArr(val)) val.forEach(v => strArr.push(sel + ' ' + v))
            else if (val instanceof Map) {
                for (const vale of val.entries()) {
                    const [sel1, val1] = vale
                    strArr.push(sel + ' { ' + sel1 + ' { ' + val1.toString() + ' } } ')
                    obj[sel] = sel1 + ' { ' + val1.toString() + ' } '
                }
            } else if (val instanceof Declarations) {
                strArr.push(sel + ' { ' + val.toString() + ' } ')
                obj[sel] = val.toString()
            }
        }
        if (type.startsWith('arr')) return strArr
        else if (type.startsWith('str')) return strArr.join('\n')
        else if (type.startsWith('obj')) return obj
        else return strArr
    },
    render (factoryArgs = []) {
        if (this.sheet == null) {
            document.head.append(this);
        }
        this.clear()
        if (this.factory) this.compile(this.factory.call(this, factoryArgs));
        if (typeof factoryArgs === "string") {
            this.compile(this.router.get(factoryArgs).call(this, factoryArgs));
        }
        if (this.ruleMap) {
            try {
                const imps = []
                const stringed = this.stringify()
                stringed.forEach(str => {
                    if (str.includes('@import')) {
                        imps.push(str)
                        return
                    }
                    this.sheet.insertRule(str)
                })
                imps.forEach(i => {
                    this.insert(i, 0)
                })
                this.attachMethods()
                return this
            } catch (e) {
                cssConfig.ruleError(new CSSRuleError(e))
            }
        }
        return this
    },
    handleEvents (node) {
        if (cssConfig.handleEvents === true) {
            if (node) {
                if (this.eventHandlers.size > 0) {
                    this.eventHandlers.attach(node)
                }
            }
            else {
                document.querySelectorAll("*").forEach(node => {
                    if (this.eventHandlers.size > 0) {
                        this.eventHandlers.attach(node)
                    }
                })
            }
        }
    }
}

export const config = cssConfig

export { Unit };
