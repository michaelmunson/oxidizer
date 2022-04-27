import { isObj } from "../utils/utils.mjs";
import { compile, config, configure, cssData, CSSRuleError, CSSStyleSheetError, CSSUnsupportedError, defaultCSS, flatten, formatProperty, formatSelector, formatValue, generateStyleElement, parse, Sheet, stringify, supports, supportsProp, toCamel, toDashed, unit } from "./css/cssUtils.mjs";

export function css (strings, ...values) {
    let cssText;

    if (isObj(strings)) cssText = stringify(strings);

    else {
        cssText = [...strings];
        for (const i in values) {
            cssText[i] += values[i];
        }
        cssText = cssText.join("");
    }

    return {
        cssText,
        strings,
        values,
        sheet: new Sheet(cssText),
        csslit: true
    }
}

Object.assign(
    css, {
        config,
        defaultCSS,
        cssData,
        configure,
        toDashed,
        toCamel,
        formatSelector,
        formatProperty,
        formatValue,
        supports,
        supportsProp,
        flatten,
        stringify,
        parse,
        generateStyleElement,
        unit,
        compile,
        CSSRuleError,
        CSSStyleSheetError,
        CSSUnsupportedError,
        Sheet
    }
);

export default css;

/*
css.config = config;
css.defaultCSS = defaultCSS;
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
css.Sheet = Sheet;
*/
