import { PropType } from 'vue';
import type { DarkModeRef } from '@vuepress/theme-default/lib/client';
export declare const Mermaidjs: import("vue").DefineComponent<{
    id: {
        type: StringConstructor;
        required: false;
        default(): string;
    };
    code: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    style: {
        type: ObjectConstructor;
        required: false;
        default: {};
    };
    useDarkMode: {
        type: PropType<() => DarkModeRef>;
        required: true;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: StringConstructor;
        required: false;
        default(): string;
    };
    code: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    style: {
        type: ObjectConstructor;
        required: false;
        default: {};
    };
    useDarkMode: {
        type: PropType<() => DarkModeRef>;
        required: true;
    };
}>>, {
    id: string;
    code: string;
    style: Record<string, any>;
}>;
