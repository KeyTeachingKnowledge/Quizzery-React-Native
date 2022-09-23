export declare enum Extrapolation {
    IDENTITY = "identity",
    CLAMP = "clamp",
    EXTEND = "extend"
}
export interface InterpolatedNode {
    __nodeId: number;
}
export interface ExtrapolationConfig {
    extrapolateLeft?: Extrapolation | string;
    extrapolateRight?: Extrapolation | string;
}
export declare type ExtrapolationType = ExtrapolationConfig | Extrapolation | string | undefined;
export declare function interpolate(x: number | InterpolatedNode, input: readonly number[], output: readonly number[], type?: ExtrapolationType): number;
