import { ComplexAnimationBuilder } from '../animationBuilder';
import { EntryExitAnimationFunction, IEntryExitAnimationBuilder } from '../animationBuilder/commonTypes';
export declare class LightSpeedInRight extends ComplexAnimationBuilder implements IEntryExitAnimationBuilder {
    static createInstance(): LightSpeedInRight;
    build: () => EntryExitAnimationFunction;
}
export declare class LightSpeedInLeft extends ComplexAnimationBuilder implements IEntryExitAnimationBuilder {
    static createInstance(): LightSpeedInLeft;
    build: () => EntryExitAnimationFunction;
}
export declare class LightSpeedOutRight extends ComplexAnimationBuilder implements IEntryExitAnimationBuilder {
    static createInstance(): LightSpeedOutRight;
    build: () => EntryExitAnimationFunction;
}
export declare class LightSpeedOutLeft extends ComplexAnimationBuilder implements IEntryExitAnimationBuilder {
    static createInstance(): LightSpeedOutLeft;
    build: () => EntryExitAnimationFunction;
}
