import { EasingFn, EasingFactoryFn } from '../Easing';
import { Animation, AnimationCallback, Timestamp, AnimatableValue } from '../commonTypes';
interface TimingConfig {
    duration?: number;
    easing?: EasingFn | EasingFactoryFn;
}
export interface TimingAnimation extends Animation<TimingAnimation> {
    type: string;
    easing: EasingFn;
    startValue: AnimatableValue;
    startTime: Timestamp;
    progress: number;
    toValue: AnimatableValue;
    current: AnimatableValue;
}
export interface InnerTimingAnimation extends Omit<TimingAnimation, 'toValue' | 'current'> {
    toValue: number;
    current: number;
}
export declare function withTiming(toValue: AnimatableValue, userConfig?: TimingConfig, callback?: AnimationCallback): Animation<TimingAnimation>;
export {};
