import { compile, config, configure, cssData, CSSRuleError, CSSStyleSheetError, CSSUnsupportedError, defaultCSS, flatten, formatProperty, formatSelector, formatValue, generateStyleElement, parse, Sheet, stringify, supports, supportsProp, toCamel, toDashed, unit } from "./css/cssUtils.mjs";

export function css (styles) {
    return new Sheet(styles);
}

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
css.CSSRuleError = CSSRuleError;
css.CSSUnsupportedError = CSSUnsupportedError;
css.CSSStyleSheetError = CSSStyleSheetError;
css.config = config;
css.Sheet = Sheet;

export default css
