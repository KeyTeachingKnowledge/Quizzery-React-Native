import { IEntryExitAnimationBuilder, EntryExitAnimationFunction } from '../animationBuilder/commonTypes';
import { ComplexAnimationBuilder } from '../animationBuilder';
export declare class FadeIn extends ComplexAnimationBuilder implements IEntryExitAnimationBuilder {
    static createInstance(): FadeIn;
    build: () => EntryExitAnimationFunction;
}
export declare class FadeInRight extends ComplexAnimationBuilder implements IEntryExitAnimationBuilder {
    static createInstance(): FadeInRight;
    build: () => EntryExitAnimationFunction;
}
export declare class FadeInLeft extends ComplexAnimationBuilder implements IEntryExitAnimationBuilder {
    static createInstance(): FadeInLeft;
    build: () => EntryExitAnimationFunction;
}
export declare class FadeInUp extends ComplexAnimationBuilder implements IEntryExitAnimationBuilder {
    static createInstance(): FadeInUp;
    build: () => EntryExitAnimationFunction;
}
export declare class FadeInDown extends ComplexAnimationBuilder implements IEntryExitAnimationBuilder {
    static createInstance(): FadeInDown;
    build: () => EntryExitAnimationFunction;
}
export declare class FadeOut extends ComplexAnimationBuilder implements IEntryExitAnimationBuilder {
    static createInstance(): FadeOut;
    build: () => EntryExitAnimationFunction;
}
export declare class FadeOutRight extends ComplexAnimationBuilder implements IEntryExitAnimationBuilder {
    static createInstance(): FadeOutRight;
    build: () => EntryExitAnimationFunction;
}
export declare class FadeOutLeft extends ComplexAnimationBuilder implements IEntryExitAnimationBuilder {
    static createInstance(): FadeOutLeft;
    build: () => EntryExitAnimationFunction;
}
export declare class FadeOutUp extends ComplexAnimationBuilder implements IEntryExitAnimationBuilder {
    static createInstance(): FadeOutUp;
    build: () => EntryExitAnimationFunction;
}
export declare class FadeOutDown extends ComplexAnimationBuilder implements IEntryExitAnimationBuilder {
    static createInstance(): FadeOutDown;
    build: () => EntryExitAnimationFunction;
}
