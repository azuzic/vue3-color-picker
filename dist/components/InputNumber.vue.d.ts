declare const _default: import('vue').DefineComponent<{
    label: {
        default: string;
        type: StringConstructor;
    };
    modelValue: {
        default: number;
        type: NumberConstructor;
    };
    min: {
        default: number;
        type: NumberConstructor;
    };
    max: {
        default: number;
        type: NumberConstructor;
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: number) => void;
}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    label: {
        default: string;
        type: StringConstructor;
    };
    modelValue: {
        default: number;
        type: NumberConstructor;
    };
    min: {
        default: number;
        type: NumberConstructor;
    };
    max: {
        default: number;
        type: NumberConstructor;
    };
}>> & {
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
}, {
    label: string;
    min: number;
    max: number;
    modelValue: number;
}, {}>;
export default _default;
