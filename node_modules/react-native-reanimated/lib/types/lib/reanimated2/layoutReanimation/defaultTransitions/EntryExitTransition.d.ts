import { ILayoutAnimationBuilder, LayoutAnimationFunction } from '../animationBuilder/commonTypes';
import { BaseAnimationBuilder } from '../animationBuilder';
export declare class EntryExitTransition extends BaseAnimationBuilder implements ILayoutAnimationBuilder {
    enteringV: BaseAnimationBuilder | typeof BaseAnimationBuilder;
    exitingV: BaseAnimationBuilder | typeof BaseAnimationBuilder;
    static createInstance(): EntryExitTransition;
    static entering(animation: BaseAnimationBuilder | typeof BaseAnimationBuilder): EntryExitTransition;
    entering(animation: BaseAnimationBuilder | typeof BaseAnimationBuilder): EntryExitTransition;
    static exiting(animation: BaseAnimationBuilder | typeof BaseAnimationBuilder): EntryExitTransition;
    exiting(animation: BaseAnimationBuilder | typeof BaseAnimationBuilder): EntryExitTransition;
    build: () => LayoutAnimationFunction;
}
export declare function combineTransition(exiting: BaseAnimationBuilder | typeof BaseAnimationBuilder, entering: BaseAnimationBuilder | typeof BaseAnimationBuilder): EntryExitTransition;
