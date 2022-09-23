import { Component, ComponentType, Ref } from 'react';
import './reanimated2/layoutReanimation/LayoutAnimationRepository';
import { BaseAnimationBuilder, EntryExitAnimationFunction, ILayoutAnimationBuilder } from './reanimated2/layoutReanimation';
import { SharedValue, StyleProps } from './reanimated2/commonTypes';
import { ViewDescriptorsSet, ViewRefSet } from './reanimated2/ViewDescriptorsSet';
declare type NestedArray<T> = T | NestedArray<T>[];
interface AnimatedProps extends Record<string, unknown> {
    viewDescriptors?: ViewDescriptorsSet;
    viewsRef?: ViewRefSet<unknown>;
    initial?: SharedValue<StyleProps>;
}
export declare type AnimatedComponentProps<P extends Record<string, unknown>> = P & {
    forwardedRef?: Ref<Component>;
    style?: NestedArray<StyleProps>;
    animatedProps?: Partial<AnimatedComponentProps<AnimatedProps>>;
    animatedStyle?: StyleProps;
    layout?: BaseAnimationBuilder | ILayoutAnimationBuilder | typeof BaseAnimationBuilder;
    entering?: BaseAnimationBuilder | typeof BaseAnimationBuilder | EntryExitAnimationFunction | Keyframe;
    exiting?: BaseAnimationBuilder | typeof BaseAnimationBuilder | EntryExitAnimationFunction | Keyframe;
};
declare type Options<P> = {
    setNativeProps: (ref: ComponentRef, props: P) => void;
};
interface ComponentRef extends Component {
    setNativeProps?: (props: Record<string, unknown>) => void;
    getScrollableNode?: () => ComponentRef;
}
export interface InitialComponentProps extends Record<string, unknown> {
    ref?: Ref<Component>;
    collapsable?: boolean;
}
export default function createAnimatedComponent(Component: ComponentType<InitialComponentProps>, options?: Options<InitialComponentProps>): ComponentType<AnimatedComponentProps<InitialComponentProps>>;
export {};
