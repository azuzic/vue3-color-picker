import { Mode, InputType, Local, IconClasses } from '../core/types/types.ts';

declare const _default: import('vue').DefineComponent<{
    mode: {
        default: string;
        type: () => Mode;
    };
    inputType: {
        default: string;
        type: () => InputType;
    };
    gradientType: {
        default: string;
        type: StringConstructor;
    };
    showInputMenu: {
        default: boolean;
        type: BooleanConstructor;
    };
    showPickerMode: {
        default: boolean;
        type: BooleanConstructor;
    };
    angle: {
        default: number;
        type: NumberConstructor;
    };
    percentageX: {
        default: number;
        type: NumberConstructor;
    };
    percentageY: {
        default: number;
        type: NumberConstructor;
    };
    percentageSizeX: {
        default: number;
        type: NumberConstructor;
    };
    percentageSizeY: {
        default: number;
        type: NumberConstructor;
    };
    customSize: {
        default: boolean;
        type: BooleanConstructor;
    };
    local: {
        default: {};
        type: () => Local;
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
    onPickerChangeMode: (value: Mode) => void;
    onChangeMode: (value: string) => void;
    onChangeInputType: (value: InputType) => void;
    onDeleteColor: () => void;
    onClickEyeDropper: () => void;
    "update:angle": (value: number) => void;
    "update:percentageX": (value: number) => void;
    "update:percentageY": (value: number) => void;
    "update:percentageSizeX": (value: number) => void;
    "update:percentageSizeY": (value: number) => void;
    "update:customSize": (value: boolean) => void;
    onInput: () => void;
}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    mode: {
        default: string;
        type: () => Mode;
    };
    inputType: {
        default: string;
        type: () => InputType;
    };
    gradientType: {
        default: string;
        type: StringConstructor;
    };
    showInputMenu: {
        default: boolean;
        type: BooleanConstructor;
    };
    showPickerMode: {
        default: boolean;
        type: BooleanConstructor;
    };
    angle: {
        default: number;
        type: NumberConstructor;
    };
    percentageX: {
        default: number;
        type: NumberConstructor;
    };
    percentageY: {
        default: number;
        type: NumberConstructor;
    };
    percentageSizeX: {
        default: number;
        type: NumberConstructor;
    };
    percentageSizeY: {
        default: number;
        type: NumberConstructor;
    };
    customSize: {
        default: boolean;
        type: BooleanConstructor;
    };
    local: {
        default: {};
        type: () => Local;
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
    onOnInput?: (() => any) | undefined;
    onOnPickerChangeMode?: ((value: Mode) => any) | undefined;
    onOnChangeMode?: ((value: string) => any) | undefined;
    onOnChangeInputType?: ((value: InputType) => any) | undefined;
    onOnDeleteColor?: (() => any) | undefined;
    onOnClickEyeDropper?: (() => any) | undefined;
    "onUpdate:angle"?: ((value: number) => any) | undefined;
    "onUpdate:percentageX"?: ((value: number) => any) | undefined;
    "onUpdate:percentageY"?: ((value: number) => any) | undefined;
    "onUpdate:percentageSizeX"?: ((value: number) => any) | undefined;
    "onUpdate:percentageSizeY"?: ((value: number) => any) | undefined;
    "onUpdate:customSize"?: ((value: boolean) => any) | undefined;
}, {
    inputType: InputType;
    mode: Mode;
    gradientType: string;
    showInputMenu: boolean;
    showPickerMode: boolean;
    angle: number;
    percentageX: number;
    percentageY: number;
    percentageSizeX: number;
    percentageSizeY: number;
    customSize: boolean;
    local: Local;
    iconClasses: IconClasses;
}, {}>;
export default _default;
