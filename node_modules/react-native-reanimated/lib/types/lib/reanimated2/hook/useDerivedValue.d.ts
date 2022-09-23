import { BasicWorkletFunction, SharedValue } from '../commonTypes';
import { DependencyList } from './commonTypes';
export declare type DerivedValue<T> = Readonly<SharedValue<T>>;
export declare function useDerivedValue<T>(processor: BasicWorkletFunction<T>, dependencies: DependencyList): DerivedValue<T>;
