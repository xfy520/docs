import { defineClientConfig } from '@vuepress/client';

import { h } from 'vue';

declare const __PRISM_COMPONENT_NAME__: string;
declare const __PRISM_DEFAULT_OPTIONS__: {};
declare const __PRISM_DEFAULT_STYLE__: {};

const defaultPrismOptions = __PRISM_DEFAULT_OPTIONS__;

export default defineClientConfig({
  async enhance({ app  }) {
    // @ts-ignore
    if (!__VUEPRESS_SSR__) {
      const prism = await import('./components')
      app.component(__PRISM_COMPONENT_NAME__, (props) =>{
        return h(prism.Prism, {
          id: props.id,
          code: props.code,
          style: __PRISM_DEFAULT_STYLE__,
          options: defaultPrismOptions,
        })
      })
    }
  },
})
