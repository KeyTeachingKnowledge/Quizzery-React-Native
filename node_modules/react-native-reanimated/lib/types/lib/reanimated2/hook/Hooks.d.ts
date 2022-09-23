import { DependencyList } from './commonTypes';
import { useAnimatedStyle } from './useAnimatedStyle';
export declare const useAnimatedProps: typeof useAnimatedStyle;
export declare function useWorkletCallback<A extends unknown[], R>(fun: (...args: A) => R, deps?: DependencyList): (...args: Parameters<typeof fun>) => R;
export { useEvent, useHandler } from './utils';
