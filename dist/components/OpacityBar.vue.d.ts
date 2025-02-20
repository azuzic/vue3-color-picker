declare const _default: import('vue').DefineComponent<{
    modelValue: {
        default: number;
        type: NumberConstructor;
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: number) => void;
    onInput: (event: Event) => void;
}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: {
        default: number;
        type: NumberConstructor;
    };
}>> & {
    onOnInput?: ((event: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
}, {
    modelValue: number;
}, {}>;
export default _default;
