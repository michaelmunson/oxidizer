import { compile, config, configure, cssData, CSSRuleError, CSSStyleSheetError, CSSUnsupportedError, Declarations, defaultCSS, flatten, formatProperty, formatSelector, formatValue, generateStyleElement, getEventHandlers, HTMLStyleMethods, parse, stringify, supports, supportsProp, toCamel, toDashed, unit } from "./css/cssUtils.mjs";

export function css (styles) {
    return compile(parse(styles));
    // if (isObj(styles)) this.ruleMap = compile(styles);
    // else if (isStr(styles)) {
    //     this.ruleMap = compile(parse(styles));
    //     cssText = this.ruleMap;
    // }
    // else if (isArr(styles)) this.ruleMap = compile(parse(styles));
    // return {
    //     rules: this.ruleMap,
    //     cssText: cssText
    // };
}
css.Declarations = Declarations
css.defaultCSS = defaultCSS
css.cssData = cssData;
css.configure = configure;
css.toDashed = toDashed;
css.toCamel = toCamel;
css.formatSelector = formatSelector;
css.formatProperty = formatProperty;
css.formatValue = formatValue;
css.supports = supports;
css.supportsProp = supportsProp;
css.flatten = flatten;
css.stringify = stringify;
css.parse = parse;
css.generateStyleElement = generateStyleElement;
css.unit = unit;
css.compile = compile;
css.HTMLStyleMethods = HTMLStyleMethods
css.CSSRuleError = CSSRuleError;
css.CSSUnsupportedError = CSSUnsupportedError;
css.CSSStyleSheetError = CSSStyleSheetError;
css.getEventHandlers = getEventHandlers;

Object.defineProperty(css, 'config', {
    get () {
        return config
    },
    set (config) {
        css.configure(config)
    }
})

export default css
