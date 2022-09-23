import { ILayoutAnimationBuilder, LayoutAnimationFunction } from '../animationBuilder/commonTypes';
import { BaseAnimationBuilder } from '../animationBuilder';
export declare class SequencedTransition extends BaseAnimationBuilder implements ILayoutAnimationBuilder {
    reversed: boolean;
    static createInstance(): SequencedTransition;
    static reverse(): SequencedTransition;
    reverse(): SequencedTransition;
    build: () => LayoutAnimationFunction;
}
