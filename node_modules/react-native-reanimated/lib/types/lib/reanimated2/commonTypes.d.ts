import { PerpectiveTransform, RotateTransform, RotateXTransform, RotateYTransform, RotateZTransform, ScaleTransform, ScaleXTransform, ScaleYTransform, TranslateXTransform, TranslateYTransform, SkewXTransform, SkewYTransform, MatrixTransform, ViewStyle, TextStyle } from 'react-native';
import { Context } from './hook/commonTypes';
export declare type TransformProperty = PerpectiveTransform | RotateTransform | RotateXTransform | RotateYTransform | RotateZTransform | ScaleTransform | ScaleXTransform | ScaleYTransform | TranslateXTransform | TranslateYTransform | SkewXTransform | SkewYTransform | MatrixTransform;
export interface StyleProps extends ViewStyle, TextStyle {
    originX?: number;
    originY?: number;
    [key: string]: any;
}
export interface AnimatedStyle extends Record<string, Animation<AnimationObject>> {
    [key: string]: any;
    transform?: Array<Record<string, Animation<AnimationObject>>>;
}
export interface SharedValue<T> {
    value: T;
}
export interface WorkletFunction {
    _closure?: Context;
    __workletHash?: number;
    __optimalization?: number;
}
export interface BasicWorkletFunction<T> extends WorkletFunction {
    (): T;
}
export interface BasicWorkletFunctionOptional<T> extends WorkletFunction {
    (): Partial<T>;
}
export interface NativeEvent<T> {
    nativeEvent: T;
}
export interface ComplexWorkletFunction<A extends any[], R> extends WorkletFunction {
    (...args: A): R;
}
export interface NestedObject<T> {
    [key: string]: NestedObjectValues<T>;
}
export declare type NestedObjectValues<T> = T | Array<NestedObjectValues<T>> | NestedObject<T>;
export interface AdapterWorkletFunction extends WorkletFunction {
    (value: NestedObject<string | number | AnimationObject>): void;
}
export declare type AnimatableValue = number | string | Array<number>;
export interface AnimationObject {
    [key: string]: any;
    callback: AnimationCallback;
    current?: AnimatableValue;
    toValue?: AnimationObject['current'];
    startValue?: AnimationObject['current'];
    finished?: boolean;
    strippedCurrent?: number;
    cancelled?: boolean;
    __prefix?: string;
    __suffix?: string;
    onFrame: (animation: any, timestamp: Timestamp) => boolean;
    onStart: (nextAnimation: any, current: any, timestamp: Timestamp, previousAnimation: any) => void;
}
export interface Animation<T extends AnimationObject> extends AnimationObject {
    onFrame: (animation: T, timestamp: Timestamp) => boolean;
    onStart: (nextAnimation: T, current: T extends NumericAnimation ? number : AnimatableValue, timestamp: Timestamp, previousAnimation: T) => void;
}
export interface NumericAnimation {
    current?: number;
}
export declare type AnimationCallback = (finished?: boolean, current?: AnimatableValue) => void;
export declare type Timestamp = number;
export declare type Value3D = {
    x: number;
    y: number;
    z: number;
};
export declare type SensorValue3D = SharedValue<Value3D>;
export declare type ValueRotation = {
    qw: number;
    qx: number;
    qy: number;
    qz: number;
    yaw: number;
    pitch: number;
    roll: number;
};
export declare type SensorValueRotation = SharedValue<ValueRotation>;
