import { MutableRefObject } from 'react';
import { AnimatedStyle, NativeEvent, NestedObjectValues, StyleProps, WorkletFunction, AnimationObject } from '../commonTypes';
import WorkletEventHandler from '../WorkletEventHandler';
import { Context, DependencyList } from './commonTypes';
interface Handler<T, TContext extends Context> extends WorkletFunction {
    (event: T, context: TContext): void;
}
interface Handlers<T, TContext extends Context> {
    [key: string]: Handler<T, TContext> | undefined;
}
export interface UseHandlerContext<TContext extends Context> {
    context: TContext;
    doDependenciesDiffer: boolean;
    useWeb: boolean;
}
export declare function useEvent<T extends NativeEvent<T>>(handler: (event: T) => void, eventNames?: string[], rebuild?: boolean): MutableRefObject<WorkletEventHandler<T> | null>;
export declare function useHandler<T, TContext extends Context>(handlers: Handlers<T, TContext>, dependencies?: DependencyList): UseHandlerContext<TContext>;
export declare function buildWorkletsHash(handlers: Record<string, WorkletFunction> | Array<WorkletFunction>): string;
export declare function buildDependencies(dependencies: DependencyList, handlers: Record<string, WorkletFunction | undefined>): Array<unknown>;
export declare function areDependenciesEqual(nextDeps: DependencyList, prevDeps: DependencyList): boolean;
export declare function hasColorProps(updates: AnimatedStyle): boolean;
export declare function parseColors(updates: AnimatedStyle): void;
export declare function canApplyOptimalisation(upadterFn: WorkletFunction): number;
export declare function isAnimated(prop: NestedObjectValues<AnimationObject>): boolean;
export declare function styleDiff<T extends AnimatedStyle>(oldStyle: AnimatedStyle, newStyle: AnimatedStyle): Partial<T>;
export declare function getStyleWithoutAnimations(newStyle: AnimatedStyle): StyleProps;
export declare const validateAnimatedStyles: (styles: AnimatedStyle) => void;
export {};
