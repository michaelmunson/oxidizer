import { DeepProxy, isFn, isObj } from "../../utils/utils.mjs";

const configuration = {
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

export const cssConfig = new DeepProxy(configuration, {
    set (target, key, value) {
        if (key in target) {
            if (key === "properties" && !isObj(value)) throw new TypeError("css.config.properties requires type:object");
            else if (key === "unitDefaults" && !isObj(value)) throw new TypeError("css.config.unitDefaults requires type:object");
            else if (key.includes("Error") && !isFn(value)) throw new TypeError("css.config." + key + " requires type:function");

            target[key] = value;
            return true;
        }
    },
    deleteProperty (target, property) {
        if (target === configuration) throw new Error("Cannot delete permanent property \"" + property + "\"");
        else delete target[property];
    },
    get (target, property, reciever) {
        if (property === "standard") {
            return {
                properties: {
                    m: v => ({ margin: v }),
                    mt: v => ({ marginTop: v }),
                    mr: v => ({ marginRight: v }),
                    mb: v => ({ marginBottom: v }),
                    ml: v => ({ marginLeft: v }),
                    p: v => ({ padding: v }),
                    pt: v => ({ paddingTop: v }),
                    pr: v => ({ paddingRight: v }),
                    pb: v => ({ paddingBottom: v }),
                    pl: v => ({ paddingLeft: v }),
                    htwt: v => ({ height: v, width: v })
                },
                unitDefaults: {
                    margin: 'px',
                    padding: 'px',
                    height: '%',
                    width: '%',
                    borderRadius: 'px'
                }
            }
        }
        else return target[property]
    }
});

export default cssConfig;
