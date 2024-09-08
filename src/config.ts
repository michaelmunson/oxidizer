const CONFIG:Configuration = {
    components: {
        autoUpgrade: false
    }
};

export interface Configuration {
    components: Configuration.ComponentsConfiguration;
}

export namespace Configuration {
    export interface ComponentsConfiguration {
        /**
         * @description automatically calls `customElements.upgrade` upon component creation
         * @default false*/
        autoUpgrade: boolean
    }

    export const configure = (config:Partial<Configuration>) => {
        let key: keyof Configuration;
        for (key in config){
            Object.assign(CONFIG, config[key]);
        }
        return CONFIG;
    }

    export const get = () => CONFIG;
}


