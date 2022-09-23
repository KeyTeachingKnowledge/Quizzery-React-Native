import { NextAnimation, DelayAnimation, RepeatAnimation, SequenceAnimation, StyleLayoutAnimation } from './commonTypes';
import { AnimatedStyle, SharedValue, AnimatableValue, Animation, AnimationObject } from '../commonTypes';
export declare type UserUpdater = () => AnimatedStyle;
export declare function initialUpdaterRun<T>(updater: () => T): T;
declare type AnimationToDecoration<T extends AnimationObject | StyleLayoutAnimation> = T extends StyleLayoutAnimation ? Record<string, unknown> : T extends DelayAnimation ? NextAnimation<DelayAnimation> : T extends RepeatAnimation ? NextAnimation<RepeatAnimation> : T extends SequenceAnimation ? NextAnimation<SequenceAnimation> : AnimatableValue | T;
export declare function defineAnimation<T extends AnimationObject | StyleLayoutAnimation>(starting: AnimationToDecoration<T>, factory: () => T): T;
export declare function cancelAnimation<T>(sharedValue: SharedValue<T>): void;
export declare function withStartValue(startValue: AnimatableValue, animation: NextAnimation<AnimationObject>): Animation<AnimationObject>;
export {};
