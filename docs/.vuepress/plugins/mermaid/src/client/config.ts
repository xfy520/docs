import { defineClientConfig } from '@vuepress/client';

import { h } from 'vue';
import { Mermaid } from './components';

declare const __MERMAID_COMPONENT_NAME__: string;
declare const __MERMAID_DEFAULT_OPTIONS__: {};
declare const __MERMAID_DEFAULT_STYLE__: {};

const defaultMermaidOptions = __MERMAID_DEFAULT_OPTIONS__;

export default defineClientConfig({
  async enhance({ app }) {
    app.component(__MERMAID_COMPONENT_NAME__, (props) => {
      return h(Mermaid, {
        id: props.id,
        code: props.code,
        style: __MERMAID_DEFAULT_STYLE__,
        options: defaultMermaidOptions,
      })
    })
  },
})
