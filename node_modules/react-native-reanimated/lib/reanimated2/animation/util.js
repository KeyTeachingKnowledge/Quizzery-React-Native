/* global _WORKLET */
import { convertToHSVA, isColor, toRGBA } from '../Colors';
import NativeReanimatedModule from '../NativeReanimated';
let IN_STYLE_UPDATER = false;
export function initialUpdaterRun(updater) {
    IN_STYLE_UPDATER = true;
    const result = updater();
    IN_STYLE_UPDATER = false;
    return result;
}
function recognizePrefixSuffix(value) {
    'worklet';
    var _a;
    if (typeof value === 'string') {
        const match = value.match(/([A-Za-z]*)(-?\d*\.?\d*)([eE][-+]?[0-9]+)?([A-Za-z%]*)/);
        if (!match) {
            throw Error("Couldn't parse animation value. Check if there isn't any typo.");
        }
        const prefix = match[1];
        const suffix = match[4];
        // number with scientific notation
        const number = match[2] + ((_a = match[3]) !== null && _a !== void 0 ? _a : '');
        return { prefix, suffix, strippedValue: parseFloat(number) };
    }
    else {
        return { strippedValue: value };
    }
}
function decorateAnimation(animation) {
    'worklet';
    if (animation.isHigherOrder) {
        return;
    }
    const baseOnStart = animation.onStart;
    const baseOnFrame = animation.onFrame;
    const animationCopy = Object.assign({}, animation);
    delete animationCopy.callback;
    const prefNumberSuffOnStart = (animation, value, timestamp, previousAnimation) => {
        var _a, _b, _c, _d;
        // recognize prefix, suffix, and updates stripped value on animation start
        const { prefix, suffix, strippedValue } = recognizePrefixSuffix(value);
        animation.__prefix = prefix;
        animation.__suffix = suffix;
        animation.strippedCurrent = strippedValue;
        const { strippedValue: strippedToValue } = recognizePrefixSuffix(animation.toValue);
        animation.current = strippedValue;
        animation.startValue = strippedValue;
        animation.toValue = strippedToValue;
        if (previousAnimation && previousAnimation !== animation) {
            previousAnimation.current = previousAnimation.strippedCurrent;
        }
        baseOnStart(animation, strippedValue, timestamp, previousAnimation);
        animation.current =
            ((_a = animation.__prefix) !== null && _a !== void 0 ? _a : '') +
                animation.current +
                ((_b = animation.__suffix) !== null && _b !== void 0 ? _b : '');
        if (previousAnimation && previousAnimation !== animation) {
            previousAnimation.current =
                ((_c = previousAnimation.__prefix) !== null && _c !== void 0 ? _c : '') +
                    previousAnimation.current +
                    ((_d = previousAnimation.__suffix) !== null && _d !== void 0 ? _d : '');
        }
    };
    const prefNumberSuffOnFrame = (animation, timestamp) => {
        var _a, _b;
        animation.current = animation.strippedCurrent;
        const res = baseOnFrame(animation, timestamp);
        animation.strippedCurrent = animation.current;
        animation.current =
            ((_a = animation.__prefix) !== null && _a !== void 0 ? _a : '') +
                animation.current +
                ((_b = animation.__suffix) !== null && _b !== void 0 ? _b : '');
        return res;
    };
    const tab = ['H', 'S', 'V', 'A'];
    const colorOnStart = (animation, value, timestamp, previousAnimation) => {
        let HSVAValue;
        let HSVACurrent;
        let HSVAToValue;
        const res = [];
        if (isColor(value)) {
            HSVACurrent = convertToHSVA(animation.current);
            HSVAValue = convertToHSVA(value);
            if (animation.toValue) {
                HSVAToValue = convertToHSVA(animation.toValue);
            }
        }
        tab.forEach((i, index) => {
            animation[i] = Object.assign({}, animationCopy);
            animation[i].current = HSVACurrent[index];
            animation[i].toValue = HSVAToValue ? HSVAToValue[index] : undefined;
            animation[i].onStart(animation[i], HSVAValue[index], timestamp, previousAnimation ? previousAnimation[i] : undefined);
            res.push(animation[i].current);
        });
        animation.current = toRGBA(res);
    };
    const colorOnFrame = (animation, timestamp) => {
        const HSVACurrent = convertToHSVA(animation.current);
        const res = [];
        let finished = true;
        tab.forEach((i, index) => {
            animation[i].current = HSVACurrent[index];
            // @ts-ignore: disable-next-line
            finished &= animation[i].onFrame(animation[i], timestamp);
            res.push(animation[i].current);
        });
        animation.current = toRGBA(res);
        return finished;
    };
    const arrayOnStart = (animation, value, timestamp, previousAnimation) => {
        value.forEach((v, i) => {
            animation[i] = Object.assign({}, animationCopy);
            animation[i].current = v;
            animation[i].toValue = animation.toValue[i];
            animation[i].onStart(animation[i], v, timestamp, previousAnimation ? previousAnimation[i] : undefined);
        });
        animation.current = value;
    };
    const arrayOnFrame = (animation, timestamp) => {
        let finished = true;
        animation.current.forEach((v, i) => {
            // @ts-ignore: disable-next-line
            finished &= animation[i].onFrame(animation[i], timestamp);
            animation.current[i] = animation[i].current;
        });
        return finished;
    };
    animation.onStart = (animation, value, timestamp, previousAnimation) => {
        if (isColor(value)) {
            colorOnStart(animation, value, timestamp, previousAnimation);
            animation.onFrame = colorOnFrame;
            return;
        }
        else if (Array.isArray(value)) {
            arrayOnStart(animation, value, timestamp, previousAnimation);
            animation.onFrame = arrayOnFrame;
            return;
        }
        else if (typeof value === 'string') {
            prefNumberSuffOnStart(animation, value, timestamp, previousAnimation);
            animation.onFrame = prefNumberSuffOnFrame;
            return;
        }
        baseOnStart(animation, value, timestamp, previousAnimation);
    };
}
export function defineAnimation(starting, factory) {
    'worklet';
    if (IN_STYLE_UPDATER) {
        return starting;
    }
    const create = () => {
        'worklet';
        const animation = factory();
        decorateAnimation(animation);
        return animation;
    };
    if (_WORKLET || !NativeReanimatedModule.native) {
        return create();
    }
    // @ts-ignore: eslint-disable-line
    return create;
}
export function cancelAnimation(sharedValue) {
    'worklet';
    // setting the current value cancels the animation if one is currently running
    sharedValue.value = sharedValue.value; // eslint-disable-line no-self-assign
}
// TODO it should work only if there was no animation before.
export function withStartValue(startValue, animation) {
    'worklet';
    return defineAnimation(startValue, () => {
        'worklet';
        if (!_WORKLET && typeof animation === 'function') {
            animation = animation();
        }
        animation.current = startValue;
        return animation;
    });
}
