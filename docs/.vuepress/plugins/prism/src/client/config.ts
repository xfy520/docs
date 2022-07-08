import { defineClientConfig } from '@vuepress/client';
import { useDarkMode } from '@vuepress/theme-default/lib/client';
import { h } from 'vue';
import type { PrposTypes, PluginOptions } from '../shared';
import { PrismPlugin } from './components';

declare const __VUEPRESS_SSR__: boolean;
declare const __PRISM_COMPONENT_NAME__: string;
declare const __PRISM_DEFAULT_OPTIONS__: {};
declare const __PLUGIN_DEFAULT_OPTIONS__: PluginOptions;
declare const __PRISM_DEFAULT_STYLE__: {};

const defaultPrismOptions = __PRISM_DEFAULT_OPTIONS__;
const defaultPluginOptions = __PLUGIN_DEFAULT_OPTIONS__;

export default defineClientConfig({
  async enhance({ app }) {
    // @ts-ignore
    // if (!__VUEPRESS_SSR__) {
    //   const prism = await import('./components');
    //   app.component(__PRISM_COMPONENT_NAME__, (props: PrposTypes) => {
    //     return h(prism.Prism, {
    //       id: props.id,
    //       code: props.code,
    //       pluginOptions: props.pluginOptions,
    //       style: __PRISM_DEFAULT_STYLE__,
    //       prismOptions: defaultPrismOptions,
    //       useDarkMode
    //     })
    //   })
    // }
    app.component(__PRISM_COMPONENT_NAME__, (props: PrposTypes) => {
      return h(PrismPlugin, {
        id: props.id,
        code: props.code,
        language: props.language,
        vPre: props.vPre,
        lineNumbers: defaultPluginOptions.lineNumbers,
        style: __PRISM_DEFAULT_STYLE__,
        prismOptions: defaultPrismOptions,
        useDarkMode
      })
    })
  },
})
