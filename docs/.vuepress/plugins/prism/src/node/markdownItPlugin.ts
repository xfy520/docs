import type { PluginWithOptions } from 'markdown-it';
import { hash } from '@vuepress/utils';
import type { PluginOptions } from '../shared';
import resolveLanguage from './resolveLanguage';
import resolveVPre from './resolveVPre';

const markdownItPlugin: PluginWithOptions<PluginOptions> = (md: markdownit, {
  lineNumbers = true,
  vPre = true,
}: PluginOptions = {}) => {

  md.renderer.rules.fence = (tokens, idx: number) => {
    const token = tokens[idx];

    const info = token.info ? md.utils.unescapeAll(token.info).trim() : '';
    const language = resolveLanguage(info);
    const useVPre = resolveVPre(info) ?? vPre;

    const key = `prism_${hash(idx)}`;
    const code = md.utils.escapeHtml(token.content);

    let encoded = encodeURIComponent(code);
    return `<ClientOnly><Prism id='${key}' code='${encoded}' language='${language.name}' :vPre='${useVPre}'></Prism></ClientOnly>`;
  }
}

export default markdownItPlugin;
