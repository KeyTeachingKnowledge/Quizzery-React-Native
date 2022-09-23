import { ILayoutAnimationBuilder, LayoutAnimationFunction } from '../animationBuilder/commonTypes';
import { BaseAnimationBuilder } from '../animationBuilder';
export declare class JumpingTransition extends BaseAnimationBuilder implements ILayoutAnimationBuilder {
    static createInstance(): JumpingTransition;
    build: () => LayoutAnimationFunction;
}
