import type { Plugin } from 'vuepress';
import { path } from '@vuepress/utils';

import markdownItPlugin from './markdownItPlugin';
import type { MermaidPluginOptions } from '../shared';

export const mermaidPlugin = ({
  name = 'Mermaid',
  mermaidOptions = {},
  style = {},
}: MermaidPluginOptions = {}): Plugin => {
  return {
    name: 'vuepress-plugin-mermaid',
    extendsMarkdown(md) {
      md.use(markdownItPlugin, {
        name, mermaidOptions
      });
    },
    clientConfigFile: path.resolve(__dirname, '../client/config.js'),
    define: {
      __MERMAID_COMPONENT_NAME__: name,
      __MERMAID_DEFAULT_OPTIONS__: mermaidOptions,
      __MERMAID_DEFAULT_STYLE__: style,
    },
  }
}
