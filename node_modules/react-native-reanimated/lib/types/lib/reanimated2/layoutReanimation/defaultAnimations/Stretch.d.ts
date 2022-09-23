import { IEntryExitAnimationBuilder, EntryExitAnimationFunction } from '../animationBuilder/commonTypes';
import { ComplexAnimationBuilder } from '../animationBuilder';
export declare class StretchInX extends ComplexAnimationBuilder implements IEntryExitAnimationBuilder {
    static createInstance(): StretchInX;
    build: () => EntryExitAnimationFunction;
}
export declare class StretchInY extends ComplexAnimationBuilder implements IEntryExitAnimationBuilder {
    static createInstance(): StretchInY;
    build: () => EntryExitAnimationFunction;
}
export declare class StretchOutX extends ComplexAnimationBuilder implements IEntryExitAnimationBuilder {
    static createInstance(): StretchOutX;
    build: () => EntryExitAnimationFunction;
}
export declare class StretchOutY extends ComplexAnimationBuilder implements IEntryExitAnimationBuilder {
    static createInstance(): StretchOutY;
    build: () => EntryExitAnimationFunction;
}
