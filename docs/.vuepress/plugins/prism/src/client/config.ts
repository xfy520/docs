import { defineClientConfig } from '@vuepress/client';
import { onBeforeMount, onMounted, watch } from 'vue';
import { useDarkMode } from '@vuepress/theme-default/lib/client';
import * as Prism from 'prismjs';

import 'prismjs/components/prism-css-extras';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/treeview/prism-treeview.min.css';

import './plugins/prism-plugin';
import './language/prism-languages';

import type { PluginThemeType } from '../shared';

import './styles/index.scss';

declare const __PRISM_COMPONENT_NAME__: string;
declare const __PRISM_VERSION__: string;
declare const __PRISM_THEME__: PluginThemeType;
declare const __PRISM_NORMALIZE_WHITESPACE__: {};

const PrismDefaultTheme = {
  'coy': true,
  'dark': true,
  'funky': true,
  'okaidia': true,
  'solarizedlight': true,
  'twilight': true,
}

if (typeof __PRISM_NORMALIZE_WHITESPACE__ !== 'undefined') {
  Prism.plugins.NormalizeWhitespace.setDefaults(__PRISM_NORMALIZE_WHITESPACE__);
}

export default defineClientConfig({
  enhance({ app }) {
    app.component(__PRISM_COMPONENT_NAME__, {
      setup(_, { slots }) {
        const { default: $default } = slots;
        onMounted(() => {
          Prism.highlightAll();
        });
        return $default;
      },
    })
  },
  rootComponents: [{
    setup() {
      const isDarkMode = useDarkMode();
      const initPrismTheme = (isDelete: boolean) => {
        const createStyleElement = (href: string) => {
          const styleElem = document.createElement('link');
          styleElem.id = 'prismPluginThemeStyleElem';
          styleElem.rel = 'stylesheet';
          styleElem.href = href;
          document.head.insertBefore(styleElem, document.head.firstChild);
        }
        if (!__PRISM_THEME__ || !PrismDefaultTheme[__PRISM_THEME__]) {
          const prismPluginThemeStyleElem = document.getElementById('prismPluginThemeStyleElem');
          if (isDelete && prismPluginThemeStyleElem) {
            prismPluginThemeStyleElem.remove();
          }
          if (!prismPluginThemeStyleElem || isDelete) {
            if (isDarkMode.value) {
              createStyleElement(`https://cdn.bootcdn.net/ajax/libs/prism/${__PRISM_VERSION__}/themes/prism-tomorrow.min.css`);
            } else {
              createStyleElement(`https://cdn.bootcdn.net/ajax/libs/prism/${__PRISM_VERSION__}/themes/prism-coy.min.css`);
            }
          }
        } else {
          const prismPluginThemeStyleElem = document.getElementById('prismPluginThemeStyleElem');
          if (!prismPluginThemeStyleElem) {
            createStyleElement(`https://cdn.bootcdn.net/ajax/libs/prism/${__PRISM_VERSION__}/themes/prism-${__PRISM_THEME__}.min.css`);
          }
        }
      }
      watch(isDarkMode, () => {
        initPrismTheme(true);
      })
      onBeforeMount(() => {
        initPrismTheme(false);
      })
      return () => null;
    }
  }]
})