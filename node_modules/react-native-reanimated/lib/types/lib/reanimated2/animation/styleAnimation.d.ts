import { AnimatableValue, AnimatedStyle, NestedObject, NestedObjectValues } from '../commonTypes';
import { StyleLayoutAnimation } from './commonTypes';
export declare function resolvePath<T>(obj: NestedObject<T>, path: AnimatableValue[] | AnimatableValue): NestedObjectValues<T> | undefined;
declare type Path = Array<string | number> | string | number;
export declare function setPath<T>(obj: NestedObject<T>, path: Path, value: NestedObjectValues<T>): void;
export declare function withStyleAnimation(styleAnimations: AnimatedStyle): StyleLayoutAnimation;
export {};
