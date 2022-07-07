import { defineComponent, h, PropType, ref, toRefs, watchEffect } from 'vue';
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
    graph: {
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
    isDarkMode: {
      type: Boolean,
      required: true,
    }
  },
  setup(props) {
    const { id, graph, options, style } = toRefs<PrposTypes>(props);


    const svgRef = ref();

    watchEffect(() => {
      if (graph.value) {
        import('mermaid/dist/mermaid.min').then(mermaid => {
          mermaid.initialize({
            startOnLoad: true,
            ...options.value,
            theme: props.isDarkMode ? 'dark' : 'forest',
          });
          mermaid.render(id.value, decodeURIComponent(graph.value as string), (svg) => {
            svgRef.value = svg;
          });
        })
      }
    })
    return () => {
      return svgRef.value ? h('div', {
        innerHTML: svgRef.value,
        style: {
          width: '100%',
          'text-align': 'center',
          'background-color': props.isDarkMode ? '#282c34' : '#efefef',
          ...style.value
        },
      }) : h('div')
    }
  }
})
