import { defineClientConfig } from '@vuepress/client';
import { useDarkMode } from '@vuepress/theme-default/lib/client';
import { h, watch } from 'vue';
import mermaid from 'mermaid/dist/mermaid.esm.min.mjs';
import { Mermaidjs } from './components';
import './styles/index.scss';
const defaultMermaidOptions = __MERMAID_DEFAULT_OPTIONS__;
export default defineClientConfig({
    enhance({ app }) {
        app.component(__MERMAID_COMPONENT_NAME__, (props) => {
            return h(Mermaidjs, {
                id: props.id,
                code: props.code,
                style: __MERMAID_DEFAULT_STYLE__,
                useDarkMode,
            });
        });
    },
    rootComponents: [{
            setup() {
                const isDarkMode = useDarkMode();
                const initialize = () => {
                    mermaid.initialize({
                        startOnLoad: true,
                        class: 'vuepress-plugin-mermaid-svg',
                        theme: isDarkMode.value ? 'dark' : 'forest',
                        ...defaultMermaidOptions,
                    });
                };
                initialize();
                watch(isDarkMode, () => {
                    initialize();
                });
                return () => null;
            }
        }]
});
