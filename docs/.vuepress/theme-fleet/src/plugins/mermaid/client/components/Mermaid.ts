import { defineComponent, h, PropType, ref, toRefs, watchEffect } from 'vue';
import type { DarkModeRef } from '@vuepress/theme-default/lib/client';
import mermaid from 'mermaid/dist/mermaid.esm.min.mjs';
import type { MermaidPrposTypes } from '../../../../shared';

export const Mermaidjs = defineComponent({
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
      required: false,
      default: '',
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
  setup(props: MermaidPrposTypes) {
    const { id } = toRefs<MermaidPrposTypes>(props);
    const svgRef = ref('');
    const isDarkMode = props.useDarkMode();

    const render = () => {
      mermaid.render(id.value, props.code, (svg) => {
        svgRef.value = svg;
      });
    }

    watchEffect(() => {
      if (isDarkMode.value) {
        render()
      }
      if (!isDarkMode.value) {
        render()
      }
    })

    return () => {
      return h('div', {
        innerHTML: svgRef.value,
        class: 'vuepress-plugin-mermaid',
        style: {
          width: 'var(--content-width)',
          'text-align': 'center',
          'background-color': isDarkMode.value ? '#282c34' : '#efefef',
          ...props.style
        },
      })
    }
  }
})
