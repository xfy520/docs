import { defineComponent, PropType, h } from "vue";
import type { PrismOptions } from "../../shared";

export const Prism = defineComponent({
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
      defalut: () => ('')
    },
    prismOptions: {
      type: Object as PropType<Partial<PrismOptions>>,
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
  setup() {
    return () => {
      return h('div')
    }
  }
});
