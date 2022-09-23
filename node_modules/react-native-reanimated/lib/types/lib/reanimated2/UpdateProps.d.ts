import { MutableRefObject } from 'react';
import { AnimatedStyle, SharedValue, StyleProps } from './commonTypes';
import { Descriptor } from './hook/commonTypes';
import { ViewRefSet } from './ViewDescriptorsSet';
export declare const colorProps: string[];
export declare const ColorProperties: string[];
export declare const updateProps: (viewDescriptor: SharedValue<Descriptor[]>, updates: StyleProps | AnimatedStyle, maybeViewRef: ViewRefSet<any> | undefined) => void;
export declare const updatePropsJestWrapper: (viewDescriptors: SharedValue<Descriptor[]>, updates: AnimatedStyle, maybeViewRef: ViewRefSet<any> | undefined, animatedStyle: MutableRefObject<AnimatedStyle>, adapters: ((updates: AnimatedStyle) => void)[]) => void;
export default updateProps;
