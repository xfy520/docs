import { defineClientConfig } from '@vuepress/client';
import { onMounted, watch } from 'vue';
import { useDarkMode } from '@vuepress/theme-default/lib/client';

import type { PrismPluginType, PluginThemeType } from '../shared';

import 'prismjs/plugins/toolbar/prism-toolbar.min.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.min.css';
import 'prismjs/plugins/show-invisibles/prism-show-invisibles.min.css';
import 'prismjs/plugins/inline-color/prism-inline-color.min.css';
import 'prismjs/plugins/previewers/prism-previewers.min.css';
import './styles/index.scss';

declare const __PRISM_COMPONENT_NAME__: string;
declare const __PRISM_VERSION__: string;
declare const __PRISM_PLUGINS__: PrismPluginType;
declare const __PRISM_THEME__: PluginThemeType;

if (__PRISM_PLUGINS__) {
  if (__PRISM_PLUGINS__['line-numbers']) {
    import('prismjs/plugins/line-numbers/prism-line-numbers');
  }
  if (__PRISM_PLUGINS__['show-language']) {
    import('prismjs/plugins/show-language/prism-show-language');
  }
  if (__PRISM_PLUGINS__['line-highlight']) {
    import('prismjs/plugins/line-highlight/prism-line-highlight');
  }
  if (__PRISM_PLUGINS__['copy-to-clipboard']) {
    import('prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard');
  }
  if (__PRISM_PLUGINS__['download-button']) {
    import('./plugins/prism-download-button');
  }
  if (__PRISM_PLUGINS__['show-invisibles']) {
    import('prismjs/plugins/show-invisibles/prism-show-invisibles');
  }
  if (__PRISM_PLUGINS__['autolinker']) {
    import('prismjs/plugins/autolinker/prism-autolinker');
  }
  if (__PRISM_PLUGINS__['inline-color']) {
    import('prismjs/components/prism-css-extras');
    import('prismjs/plugins/inline-color/prism-inline-color');
  }
  if (__PRISM_PLUGINS__['previewers']) {
    import('prismjs/plugins/previewers/prism-previewers');
  }
}

import * as Prism from 'prismjs';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-less';


const PrismDefaultTheme = {
  'coy': true,
  'dark': true,
  'funky': true,
  'okaidia': true,
  'solarizedlight': true,
  'twilight': true,
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
      initPrismTheme(false);
      return () => null;
    }
  }]
})
