export interface Configuration {
    components: Configuration.ComponentsConfiguration;
}
export declare namespace Configuration {
    interface ComponentsConfiguration {
        /**
         * @description automatically calls `customElements.upgrade` upon component creation
         * @default false*/
        autoUpgrade: boolean;
    }
    const configure: (config: Partial<Configuration>) => Configuration;
    const get: () => Configuration;
}
