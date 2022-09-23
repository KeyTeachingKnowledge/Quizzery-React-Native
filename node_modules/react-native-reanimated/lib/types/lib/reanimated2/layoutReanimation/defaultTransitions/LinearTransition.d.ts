import { ComplexAnimationBuilder } from '../animationBuilder/ComplexAnimationBuilder';
import { ILayoutAnimationBuilder, LayoutAnimationFunction } from '../animationBuilder/commonTypes';
export declare class LinearTransition extends ComplexAnimationBuilder implements ILayoutAnimationBuilder {
    static createInstance(): LinearTransition;
    build: () => LayoutAnimationFunction;
}
export declare const Layout: typeof LinearTransition;
