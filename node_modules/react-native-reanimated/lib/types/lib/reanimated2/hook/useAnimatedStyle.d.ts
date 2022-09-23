import { MutableRefObject } from 'react';
import { DependencyList } from './commonTypes';
import { ViewDescriptorsSet, ViewRefSet } from '../ViewDescriptorsSet';
import { AdapterWorkletFunction, AnimatedStyle, BasicWorkletFunction } from '../commonTypes';
export interface AnimatedStyleResult {
    viewDescriptors: ViewDescriptorsSet;
    initial: AnimatedStyle;
    viewsRef: ViewRefSet<any>;
    animatedStyle?: MutableRefObject<AnimatedStyle>;
}
export declare function useAnimatedStyle<T extends AnimatedStyle>(updater: BasicWorkletFunction<T>, dependencies?: DependencyList, adapters?: AdapterWorkletFunction | AdapterWorkletFunction[]): AnimatedStyleResult;
