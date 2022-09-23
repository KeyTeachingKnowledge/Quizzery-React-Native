import { ILayoutAnimationBuilder, LayoutAnimationFunction } from '../animationBuilder/commonTypes';
import { BaseAnimationBuilder } from '../animationBuilder';
import { EasingFn } from '../../Easing';
export declare class CurvedTransition extends BaseAnimationBuilder implements ILayoutAnimationBuilder {
    easingXV: EasingFn;
    easingYV: EasingFn;
    easingWidthV: EasingFn;
    easingHeightV: EasingFn;
    static createInstance(): CurvedTransition;
    static easingX(easing: EasingFn): CurvedTransition;
    easingX(easing: EasingFn): CurvedTransition;
    static easingY(easing: EasingFn): CurvedTransition;
    easingY(easing: EasingFn): CurvedTransition;
    static easingWidth(easing: EasingFn): CurvedTransition;
    easingWidth(easing: EasingFn): CurvedTransition;
    static easingHeight(easing: EasingFn): CurvedTransition;
    easingHeight(easing: EasingFn): CurvedTransition;
    build: () => LayoutAnimationFunction;
}
