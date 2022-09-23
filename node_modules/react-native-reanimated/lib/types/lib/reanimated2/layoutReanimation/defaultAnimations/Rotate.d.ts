import { ComplexAnimationBuilder } from '../animationBuilder';
import { EntryAnimationsValues, ExitAnimationsValues, AnimationConfigFunction, IEntryAnimationBuilder, IExitAnimationBuilder } from '../animationBuilder/commonTypes';
export declare class RotateInDownLeft extends ComplexAnimationBuilder implements IEntryAnimationBuilder {
    static createInstance(): RotateInDownLeft;
    build: () => AnimationConfigFunction<EntryAnimationsValues>;
}
export declare class RotateInDownRight extends ComplexAnimationBuilder implements IEntryAnimationBuilder {
    static createInstance(): RotateInDownRight;
    build: () => AnimationConfigFunction<EntryAnimationsValues>;
}
export declare class RotateInUpLeft extends ComplexAnimationBuilder implements IEntryAnimationBuilder {
    static createInstance(): RotateInUpLeft;
    build: () => AnimationConfigFunction<EntryAnimationsValues>;
}
export declare class RotateInUpRight extends ComplexAnimationBuilder implements IEntryAnimationBuilder {
    static createInstance(): RotateInUpRight;
    build: () => AnimationConfigFunction<EntryAnimationsValues>;
}
export declare class RotateOutDownLeft extends ComplexAnimationBuilder implements IExitAnimationBuilder {
    static createInstance(): RotateOutDownLeft;
    build: () => AnimationConfigFunction<ExitAnimationsValues>;
}
export declare class RotateOutDownRight extends ComplexAnimationBuilder implements IExitAnimationBuilder {
    static createInstance(): RotateOutDownRight;
    build: () => AnimationConfigFunction<ExitAnimationsValues>;
}
export declare class RotateOutUpLeft extends ComplexAnimationBuilder implements IExitAnimationBuilder {
    static createInstance(): RotateOutUpLeft;
    build: () => AnimationConfigFunction<ExitAnimationsValues>;
}
export declare class RotateOutUpRight extends ComplexAnimationBuilder implements IExitAnimationBuilder {
    static createInstance(): RotateOutUpRight;
    build: () => AnimationConfigFunction<ExitAnimationsValues>;
}
