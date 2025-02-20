import { Mode, ColorType, Theme, InputType, Local, IconClasses, GradientMode, ModelValue } from '../core/types/types.ts';

declare const _default: import('vue').DefineComponent<{
    modelValue: {
        default: string;
        type: () => ModelValue;
    };
    mode: {
        default: string;
        type: () => Mode;
    };
    type: {
        default: string;
        type: () => ColorType;
    };
    inputType: {
        default: string;
        type: () => InputType;
    };
    theme: {
        default: string;
        type: () => Theme;
    };
    colorListCount: {
        default: number;
        type: NumberConstructor;
    };
    showColorList: {
        default: boolean;
        type: BooleanConstructor;
    };
    showEyeDrop: {
        default: boolean;
        type: BooleanConstructor;
    };
    showPickerMode: {
        default: boolean;
        type: BooleanConstructor;
    };
    showAlpha: {
        default: boolean;
        type: BooleanConstructor;
    };
    showInputMenu: {
        default: boolean;
        type: BooleanConstructor;
    };
    showInputSet: {
        default: boolean;
        type: BooleanConstructor;
    };
    disabled: {
        default: boolean;
        type: BooleanConstructor;
    };
    gradientMode: {
        default: string;
        type: () => GradientMode;
    };
    local: {
        default: {
            angle: string;
            positionX: string;
            positionY: string;
            customSize: boolean;
            sizeX: string;
            sizeY: string;
            solid: string;
            gradient: string;
            linear: string;
            radial: string;
            colorPalette: string;
            btnSaveLabel: string;
            btnCancelLabel: string;
        };
        type: () => Local;
    };
    iconClasses: {
        default: {
            linear: string;
            radial: string;
            ruler: string;
            eyeDroper: string;
            inputMenu: string;
            save: string;
            delete: string;
        };
        type: () => IconClasses;
    };
    showButtons: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string) => void;
}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: {
        default: string;
        type: () => ModelValue;
    };
    mode: {
        default: string;
        type: () => Mode;
    };
    type: {
        default: string;
        type: () => ColorType;
    };
    inputType: {
        default: string;
        type: () => InputType;
    };
    theme: {
        default: string;
        type: () => Theme;
    };
    colorListCount: {
        default: number;
        type: NumberConstructor;
    };
    showColorList: {
        default: boolean;
        type: BooleanConstructor;
    };
    showEyeDrop: {
        default: boolean;
        type: BooleanConstructor;
    };
    showPickerMode: {
        default: boolean;
        type: BooleanConstructor;
    };
    showAlpha: {
        default: boolean;
        type: BooleanConstructor;
    };
    showInputMenu: {
        default: boolean;
        type: BooleanConstructor;
    };
    showInputSet: {
        default: boolean;
        type: BooleanConstructor;
    };
    disabled: {
        default: boolean;
        type: BooleanConstructor;
    };
    gradientMode: {
        default: string;
        type: () => GradientMode;
    };
    local: {
        default: {
            angle: string;
            positionX: string;
            positionY: string;
            customSize: boolean;
            sizeX: string;
            sizeY: string;
            solid: string;
            gradient: string;
            linear: string;
            radial: string;
            colorPalette: string;
            btnSaveLabel: string;
            btnCancelLabel: string;
        };
        type: () => Local;
    };
    iconClasses: {
        default: {
            linear: string;
            radial: string;
            ruler: string;
            eyeDroper: string;
            inputMenu: string;
            save: string;
            delete: string;
        };
        type: () => IconClasses;
    };
    showButtons: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}, {
    inputType: InputType;
    type: ColorType;
    mode: Mode;
    showInputMenu: boolean;
    showPickerMode: boolean;
    local: Local;
    iconClasses: IconClasses;
    modelValue: ModelValue;
    colorListCount: number;
    theme: Theme;
    showColorList: boolean;
    showEyeDrop: boolean;
    showAlpha: boolean;
    showInputSet: boolean;
    disabled: boolean;
    gradientMode: GradientMode;
    showButtons: boolean;
}, {}>;
export default _default;
