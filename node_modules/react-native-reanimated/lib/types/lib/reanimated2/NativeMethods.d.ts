import { Component } from 'react';
import { RefObjectFunction } from './commonTypes';
export declare function getTag(view: null | number | React.Component<any, any> | React.ComponentClass<any>): null | number;
export interface MeasuredDimensions {
    x: number;
    y: number;
    width: number;
    height: number;
    pageX: number;
    pageY: number;
}
export declare function measure(animatedRef: RefObjectFunction<Component>): MeasuredDimensions;
export declare function scrollTo(animatedRef: RefObjectFunction<Component>, x: number, y: number, animated: boolean): void;
export declare function setGestureState(handlerTag: number, newState: number): void;
