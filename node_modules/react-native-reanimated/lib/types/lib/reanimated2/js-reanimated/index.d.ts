import JSReanimated from './JSReanimated';
import { AnimatedStyle, StyleProps } from '../commonTypes';
declare const reanimatedJS: JSReanimated;
interface JSReanimatedComponent {
    previousStyle: StyleProps;
    setNativeProps: (style: StyleProps) => void;
    props: Record<string, string | number>;
    _touchableNode: {
        setAttribute: (key: string, props: unknown) => void;
    };
}
export declare const _updatePropsJS: (updates: StyleProps | AnimatedStyle, viewRef: {
    _component?: JSReanimatedComponent;
}) => void;
export default reanimatedJS;
