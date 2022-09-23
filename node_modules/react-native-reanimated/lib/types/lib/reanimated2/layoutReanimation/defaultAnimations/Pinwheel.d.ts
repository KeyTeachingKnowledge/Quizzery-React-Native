import { ComplexAnimationBuilder } from '../animationBuilder';
import { EntryExitAnimationFunction, IEntryExitAnimationBuilder } from '../animationBuilder/commonTypes';
export declare class PinwheelIn extends ComplexAnimationBuilder implements IEntryExitAnimationBuilder {
    static createInstance(): PinwheelIn;
    build: () => EntryExitAnimationFunction;
}
export declare class PinwheelOut extends ComplexAnimationBuilder implements IEntryExitAnimationBuilder {
    static createInstance(): PinwheelOut;
    build: () => EntryExitAnimationFunction;
}
