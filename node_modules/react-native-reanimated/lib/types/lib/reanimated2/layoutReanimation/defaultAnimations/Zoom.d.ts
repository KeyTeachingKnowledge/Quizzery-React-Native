import { IEntryExitAnimationBuilder, EntryExitAnimationFunction, EntryAnimationsValues, ExitAnimationsValues, AnimationConfigFunction, IEntryAnimationBuilder, IExitAnimationBuilder } from '../animationBuilder/commonTypes';
import { ComplexAnimationBuilder } from '../animationBuilder';
export declare class ZoomIn extends ComplexAnimationBuilder implements IEntryExitAnimationBuilder {
    static createInstance(): ZoomIn;
    build: () => EntryExitAnimationFunction;
}
export declare class ZoomInRotate extends ComplexAnimationBuilder implements IEntryExitAnimationBuilder {
    static createInstance(): ZoomInRotate;
    build: () => EntryExitAnimationFunction;
}
export declare class ZoomInLeft extends ComplexAnimationBuilder implements IEntryExitAnimationBuilder {
    static createInstance(): ZoomInLeft;
    build: () => EntryExitAnimationFunction;
}
export declare class ZoomInRight extends ComplexAnimationBuilder implements IEntryExitAnimationBuilder {
    static createInstance(): ZoomInRight;
    build: () => EntryExitAnimationFunction;
}
export declare class ZoomInUp extends ComplexAnimationBuilder implements IEntryExitAnimationBuilder {
    static createInstance(): ZoomInUp;
    build: () => EntryExitAnimationFunction;
}
export declare class ZoomInDown extends ComplexAnimationBuilder implements IEntryExitAnimationBuilder {
    static createInstance(): ZoomInDown;
    build: () => EntryExitAnimationFunction;
}
export declare class ZoomInEasyUp extends ComplexAnimationBuilder implements IEntryAnimationBuilder {
    static createInstance(): ZoomInEasyUp;
    build: () => AnimationConfigFunction<EntryAnimationsValues>;
}
export declare class ZoomInEasyDown extends ComplexAnimationBuilder implements IEntryAnimationBuilder {
    static createInstance(): ZoomInEasyDown;
    build: () => AnimationConfigFunction<EntryAnimationsValues>;
}
export declare class ZoomOut extends ComplexAnimationBuilder implements IEntryExitAnimationBuilder {
    static createInstance(): ZoomOut;
    build: () => EntryExitAnimationFunction;
}
export declare class ZoomOutRotate extends ComplexAnimationBuilder implements IEntryExitAnimationBuilder {
    static createInstance(): ZoomOutRotate;
    build: () => EntryExitAnimationFunction;
}
export declare class ZoomOutLeft extends ComplexAnimationBuilder implements IEntryExitAnimationBuilder {
    static createInstance(): ZoomOutLeft;
    build: () => EntryExitAnimationFunction;
}
export declare class ZoomOutRight extends ComplexAnimationBuilder implements IEntryExitAnimationBuilder {
    static createInstance(): ZoomOutRight;
    build: () => EntryExitAnimationFunction;
}
export declare class ZoomOutUp extends ComplexAnimationBuilder implements IEntryExitAnimationBuilder {
    static createInstance(): ZoomOutUp;
    build: () => EntryExitAnimationFunction;
}
export declare class ZoomOutDown extends ComplexAnimationBuilder implements IEntryExitAnimationBuilder {
    static createInstance(): ZoomOutDown;
    build: () => EntryExitAnimationFunction;
}
export declare class ZoomOutEasyUp extends ComplexAnimationBuilder implements IExitAnimationBuilder {
    static createInstance(): ZoomOutEasyUp;
    build: () => AnimationConfigFunction<ExitAnimationsValues>;
}
export declare class ZoomOutEasyDown extends ComplexAnimationBuilder implements IExitAnimationBuilder {
    static createInstance(): ZoomOutEasyDown;
    build: () => AnimationConfigFunction<ExitAnimationsValues>;
}
