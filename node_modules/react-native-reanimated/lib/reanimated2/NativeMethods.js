import { findNodeHandle } from 'react-native';
import { shouldBeUseWeb } from './PlatformChecker';
export function getTag(view) {
    return findNodeHandle(view);
}
const isNativeIndefined = shouldBeUseWeb();
export function measure(animatedRef) {
    'worklet';
    if (!_WORKLET || isNativeIndefined) {
        console.warn('[reanimated.measure] method cannot be used for web or Chrome Debugger');
        return {
            x: NaN,
            y: NaN,
            width: NaN,
            height: NaN,
            pageX: NaN,
            pageY: NaN,
        };
    }
    const viewTag = animatedRef();
    const result = _measure(viewTag);
    if (result.x === -1234567) {
        throw new Error(`The view with tag ${viewTag} could not be measured`);
    }
    return result;
}
export function scrollTo(animatedRef, x, y, animated) {
    'worklet';
    if (!_WORKLET || isNativeIndefined) {
        return;
    }
    const viewTag = animatedRef();
    _scrollTo(viewTag, x, y, animated);
}
export function setGestureState(handlerTag, newState) {
    'worklet';
    if (!_WORKLET || isNativeIndefined) {
        console.warn('[Reanimated] You can not use setGestureState in non-worklet function.');
        return;
    }
    _setGestureState(handlerTag, newState);
}
