/**
 * Copied from:
 * react-native/Libraries/StyleSheet/normalizeColor.js
 * react-native/Libraries/StyleSheet/processColor.js
 * https://github.com/wcandillon/react-native-redash/blob/master/src/Colors.ts
 */
interface RGB {
    r: number;
    g: number;
    b: number;
}
interface HSV {
    h: number;
    s: number;
    v: number;
}
export declare const opacity: (c: number) => number;
export declare const red: (c: number) => number;
export declare const green: (c: number) => number;
export declare const blue: (c: number) => number;
export declare const rgbaColor: (r: number, g: number, b: number, alpha?: number) => number | string;
export declare function RGBtoHSV(rgb: RGB): HSV;
export declare function RGBtoHSV(r: number, g: number, b: number): HSV;
export declare const hsvToColor: (h: number, s: number, v: number) => number | string;
export declare function processColorInitially(color: unknown): number | null | undefined;
export declare function isColor(value: unknown): boolean;
export declare function processColor(color: unknown): number | null | undefined;
export declare type ParsedColorArray = [number, number, number, number];
export declare function convertToHSVA(color: unknown): ParsedColorArray;
export declare function toRGBA(HSVA: ParsedColorArray): string;
export {};
