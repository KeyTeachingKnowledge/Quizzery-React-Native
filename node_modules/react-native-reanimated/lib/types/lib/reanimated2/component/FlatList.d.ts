import React from 'react';
import { FlatListProps } from 'react-native';
import { ILayoutAnimationBuilder } from '../layoutReanimation/animationBuilder/commonTypes';
export interface ReanimatedFlatlistProps<ItemT> extends FlatListProps<ItemT> {
    itemLayoutAnimation?: ILayoutAnimationBuilder;
}
declare type ReanimatedFlatListFC<T = any> = React.FC<ReanimatedFlatlistProps<T>>;
declare const ReanimatedFlatlist: ReanimatedFlatListFC;
export default ReanimatedFlatlist;
