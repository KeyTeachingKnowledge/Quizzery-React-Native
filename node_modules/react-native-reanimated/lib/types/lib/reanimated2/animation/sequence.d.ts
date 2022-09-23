import { NextAnimation, SequenceAnimation } from './commonTypes';
import { Animation, AnimationObject } from '../commonTypes';
export declare function withSequence(..._animations: NextAnimation<AnimationObject>[]): Animation<SequenceAnimation>;
/**
 * @deprecated Kept for backward compatibility. Will be removed soon.
 */
export declare function sequence(..._animations: NextAnimation<SequenceAnimation>[]): Animation<SequenceAnimation>;
