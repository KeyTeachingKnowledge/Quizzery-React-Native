import { ComplexAnimationBuilder } from '../animationBuilder';
import { EntryExitAnimationFunction, IEntryExitAnimationBuilder } from '../animationBuilder/commonTypes';
export declare class RollInLeft extends ComplexAnimationBuilder implements IEntryExitAnimationBuilder {
    static createInstance(): RollInLeft;
    build: () => EntryExitAnimationFunction;
}
export declare class RollInRight extends ComplexAnimationBuilder implements IEntryExitAnimationBuilder {
    static createInstance(): RollInRight;
    build: () => EntryExitAnimationFunction;
}
export declare class RollOutLeft extends ComplexAnimationBuilder implements IEntryExitAnimationBuilder {
    static createInstance(): RollOutLeft;
    build: () => EntryExitAnimationFunction;
}
export declare class RollOutRight extends ComplexAnimationBuilder implements IEntryExitAnimationBuilder {
    static createInstance(): RollOutRight;
    build: () => EntryExitAnimationFunction;
}
