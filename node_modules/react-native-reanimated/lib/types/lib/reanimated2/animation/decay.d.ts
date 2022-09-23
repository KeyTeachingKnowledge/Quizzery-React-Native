import { Animation, AnimationCallback, AnimationObject, AnimatableValue, Timestamp } from '../commonTypes';
interface DecayConfig {
    deceleration?: number;
    velocityFactor?: number;
    clamp?: number[];
    velocity?: number;
}
export interface DecayAnimation extends Animation<DecayAnimation> {
    lastTimestamp: Timestamp;
    startTimestamp: Timestamp;
    initialVelocity: number;
    velocity: number;
    current: AnimatableValue;
}
export interface InnerDecayAnimation extends Omit<DecayAnimation, 'current'>, AnimationObject {
    current: number;
}
export declare function withDecay(userConfig: DecayConfig, callback?: AnimationCallback): Animation<DecayAnimation>;
export {};
