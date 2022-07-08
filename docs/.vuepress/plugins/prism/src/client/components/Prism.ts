import { defineComponent, PropType, h, toRefs } from 'vue';
import type { DarkModeRef } from '@vuepress/theme-default/lib/client';
import  * as Prism from 'prismjs';
import * as rawLoadLanguages from 'prismjs/components/index';

import type { PrismOptions, PrposTypes } from '../../shared';

// @ts-ignore
rawLoadLanguages.silent = true;

const loadLanguages = (languages?: Array<string>) => {
  const langsToLoad = languages?.filter((item) => !Prism.languages[item]);
  if (langsToLoad?.length) {
    rawLoadLanguages(langsToLoad);
  }
}

export const PrismPlugin = defineComponent({
  name: 'Prism',
  props: {
    id: {
      type: String,
      required: false,
      default() {
        return `prism_${Date.now()}`;
      }
    },
    code: {
      type: String,
      required: true,
      defalut: '',
    },
    language: {
      type: String,
      required: true,
      defalut: '',
    },
    vPre: {
      type: Boolean,
      required: true,
      defalut: true,
    },
    lineNumbers: {
      type: [Boolean, Number],
      required: true,
      defalut: true,
    },
    prismOptions: {
      type: Object as PropType<Partial<PrismOptions>>,
      required: false,
      default: {},
    },
    style: {
      type: Object,
      required: false,
      default: {},
    },
    useDarkMode: {
      type: Function as PropType<() => DarkModeRef>,
      required: true,
    }
  },
  setup(props: PrposTypes) {
    const { id, code, language, style } = toRefs<PrposTypes>(props);
    let prismLang = Prism.languages[language.value];
    if (!prismLang) {
      loadLanguages([language.value]);
      prismLang = Prism.languages[language.value];
    }
    console.log(Prism.highlight(code.value, prismLang, language.value))
    return () => {
      return h('div', null, decodeURIComponent(code.value))
    }
  }
});
