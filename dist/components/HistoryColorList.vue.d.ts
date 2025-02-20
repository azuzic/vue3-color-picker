import { IconClasses } from '../core/types/types.ts';

declare const _default: import('vue').DefineComponent<{
    colorListCount: {
        default: number;
        type: NumberConstructor;
    };
    hexVal: {
        default: string;
        type: StringConstructor;
    };
    title: {
        default: string;
        type: StringConstructor;
    };
    iconClasses: {
        default: {
            ruler: string;
            eyeDroper: string;
            arrowDown: string;
            save: string;
            delete: string;
        };
        type: () => IconClasses;
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "color-item-click": (color: string) => void;
}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    colorListCount: {
        default: number;
        type: NumberConstructor;
    };
    hexVal: {
        default: string;
        type: StringConstructor;
    };
    title: {
        default: string;
        type: StringConstructor;
    };
    iconClasses: {
        default: {
            ruler: string;
            eyeDroper: string;
            arrowDown: string;
            save: string;
            delete: string;
        };
        type: () => IconClasses;
    };
}>> & {
    "onColor-item-click"?: ((color: string) => any) | undefined;
}, {
    title: string;
    iconClasses: IconClasses;
    colorListCount: number;
    hexVal: string;
}, {}>;
export default _default;
