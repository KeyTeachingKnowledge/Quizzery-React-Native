import { RefObject } from 'react';
import { NativeScrollEvent } from 'react-native';
import { NativeEvent, WorkletFunction } from '../commonTypes';
import WorkletEventHandler from '../WorkletEventHandler';
import { Context, DependencyList } from './commonTypes';
export interface ScrollHandler<TContext extends Context> extends WorkletFunction {
    (event: NativeScrollEvent, context?: TContext): void;
}
interface ScrollEvent extends NativeScrollEvent, NativeEvent<ScrollEvent> {
    eventName: string;
}
export interface ScrollHandlers<TContext extends Context> {
    [key: string]: ScrollHandler<TContext> | undefined;
    onScroll?: ScrollHandler<TContext>;
    onBeginDrag?: ScrollHandler<TContext>;
    onEndDrag?: ScrollHandler<TContext>;
    onMomentumBegin?: ScrollHandler<TContext>;
    onMomentumEnd?: ScrollHandler<TContext>;
}
export declare function useAnimatedScrollHandler<TContext extends Context>(handlers: ScrollHandlers<TContext> | ScrollHandler<TContext>, dependencies?: DependencyList): RefObject<WorkletEventHandler<ScrollEvent>>;
export {};
