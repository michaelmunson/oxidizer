export interface Configuration {
    components: Configuration.ComponentsConfiguration;
}
export declare namespace Configuration {
    interface ComponentsConfiguration {
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
    const configure: (config: { [K in keyof Configuration]?: Partial<Configuration[K]>; }) => Configuration;
    const get: () => Configuration;
}
