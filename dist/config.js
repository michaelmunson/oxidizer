"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Configuration = void 0;
const CONFIG = {
    components: {
        autoUpgrade: false,
        shadowInit: { mode: 'open' }
    }
};
var Configuration;
(function (Configuration) {
    Configuration.configure = (config) => {
        let key;
        for (key in config) {
            Object.assign(CONFIG, config[key]);
        }
        return CONFIG;
    };
    Configuration.get = () => CONFIG;
})(Configuration || (exports.Configuration = Configuration = {}));
