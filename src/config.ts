const CONFIG:Configuration = {
    components: {
        autoUpgrade: false,
        shadowInit: {mode: 'open'}
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
        autoUpgrade: boolean;
        /**
         * @description default state of shadow initialization options
         * @default {mode: 'open'}
         */
        shadowInit: ShadowRootInit;
    }

    export const configure = (config:{[K in keyof Configuration]?: Partial<Configuration[K]>}) => {
        let key: keyof Configuration;
        for (key in config){
            Object.assign(CONFIG, config[key]);
        }
        return CONFIG;
    }

    export const get = () => CONFIG;
}


