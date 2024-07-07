import { defineComponent, h, ref, toRefs, watchEffect } from 'vue';
import mermaid from 'mermaid/dist/mermaid.esm.min.mjs';
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
            type: Function,
            required: true,
        }
    },
    setup(props) {
        const { id } = toRefs(props);
        const svgRef = ref('');
        const isDarkMode = props.useDarkMode();
        const render = () => {
            mermaid.render(id.value, props.code, (svg) => {
                svgRef.value = svg;
            });
        };
        watchEffect(() => {
            if (isDarkMode.value) {
                render();
            }
            if (!isDarkMode.value) {
                render();
            }
        });
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
            });
        };
    }
});
