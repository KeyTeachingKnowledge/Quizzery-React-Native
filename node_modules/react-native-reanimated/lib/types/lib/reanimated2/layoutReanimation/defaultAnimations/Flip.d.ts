import { IEntryExitAnimationBuilder, EntryExitAnimationFunction, EntryAnimationsValues, ExitAnimationsValues, AnimationConfigFunction, IEntryAnimationBuilder, IExitAnimationBuilder } from '../animationBuilder/commonTypes';
import { ComplexAnimationBuilder } from '../animationBuilder';
export declare class FlipInXUp extends ComplexAnimationBuilder implements IEntryAnimationBuilder {
    static createInstance(): FlipInXUp;
    build: () => AnimationConfigFunction<EntryAnimationsValues>;
}
export declare class FlipInYLeft extends ComplexAnimationBuilder implements IEntryAnimationBuilder {
    static createInstance(): FlipInYLeft;
    build: () => AnimationConfigFunction<EntryAnimationsValues>;
}
export declare class FlipInXDown extends ComplexAnimationBuilder implements IEntryAnimationBuilder {
    static createInstance(): FlipInXDown;
    build: () => AnimationConfigFunction<EntryAnimationsValues>;
}
export declare class FlipInYRight extends ComplexAnimationBuilder implements IEntryAnimationBuilder {
    static createInstance(): FlipInYRight;
    build: () => AnimationConfigFunction<EntryAnimationsValues>;
}
export declare class FlipInEasyX extends ComplexAnimationBuilder implements IEntryExitAnimationBuilder {
    static createInstance(): FlipInEasyX;
    build: () => EntryExitAnimationFunction;
}
export declare class FlipInEasyY extends ComplexAnimationBuilder implements IEntryExitAnimationBuilder {
    static createInstance(): FlipInEasyY;
    build: () => EntryExitAnimationFunction;
}
export declare class FlipOutXUp extends ComplexAnimationBuilder implements IExitAnimationBuilder {
    static createInstance(): FlipOutXUp;
    build: () => AnimationConfigFunction<ExitAnimationsValues>;
}
export declare class FlipOutYLeft extends ComplexAnimationBuilder implements IExitAnimationBuilder {
    static createInstance(): FlipOutYLeft;
    build: () => AnimationConfigFunction<ExitAnimationsValues>;
}
export declare class FlipOutXDown extends ComplexAnimationBuilder implements IExitAnimationBuilder {
    static createInstance(): FlipOutXDown;
    build: () => AnimationConfigFunction<ExitAnimationsValues>;
}
export declare class FlipOutYRight extends ComplexAnimationBuilder implements IExitAnimationBuilder {
    static createInstance(): FlipOutYRight;
    build: () => AnimationConfigFunction<ExitAnimationsValues>;
}
export declare class FlipOutEasyX extends ComplexAnimationBuilder implements IEntryExitAnimationBuilder {
    static createInstance(): FlipOutEasyX;
    build: () => EntryExitAnimationFunction;
}
export declare class FlipOutEasyY extends ComplexAnimationBuilder implements IEntryExitAnimationBuilder {
    static createInstance(): FlipOutEasyY;
    build: () => EntryExitAnimationFunction;
}
