import { MutableRefObject } from 'react';
import { WorkletFunction } from '../commonTypes';
import WorkletEventHandler from '../WorkletEventHandler';
import { Context, DependencyList } from './commonTypes';
interface Handler<T, TContext extends Context> extends WorkletFunction {
    (event: T, context: TContext, isCanceledOrFailed?: boolean): void;
}
export interface GestureHandlers<T, TContext extends Context> {
    [key: string]: Handler<T, TContext> | undefined;
    onStart?: Handler<T, TContext>;
    onActive?: Handler<T, TContext>;
    onEnd?: Handler<T, TContext>;
    onFail?: Handler<T, TContext>;
    onCancel?: Handler<T, TContext>;
    onFinish?: Handler<T, TContext>;
}
export declare enum EventType {
    UNDETERMINED = 0,
    FAILED = 1,
    BEGAN = 2,
    CANCELLED = 3,
    ACTIVE = 4,
    END = 5
}
export interface GestureHandlerStateChangeNativeEvent {
    handlerTag: number;
    numberOfPointers: number;
    state: EventType;
    oldState: EventType;
}
export interface GestureHandlerEvent<T> extends GestureHandlerStateChangeNativeEvent {
    nativeEvent: T;
}
export declare function useAnimatedGestureHandler<T extends GestureHandlerEvent<T>, TContext extends Context>(handlers: GestureHandlers<T, TContext>, dependencies?: DependencyList): MutableRefObject<WorkletEventHandler<T> | null> | ((e: T) => void);
export {};
