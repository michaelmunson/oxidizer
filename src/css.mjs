import { isArr, isFn, isNum, isObj, isStr } from '../utils/utils.mjs';
import config from "./css/cssConfig.mjs";
import { CSSStyleSheetError } from './css/cssError.mjs';
import { flatten, formatProp, formatSelector, formatValue, generateStyleElement, stringify, supports, supportsProp, toCamel, toDashed, unit,parse,configure,cssData, } from "./css/cssUtils.mjs";



export function css(styles){
    const argtree = {
        obj: o => {

        },
        str: s => {

        },
        arr: a => {

        },
        fn: f => {

        }

    }
    if (isObj(arg)) 5;
    else if (isStr(arg)) 6;
    else if (isArr(arg)) 7;
    else if (isFn(arg)) 8;

    this.styleArg = styles; 
    return {
        ruleArray: [],
        cssText: ''

    }
}
css.cssData = cssData; 
css.configure = configure; 
css.toDashed = toDashed; 
css.toCamel = toCamel;
css.formatSelector = formatSelector; 
css.formatProp = formatProp; 
css.formatValue = formatValue;
css.supports = supports; 
css.supportsProp = supportsProp; 
css.flatten = flatten; 
css.stringify = stringify; 
css.parse = parse; 
css.generateStyleElement = generateStyleElement; 
css.unit = unit; 
css.HTMLStyleMethods = {
    get onError () {
        return config.onError
    },
    getRules () {
        return [...this.sheet.rules]
    },
    /**
     *
     * @deprecated
     */
    addByHTML (obj) {
        obj = css.stringify(obj)
        this.innerHTML = obj
        return this
    },

    add (r) {
        try {
            if (isObj(r)) toRender = css.stringify(toRender, 'array')
            if (isStr(r)) toRender = [r]
            r.forEach(s => this.insert(s))
        } catch (e) {
            config.onError(new CSSStyleSheetError(e))
        }
        return this
    },
    insert (r, i) {
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
        if (isNum(rule)) this.sheet.deleteRule(i)
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
            const rd = css.toCamel(r)
            decs[rd] = rule.styles[rd]
        }
        if (type === 'string') return css.stringify(decs)
        else if (type === 'array') return css.stringify(decs, 'array')
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
        if (isStr(decs)) decs = css.parse(txt + decs + ' }')
        else if (isArr(decs)) decs = css.parse(decs)
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
    }
}

export default css
