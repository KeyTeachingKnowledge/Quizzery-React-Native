import { Animation, AnimationCallback, AnimatableValue, Timestamp } from '../commonTypes';
interface SpringConfig {
    mass?: number;
    stiffness?: number;
    overshootClamping?: boolean;
    restDisplacementThreshold?: number;
    restSpeedThreshold?: number;
    velocity?: number;
    damping?: number;
}
export interface SpringAnimation extends Animation<SpringAnimation> {
    current: AnimatableValue;
    toValue: AnimatableValue;
    velocity: number;
    lastTimestamp: Timestamp;
}
export interface InnerSpringAnimation extends Omit<SpringAnimation, 'toValue' | 'current'> {
    toValue: number;
    current: number;
}
export declare function withSpring(toValue: AnimatableValue, userConfig?: SpringConfig, callback?: AnimationCallback): Animation<SpringAnimation>;
export {};
