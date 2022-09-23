import { ComplexWorkletFunction, SharedValue, AnimationObject, AnimatableValue, Timestamp } from './commonTypes';
import { Descriptor } from './hook/commonTypes';
export declare type ReanimatedConsole = Pick<Console, 'debug' | 'log' | 'warn' | 'info' | 'error'>;
export declare type WorkletValue = (() => AnimationObject) | AnimationObject | AnimatableValue | Descriptor;
export declare const checkPluginState: (throwError: boolean) => boolean;
export declare const isConfigured: (throwError?: boolean) => boolean;
export declare const isConfiguredCheck: () => void;
export declare function requestFrame(frame: (timestamp: Timestamp) => void): void;
export declare function runOnUI<A extends any[], R>(worklet: ComplexWorkletFunction<A, R>): (...args: A) => void;
export declare function makeShareable<T>(value: T): T;
export declare function getViewProp<T>(viewTag: string, propName: string): Promise<T>;
export declare function getTimestamp(): number;
export declare function makeMutable<T>(value: T): SharedValue<T>;
export declare function makeRemote<T>(object?: {}): T;
export declare function startMapper(mapper: () => void, inputs?: any[], outputs?: any[], updater?: () => void, viewDescriptors?: Descriptor[] | SharedValue<Descriptor[]>): number;
export declare function stopMapper(mapperId: number): void;
export interface RunOnJSFunction<A extends any[], R> {
    __callAsync?: (...args: A) => void;
    (...args: A): R;
}
export declare function runOnJS<A extends any[], R>(fun: RunOnJSFunction<A, R>): () => void;
export declare function enableLayoutAnimations(flag: boolean, isCallByUser?: boolean): void;
export declare function configureProps(uiProps: string[], nativeProps: string[]): void;
export declare function jestResetJsReanimatedModule(): void;
