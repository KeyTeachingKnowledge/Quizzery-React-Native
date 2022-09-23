import { EntryAnimationsValues, ExitAnimationsValues, AnimationConfigFunction, IEntryAnimationBuilder, IExitAnimationBuilder } from '../animationBuilder/commonTypes';
import { ComplexAnimationBuilder } from '../animationBuilder';
export declare class SlideInRight extends ComplexAnimationBuilder implements IEntryAnimationBuilder {
    static createInstance(): SlideInRight;
    build: () => AnimationConfigFunction<EntryAnimationsValues>;
}
export declare class SlideInLeft extends ComplexAnimationBuilder implements IEntryAnimationBuilder {
    static createInstance(): SlideInLeft;
    build: () => AnimationConfigFunction<EntryAnimationsValues>;
}
export declare class SlideOutRight extends ComplexAnimationBuilder implements IExitAnimationBuilder {
    static createInstance(): SlideOutRight;
    build: () => AnimationConfigFunction<ExitAnimationsValues>;
}
export declare class SlideOutLeft extends ComplexAnimationBuilder implements IExitAnimationBuilder {
    static createInstance(): SlideOutLeft;
    build: () => AnimationConfigFunction<ExitAnimationsValues>;
}
export declare class SlideInUp extends ComplexAnimationBuilder implements IEntryAnimationBuilder {
    static createInstance(): SlideInUp;
    build: () => AnimationConfigFunction<EntryAnimationsValues>;
}
export declare class SlideInDown extends ComplexAnimationBuilder implements IEntryAnimationBuilder {
    static createInstance(): SlideInDown;
    build: () => AnimationConfigFunction<EntryAnimationsValues>;
}
export declare class SlideOutUp extends ComplexAnimationBuilder implements IExitAnimationBuilder {
    static createInstance(): SlideOutUp;
    build: () => AnimationConfigFunction<ExitAnimationsValues>;
}
export declare class SlideOutDown extends ComplexAnimationBuilder implements IExitAnimationBuilder {
    static createInstance(): SlideOutDown;
    build: () => AnimationConfigFunction<ExitAnimationsValues>;
}
