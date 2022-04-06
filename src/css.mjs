import { isArr, isStr } from "../utils/utils.mjs";
import { compile, config, configure, cssData, CSSRuleError, CSSStyleSheetError, CSSUnsupportedError, Declarations, defaultCSS, flatten, formatProperty, formatSelector, formatValue, generateStyleElement, HTMLStyleMethods, parse, Rule, RuleList, RuleMap, stringify, supports, supportsProp, toCamel, toDashed, unit } from "./css/cssUtils.mjs";

export function css (styles) {
    if (isArr(styles)) {
        if (isStr(styles[0])) {
            return new RuleList(styles[0])
        }
    }
    else if (styles instanceof RuleMap || styles instanceof RuleList) return styles;
    else return new RuleList(styles);
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
css.config = config;
css.Rule = Rule;
css.RuleMap = RuleMap;
css.RuleList = RuleList;

export default css
