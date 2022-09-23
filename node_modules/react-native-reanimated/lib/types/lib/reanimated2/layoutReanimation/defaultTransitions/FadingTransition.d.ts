import { ILayoutAnimationBuilder, LayoutAnimationFunction } from '../animationBuilder/commonTypes';
import { BaseAnimationBuilder } from '../animationBuilder';
export declare class FadingTransition extends BaseAnimationBuilder implements ILayoutAnimationBuilder {
    static createInstance(): FadingTransition;
    build: () => LayoutAnimationFunction;
}
