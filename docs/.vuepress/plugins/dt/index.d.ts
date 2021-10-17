import type { PluginFunction, App, PluginObject } from '@vuepress/core';
declare type optionsType = {
    languages?: Array<string>;
    plugins?: Array<string>;
    theme?: string;
    css?: boolean;
};
declare const _default: (options: PluginFunction<optionsType>, app: App) => PluginObject;
export default _default;
export { optionsType, };
