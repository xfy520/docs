import { defineComponent, h, PropType, ref, toRefs, watch, watchEffect } from 'vue';
import type { DarkModeRef } from '@vuepress/theme-default/lib/client';
import type { MermaidOptions, PrposTypes } from '../../shared';

export const Mermaid = defineComponent({
  name: 'Mermaid',
  props: {
    id: {
      type: String,
      required: false,
      default() {
        return `mermaid_${Date.now()}`;
      }
    },
    code: {
      type: String,
      required: true,
      defalut: () => ('')
    },
    mermaidOptions: {
      type: Object as PropType<Partial<MermaidOptions>>,
      required: false,
      default: () => ({}),
    },
    style: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    useDarkMode: {
      type: Function as PropType<() => DarkModeRef>,
      required: true,
    }
  },
  setup(props: PrposTypes) {
    const { id, code, mermaidOptions, style, } = toRefs<PrposTypes>(props);
    const svgRef = ref();
    const isDarkMode = props.useDarkMode();

    const initialize = () => {
      import('mermaid/dist/mermaid.min').then(mermaid => {
        mermaid.initialize({
          startOnLoad: true,
          theme: isDarkMode.value ? 'dark' : 'forest',
          ...mermaidOptions.value,
        });
        mermaid.render(id.value, decodeURIComponent(code.value as string), (svg) => {
          svgRef.value = svg;
        });
      })
    }

    watch(isDarkMode, () => {
      initialize();
    })

    initialize();

    return () => {
      return svgRef.value ? h('div', {
        innerHTML: svgRef.value,
        style: {
          width: '100%',
          'text-align': 'center',
          'background-color': isDarkMode.value ? '#282c34' : '#efefef',
          ...style.value
        },
      }) : null
    }
  }
})
