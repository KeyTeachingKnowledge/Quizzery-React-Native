import { EntryExitAnimationFunction, AnimationFunction, LayoutAnimationFunction } from './commonTypes';
export declare class BaseAnimationBuilder {
    durationV?: number;
    delayV?: number;
    randomizeDelay: boolean;
    callbackV?: (finished: boolean) => void;
    static createInstance: () => BaseAnimationBuilder;
    build: () => EntryExitAnimationFunction | LayoutAnimationFunction;
    static duration(durationMs: number): BaseAnimationBuilder;
    duration(durationMs: number): BaseAnimationBuilder;
    static delay(delayMs: number): BaseAnimationBuilder;
    delay(delayMs: number): BaseAnimationBuilder;
    static withCallback(callback: (finished: boolean) => void): BaseAnimationBuilder;
    withCallback(callback: (finsihed: boolean) => void): BaseAnimationBuilder;
    static getDuration(): number;
    getDuration(): number;
    static randomDelay(): BaseAnimationBuilder;
    randomDelay(): BaseAnimationBuilder;
    getDelay(): number;
    getDelayFunction(): AnimationFunction;
    static build(): EntryExitAnimationFunction | LayoutAnimationFunction;
}
