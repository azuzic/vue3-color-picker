import { InputType } from '../core/types/types.ts';

declare const _default: import('vue').DefineComponent<{
    iconClass: {
        default: string;
        type: StringConstructor;
    };
    inputType: {
        default: string;
        type: () => InputType;
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    onChangeInputName: (value: InputType) => void;
}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    iconClass: {
        default: string;
        type: StringConstructor;
    };
    inputType: {
        default: string;
        type: () => InputType;
    };
}>> & {
    onOnChangeInputName?: ((value: InputType) => any) | undefined;
}, {
    iconClass: string;
    inputType: InputType;
}, {}>;
export default _default;
