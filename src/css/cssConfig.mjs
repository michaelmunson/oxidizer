
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
    styleSheetError: function (e) {
        console.warn(e);
    }
}

export default cssConfig;
