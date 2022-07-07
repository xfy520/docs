import { defineClientConfig } from '@vuepress/client';
import { useDarkMode } from '@vuepress/theme-default/lib/client';
import { h } from 'vue';

declare const __MERMAID_COMPONENT_NAME__: string;
declare const __MERMAID_DEFAULT_OPTIONS__: {};
declare const __MERMAID_DEFAULT_STYLE__: {};

const defaultMermaidOptions = __MERMAID_DEFAULT_OPTIONS__;

export default defineClientConfig({
  async enhance({ app  }) {
    // @ts-ignore
    if (!__VUEPRESS_SSR__) {

      const mermaid = await import('./components')
      app.component(__MERMAID_COMPONENT_NAME__, (props) =>{
        const isDarkMode = useDarkMode();
        return h(mermaid.Mermaid, {
          id: props.id,
          graph: props.graph,
          isDarkMode: isDarkMode.value,
          style: __MERMAID_DEFAULT_STYLE__,
          options: defaultMermaidOptions,
        })
      })
    }
  },
})
