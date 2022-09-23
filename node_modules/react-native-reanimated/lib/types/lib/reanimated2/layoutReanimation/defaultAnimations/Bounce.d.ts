import { EntryExitAnimationFunction, IEntryExitAnimationBuilder } from '../animationBuilder/commonTypes';
import { ComplexAnimationBuilder } from '../animationBuilder/ComplexAnimationBuilder';
export declare class BounceIn extends ComplexAnimationBuilder implements IEntryExitAnimationBuilder {
    static createInstance(): BounceIn;
    static getDuration(): number;
    getDuration(): number;
    build: () => EntryExitAnimationFunction;
}
export declare class BounceInDown extends ComplexAnimationBuilder implements IEntryExitAnimationBuilder {
    static createInstance(): BounceInDown;
    static getDuration(): number;
    getDuration(): number;
    build: () => EntryExitAnimationFunction;
}
export declare class BounceInUp extends ComplexAnimationBuilder implements IEntryExitAnimationBuilder {
    static createInstance(): BounceInUp;
    static getDuration(): number;
    getDuration(): number;
    build: () => EntryExitAnimationFunction;
}
export declare class BounceInLeft extends ComplexAnimationBuilder implements IEntryExitAnimationBuilder {
    static createInstance(): BounceInLeft;
    static getDuration(): number;
    getDuration(): number;
    build: () => EntryExitAnimationFunction;
}
export declare class BounceInRight extends ComplexAnimationBuilder implements IEntryExitAnimationBuilder {
    static createInstance(): BounceInRight;
    static getDuration(): number;
    getDuration(): number;
    build: () => EntryExitAnimationFunction;
}
export declare class BounceOut extends ComplexAnimationBuilder implements IEntryExitAnimationBuilder {
    static createInstance(): BounceOut;
    static getDuration(): number;
    getDuration(): number;
    build: () => EntryExitAnimationFunction;
}
export declare class BounceOutDown extends ComplexAnimationBuilder implements IEntryExitAnimationBuilder {
    static createInstance(): BounceOutDown;
    static getDuration(): number;
    getDuration(): number;
    build: () => EntryExitAnimationFunction;
}
export declare class BounceOutUp extends ComplexAnimationBuilder implements IEntryExitAnimationBuilder {
    static createInstance(): BounceOutUp;
    static getDuration(): number;
    getDuration(): number;
    build: () => EntryExitAnimationFunction;
}
export declare class BounceOutLeft extends ComplexAnimationBuilder implements IEntryExitAnimationBuilder {
    static createInstance(): BounceOutRight;
    static getDuration(): number;
    getDuration(): number;
    build: () => EntryExitAnimationFunction;
}
export declare class BounceOutRight extends ComplexAnimationBuilder implements IEntryExitAnimationBuilder {
    static createInstance(): BounceOutRight;
    static getDuration(): number;
    getDuration(): number;
    build: () => EntryExitAnimationFunction;
}
