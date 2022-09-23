import { BasicWorkletFunction, WorkletFunction } from '../commonTypes';
import { DependencyList } from './commonTypes';
export interface AnimatedReactionWorkletFunction<T> extends WorkletFunction {
    (prepared: T, previous: T | null): void;
}
/**
 * @param prepare - worklet used for data preparation for the second parameter
 * @param react - worklet which takes data prepared by the one in the first parameter and performs certain actions
 * the first worklet defines the inputs, in other words on which shared values change will it be called.
 * the second one can modify any shared values but those which are mentioned in the first worklet. Beware of that, because this may result in endless loop and high cpu usage.
 */
export declare function useAnimatedReaction<T>(prepare: BasicWorkletFunction<T>, react: AnimatedReactionWorkletFunction<T>, dependencies: DependencyList): void;
