import { Animation, AnimationCallback } from '../commonTypes';
import { NextAnimation, RepeatAnimation } from './commonTypes';
export interface InnerRepeatAnimation extends Omit<RepeatAnimation, 'toValue' | 'startValue'> {
    toValue: number;
    startValue: number;
}
export declare function withRepeat(_nextAnimation: NextAnimation<RepeatAnimation>, numberOfReps?: number, reverse?: boolean, callback?: AnimationCallback): Animation<RepeatAnimation>;
/**
 * @deprecated Kept for backward compatibility. Will be removed soon.
 */
export declare function repeat(_nextAnimation: NextAnimation<RepeatAnimation>, numberOfReps?: number, reverse?: boolean, callback?: AnimationCallback): Animation<RepeatAnimation>;
export declare function loop(nextAnimation: NextAnimation<RepeatAnimation>, numberOfLoops?: number): Animation<RepeatAnimation>;
