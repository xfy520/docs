import type { Plugin } from 'vuepress';

import markdownItPlugin from './markdownItPlugin';

export interface MermaidPluginOptions {
}

export const mermaidPlugin = ({ }: MermaidPluginOptions = {}): Plugin => ({
  name: 'vuepress-plugin-mermaid',
  extendsMarkdown(md) {
    md.use(markdownItPlugin)
  },
})
