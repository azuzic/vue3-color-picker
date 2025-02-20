interface RGB {
    r: number;
    g: number;
    b: number;
}
interface CMYK {
    c: number;
    m: number;
    y: number;
    k: number;
}
declare const parseRgb: (rgbString: string) => {
    r: number;
    g: number;
    b: number;
} | null;
declare const parseRgba: (rgbaString: string) => {
    r: number;
    g: number;
    b: number;
    a: number;
} | null;
declare const hex8ToRgba: (hex8: string) => {
    r: number;
    g: number;
    b: number;
    a: number;
} | null;
declare const rgbaToHex8: (r: number, g: number, b: number, a: number) => string;
declare const hexToRgb: (hex: string) => {
    r: number;
    g: number;
    b: number;
} | null;
declare const rgbToHue: (r: number, g: number, b: number) => number;
declare const hsl2Rgb: (h: number, s: number, l: number) => number[];
declare const rgb2Hex: (r: number, g: number, b: number) => string;
declare const hsl2Hex: (h: number, s: number, l: number) => {
    rgb: number[];
    hexA: string;
};
declare const rgbToHsl: (r: number, g: number, b: number) => {
    h: number;
    s: number;
    l: number;
};
declare const hslToRgb: (h: number, s: number, l: number) => {
    r: number;
    g: number;
    b: number;
};
declare const hsvToRgb: (h: number, s: number, v: number) => {
    r: number;
    g: number;
    b: number;
};
declare const rgbToHsv: (r: number, g: number, b: number) => {
    h: number;
    s: number;
    v: number;
};
declare const hsvToHsl: (h: number, s: number, v: number) => {
    h: number;
    s: number;
    l: number;
};
declare const cmykToRgb: (c: number, m: number, y: number, k: number) => RGB;
declare const rgbToCmyk: (r: number, g: number, b: number) => CMYK;
export { hex8ToRgba, hexToRgb, hsl2Hex, hsl2Rgb, hslToRgb, parseRgb, parseRgba, rgb2Hex, rgbToHsl, rgbToHue, rgbaToHex8, hsvToRgb, rgbToHsv, hsvToHsl, cmykToRgb, rgbToCmyk, };
