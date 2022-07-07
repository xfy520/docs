import { defineComponent, h, PropType, ref, toRefs, watchEffect } from 'vue';
import type { MermaidOptions, PrposTypes } from '../../shared';
import { useDarkMode } from '@vuepress/theme-default/lib/client';

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
    options: {
      type: Object as PropType<Partial<MermaidOptions>>,
      required: false,
      default: () => ({}),
    },
    style: {
      type: Object,
      required: false,
      default: () => ({}),
    },
  },
  setup(props) {
    const { id, code, options, style } = toRefs<PrposTypes>(props);
    const svgRef = ref();
    console.log(useDarkMode())

    watchEffect(() => {
      if (code.value) {
        import('mermaid/dist/mermaid.min').then(mermaid => {
          mermaid.initialize({
            startOnLoad: true,
            ...options.value,
            // theme: props.isDarkMode ? 'dark' : 'forest',
          });
          mermaid.render(id.value, decodeURIComponent(code.value as string), (svg) => {
            svgRef.value = svg;
          });
        })
      }
    });

    return () => {
      return svgRef.value ? h('div', {
        innerHTML: svgRef.value,
        style: {
          width: '100%',
          'text-align': 'center',
          // 'background-color': props.isDarkMode ? '#282c34' : '#efefef',
          ...style.value
        },
      }) : null
    }
  }
})
