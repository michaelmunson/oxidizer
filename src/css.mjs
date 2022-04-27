import { compile, config, configure, cssData, CSSRuleError, CSSStyleSheetError, CSSUnsupportedError, defaultCSS, flatten, formatProperty, formatSelector, formatValue, generateStyleElement, parse, Sheet, stringify, supports, supportsProp, toCamel, toDashed, unit } from "./css/cssUtils.mjs";

export default function css (styles) {
    return {
        text: stringify(styles),
        sheet: new Sheet(styles)
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
