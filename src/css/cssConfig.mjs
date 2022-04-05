import { DeepProxy, isFn, isObj } from "../../utils/utils.mjs";

const cssConfig = {
    properties: {},
    unitDefaults: {},
    handleEvents: false,
    declarationError: function (e) {
        console.warn(e);
    },
    ruleError: function (e) {
        console.warn(e);
    },
    onStyleSheetError: function (e) {
        console.warn(e);
    }
}



export default cssConfig;
