
import { isArr, isFn, isObj } from '../../utils/utils.mjs'
import $, { defaultCSS } from '../query.mjs'
import config from './config.mjs'
import { css } from './css.mjs'
import { CSSDeclarationError, CSSStyleSheetError } from './css/cssError.mjs'

const stylerSheets = {}

const attachMethods = (node, fn) => {
    node.eventHandlers = (node.eventHandlers) ? node.eventHandlers : []
    for (const f in fn) {
        const func = function () {
            const n = $(this)
            const styles = fn[f].call(n)
            if (styles === false) n.revertCss()
            else if (isObj(styles)) n.css(new StylerDeclarations(styles))
        }
        if (node.eventHandlers.filter(fn0 => fn0.toString() === fn[f].toString()).length > 0) continue
        node.addEventListener(f, func)
        node.eventHandlers.push(fn[f])
    }
}

class StylerDeclarations {
    constructor (decObject) {
        Object.entries(decObject).forEach(e => {
            const [p, v] = e
            if (isObj(v) || isFn(v)) return
            this.append(p, v)
        })
    }

    append (prop, val) {
        if (prop in config.properties) {
            const out = config.properties[prop](val)
            for (const o in out) this[css.formatProp(o)] = css.formatValue(out[o])
        } else this[css.formatProp(prop)] = css.formatValue(val)
        this.clean()
        this.inspect()
    }

    clean () {
        for (const i in this) {
            if (i in config.unitDefaults) {
                if (!isNaN(this[i])) this[i] += config.unitDefaults[i]
            } else if (css.toCamel(i) in config.unitDefaults) {
                if (!isNaN(this[i])) this[i] += config.unitDefaults[css.toCamel(i)]
            }
        }
    }

    inspect () {
        for (const p in this) {
            const dec = p + ':' + this[p]
            if (!css.supports(dec)) config.onUnsupported(new CSSDeclarationError(dec))
        }
    }

    toObject () {
        const o = {}
        for (const i in this) o[i] = this[i]
        return o
    }

    toString () {
        return Object.entries(this).map(e => e[0] + ':' + e[1]).join(';')
    }

    stringify (type = 'string') {
        type = type.toLowerCase()
        if (type.startsWith('str')) return this.toString()
        else if (type.startsWith('arr')) return this.toString().split(';')
        else if (type.startsWith('obj')) return css.parse(this.toString())
    }
}

class StylerSheet {
    constructor (id, cssObject) {
        console.log(id)
        // if (isArr(cssObject) || cssObject instanceof Map) this.addRoutes(arr);
        if (!cssObject) {
            cssObject = id
            id = 'ox-sheet' + document.querySelectorAll('[stylersheet]').length
        }

        this.id = id
        this.styleElement = $(css.generateStyleElement(this.id))
        this.styleElement.attr('stylersheet', this.id)
        this.styleElement.appendToHead()
        if (isFn(cssObject)) this.factory = cssObject
        else this.set(cssObject)
        StylerSheet.stylerSheets = this
    }

    set (cssObject, ...argv) {
        if (isFn(cssObject)) {
            cssObject = cssObject.apply(this, argv)
        }
        const { rules, eventHandlers } = StylerSheet.compile(cssObject)
        this.ruleMap = rules
        this.eventHandlers = eventHandlers
        this.styleElement.eventHandlers = this.eventHandlers
        this.styleElement.ruleMap = this.ruleMap
    }

    // setRoutes(arr){
    //     this.router = new $Map();
    //     this.currentRoute = undefined;
    //     if (isObj(arr)) {
    //         const narr = []
    //         Object.entries(arr).map(a => narr.push(Obj.create(a[0], a[1])))
    //         arr = narr;
    //     }
    //     arr.forEach((arr,i) => {
    //         const [route,factory] = Object.entries(arr)[0]
    //         if (parseInt(i)===0) this.router.active = route;
    //         this.router.set(route, factory);
    //     });
    // }
    // reroute(route, ...argv){
    //     if (!this.router) throw new Error("No router has been added");
    //     const ss = this.router.get(route)
    //     if (!ss) throw new Error("No route named '"+route+"'")
    //     this.set(ss);
    //     this.render();
    // }
    clear () {
        this.styleElement.clear()
        return this
    }

    render (route, ...argv) {
        if (route) {
            this.setRoute(route)
        }
        this.clear()
        if (this.factory) this.set(this.factory, ...argv)
        try {
            const imps = []
            const stringed = this.stringify()
            stringed.forEach(str => {
                if (str.includes('@import')) {
                    imps.push(str)
                    return
                }
                this.styleElement.sheet.insertRule(str)
            })
            imps.forEach(i => {
                this.insert(i, 0)
            })
            this.attachMethods()
            return this
        } catch (e) {
            config.onError(new CSSStyleSheetError(e))
        }
        return this
    }

    delete (rule) {
        this.styleElement.delete(rule)
    }

    add (obj) {
        this.styleElement.add(obj)
    }

    insert (rule, index) {
        this.styleElement.insert(rule, index)
    }

    replace (selector, rule) {
        this.styleElement.replace(selector, rule)
        return this
    }

    attachMethods () {
        for (const e of this.eventHandlers) {
            const [sel, fn] = e
            document.querySelectorAll(sel).forEach(node => attachMethods(node, fn))
        }
    }

    toString () {
        const strArr = []
        for (const e of this.ruleMap.entries()) {
            const [sel, val] = e
            if (isArr(val)) val.forEach(v => strArr.push(sel + ' ' + v))
            else if (val instanceof Map) {
                for (const vale of val.entries()) {
                    const [sel1, val1] = vale
                    strArr.push(sel + ' { ' + sel1 + ' { ' + val1.toString() + ' } } ')
                }
            } else if (val instanceof StylerDeclarations) {
                strArr.push(sel + ' { ' + val.toString() + ' } ')
            }
        }
        return strArr.join('\n')
    }

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
            } else if (val instanceof StylerDeclarations) {
                strArr.push(sel + ' { ' + val.toString() + ' } ')
                obj[sel] = val.toString()
            }
        }
        if (type.startsWith('arr')) return strArr
        else if (type.startsWith('str')) return strArr.join('\n')
        else if (type.startsWith('obj')) return obj
        else return strArr
    }

    getRule (selector) {
        return this.styleElement.getRule(selector)
    }

    getRuleDecs (rule, type) {
        return this.styleElement.getRuleDecs(rule, type)
    }

    getRuleStyleMap (rule) {
        return this.styleElement.getRuleStyleMap(rule)
    }

    getRuleText (rule) {
        return this.styleElement.getRuleText(rule)
    }

    addRuleDecs (rule, decs) {
        this.styleElement.addRuleDecs(rule, decs)
        return this
    }

    setRuleDec (rule, prop, val) {
        this.styleElement.setRuleDec(rule, prop, val)
        return this
    }

    get sheet () { return this.styleElement.sheet }
    static get stylerSheets () {}
    static set stylerSheets (v) {
        stylerSheets[v.id] = v
        return true
    }

    static get stylerSheets () { return stylerSheets }
    static compile (object) {
        const styles = css.flatten(object)
        const rules = new Map()
        const eventHandlers = new Map()
        for (const sel in styles) {
            if (sel === '@media' || sel === '@keyframes') continue
            else if (sel.includes('@media') || sel.includes('@keyframes')) {
                const inrMap = new Map()
                for (const sel1 in styles[sel]) {
                    const selector = isNaN(sel1) ? sel1 : sel1 + '%'
                    const styDec = new StylerDeclarations(styles[sel][sel1])
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
                    const stydec = new StylerDeclarations(styles[sel])
                    rules.set(sel, stydec)
                    defaultCSS[sel] = stydec.toObject()
                } else if (isArr(styles[sel])) rules.set(sel, styles[sel])
            }
        }
        return { rules, eventHandlers }
    }
}

export {
    StylerDeclarations,
    StylerSheet
}
