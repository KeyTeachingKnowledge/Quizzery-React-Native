import { EasingFn } from '../../Easing';
import { EntryExitAnimationFunction, IEntryExitAnimationBuilder, KeyframeProps } from './commonTypes';
import { StyleProps } from '../../commonTypes';
export interface KeyframePoint {
    duration: number;
    value: number | string;
    easing?: EasingFn;
}
export interface ParsedKeyframesDefinition {
    initialValues: StyleProps;
    keyframes: Record<string, KeyframePoint[]>;
}
export declare class Keyframe implements IEntryExitAnimationBuilder {
    durationV?: number;
    delayV?: number;
    callbackV?: (finished: boolean) => void;
    definitions: Record<string, KeyframeProps>;
    constructor(definitions: Record<string, KeyframeProps>);
    private parseDefinitions;
    duration(durationMs: number): Keyframe;
    delay(delayMs: number): Keyframe;
    withCallback(callback: (finsihed: boolean) => void): Keyframe;
    private getDelayFunction;
    build: () => EntryExitAnimationFunction;
}
