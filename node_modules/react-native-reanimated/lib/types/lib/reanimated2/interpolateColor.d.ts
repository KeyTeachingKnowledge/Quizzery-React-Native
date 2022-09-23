import { SharedValue } from './commonTypes';
interface InterpolateRGB {
    r: number[];
    g: number[];
    b: number[];
    a: number[];
}
interface InterpolateHSV {
    h: number[];
    s: number[];
    v: number[];
}
export declare const interpolateColor: (value: number, inputRange: readonly number[], outputRange: readonly (string | number)[], colorSpace?: 'RGB' | 'HSV') => string | number;
export declare enum ColorSpace {
    RGB = 0,
    HSV = 1
}
export interface InterpolateConfig {
    inputRange: readonly number[];
    outputRange: readonly (string | number)[];
    colorSpace: ColorSpace;
    cache: SharedValue<InterpolateRGB | InterpolateHSV | null>;
}
export declare function useInterpolateConfig(inputRange: readonly number[], outputRange: readonly (string | number)[], colorSpace?: ColorSpace): SharedValue<InterpolateConfig>;
export declare const interpolateSharableColor: (value: number, interpolateConfig: SharedValue<InterpolateConfig>) => string | number;
export {};
