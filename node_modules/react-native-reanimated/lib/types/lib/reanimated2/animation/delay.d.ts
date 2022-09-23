import { Animation } from '../commonTypes';
import { NextAnimation, DelayAnimation } from './commonTypes';
export declare function withDelay(delayMs: number, _nextAnimation: NextAnimation<DelayAnimation>): Animation<DelayAnimation>;
/**
 * @deprecated Kept for backward compatibility. Will be removed soon.
 */
export declare function delay(delayMs: number, _nextAnimation: NextAnimation<DelayAnimation>): Animation<DelayAnimation>;
