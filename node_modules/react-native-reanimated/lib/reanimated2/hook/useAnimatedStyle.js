/* global _frameTimestamp */
import { useEffect, useRef } from 'react';
import { startMapper, stopMapper, makeRemote, requestFrame, getTimestamp, makeMutable, } from '../core';
import updateProps, { updatePropsJestWrapper } from '../UpdateProps';
import { initialUpdaterRun } from '../animation';
import NativeReanimatedModule from '../NativeReanimated';
import { useSharedValue } from './useSharedValue';
import { buildWorkletsHash, canApplyOptimalisation, getStyleWithoutAnimations, hasColorProps, isAnimated, parseColors, styleDiff, validateAnimatedStyles, } from './utils';
import { makeViewDescriptorsSet, makeViewsRefSet, } from '../ViewDescriptorsSet';
import { isJest, shouldBeUseWeb } from '../PlatformChecker';
function prepareAnimation(animatedProp, lastAnimation, lastValue) {
    'worklet';
    if (Array.isArray(animatedProp)) {
        animatedProp.forEach((prop, index) => prepareAnimation(prop, lastAnimation && lastAnimation[index], lastValue && lastValue[index]));
        // return animatedProp;
    }
    if (typeof animatedProp === 'object' && animatedProp.onFrame) {
        const animation = animatedProp;
        let value = animation.current;
        if (lastValue !== undefined) {
            if (typeof lastValue === 'object') {
                if (lastValue.value !== undefined) {
                    // previously it was a shared value
                    value = lastValue.value;
                }
                else if (lastValue.onFrame !== undefined) {
                    if ((lastAnimation === null || lastAnimation === void 0 ? void 0 : lastAnimation.current) !== undefined) {
                        // it was an animation before, copy its state
                        value = lastAnimation.current;
                    }
                    else if ((lastValue === null || lastValue === void 0 ? void 0 : lastValue.current) !== undefined) {
                        // it was initialized
                        value = lastValue.current;
                    }
                }
            }
            else {
                // previously it was a plain value, just set it as starting point
                value = lastValue;
            }
        }
        animation.callStart = (timestamp) => {
            animation.onStart(animation, value, timestamp, lastAnimation);
        };
        animation.callStart(getTimestamp());
        animation.callStart = null;
    }
    else if (typeof animatedProp === 'object') {
        // it is an object
        Object.keys(animatedProp).forEach((key) => prepareAnimation(animatedProp[key], lastAnimation && lastAnimation[key], lastValue && lastValue[key]));
    }
}
function runAnimations(animation, timestamp, key, result, animationsActive) {
    'worklet';
    if (!animationsActive.value) {
        return true;
    }
    if (Array.isArray(animation)) {
        result[key] = [];
        let allFinished = true;
        animation.forEach((entry, index) => {
            if (!runAnimations(entry, timestamp, index, result[key], animationsActive)) {
                allFinished = false;
            }
        });
        return allFinished;
    }
    else if (typeof animation === 'object' && animation.onFrame) {
        let finished = true;
        if (!animation.finished) {
            if (animation.callStart) {
                animation.callStart(timestamp);
                animation.callStart = null;
            }
            finished = animation.onFrame(animation, timestamp);
            animation.timestamp = timestamp;
            if (finished) {
                animation.finished = true;
                animation.callback && animation.callback(true /* finished */);
            }
        }
        result[key] = animation.current;
        return finished;
    }
    else if (typeof animation === 'object') {
        result[key] = {};
        let allFinished = true;
        Object.keys(animation).forEach((k) => {
            if (!runAnimations(animation[k], timestamp, k, result[key], animationsActive)) {
                allFinished = false;
            }
        });
        return allFinished;
    }
    else {
        result[key] = animation;
        return true;
    }
}
function styleUpdater(viewDescriptors, updater, state, maybeViewRef, animationsActive) {
    'worklet';
    var _a, _b;
    const animations = (_a = state.animations) !== null && _a !== void 0 ? _a : {};
    const newValues = (_b = updater()) !== null && _b !== void 0 ? _b : {};
    const oldValues = state.last;
    let hasAnimations = false;
    for (const key in newValues) {
        const value = newValues[key];
        if (isAnimated(value)) {
            prepareAnimation(value, animations[key], oldValues[key]);
            animations[key] = value;
            hasAnimations = true;
        }
        else {
            delete animations[key];
        }
    }
    if (hasAnimations) {
        const frame = (timestamp) => {
            const { animations, last, isAnimationCancelled } = state;
            if (isAnimationCancelled) {
                state.isAnimationRunning = false;
                return;
            }
            const updates = {};
            let allFinished = true;
            for (const propName in animations) {
                const finished = runAnimations(animations[propName], timestamp, propName, updates, animationsActive);
                if (finished) {
                    last[propName] = updates[propName];
                    delete animations[propName];
                }
                else {
                    allFinished = false;
                }
            }
            if (updates) {
                updateProps(viewDescriptors, updates, maybeViewRef);
            }
            if (!allFinished) {
                requestFrame(frame);
            }
            else {
                state.isAnimationRunning = false;
            }
        };
        state.animations = animations;
        if (!state.isAnimationRunning) {
            state.isAnimationCancelled = false;
            state.isAnimationRunning = true;
            if (_frameTimestamp) {
                frame(_frameTimestamp);
            }
            else {
                requestFrame(frame);
            }
        }
        state.last = Object.assign({}, oldValues, newValues);
        const style = getStyleWithoutAnimations(state.last);
        if (style) {
            updateProps(viewDescriptors, style, maybeViewRef);
        }
    }
    else {
        state.isAnimationCancelled = true;
        state.animations = [];
        const diff = styleDiff(oldValues, newValues);
        state.last = Object.assign({}, oldValues, newValues);
        if (diff) {
            updateProps(viewDescriptors, newValues, maybeViewRef);
        }
    }
}
function jestStyleUpdater(viewDescriptors, updater, state, maybeViewRef, animationsActive, animatedStyle, adapters = []) {
    'worklet';
    var _a, _b;
    const animations = (_a = state.animations) !== null && _a !== void 0 ? _a : {};
    const newValues = (_b = updater()) !== null && _b !== void 0 ? _b : {};
    const oldValues = state.last;
    // extract animated props
    let hasAnimations = false;
    Object.keys(animations).forEach((key) => {
        const value = newValues[key];
        if (!isAnimated(value)) {
            delete animations[key];
        }
    });
    Object.keys(newValues).forEach((key) => {
        const value = newValues[key];
        if (isAnimated(value)) {
            prepareAnimation(value, animations[key], oldValues[key]);
            animations[key] = value;
            hasAnimations = true;
        }
    });
    function frame(timestamp) {
        const { animations, last, isAnimationCancelled } = state;
        if (isAnimationCancelled) {
            state.isAnimationRunning = false;
            return;
        }
        const updates = {};
        let allFinished = true;
        Object.keys(animations).forEach((propName) => {
            const finished = runAnimations(animations[propName], timestamp, propName, updates, animationsActive);
            if (finished) {
                last[propName] = updates[propName];
                delete animations[propName];
            }
            else {
                allFinished = false;
            }
        });
        if (Object.keys(updates).length) {
            updatePropsJestWrapper(viewDescriptors, updates, maybeViewRef, animatedStyle, adapters);
        }
        if (!allFinished) {
            requestFrame(frame);
        }
        else {
            state.isAnimationRunning = false;
        }
    }
    if (hasAnimations) {
        state.animations = animations;
        if (!state.isAnimationRunning) {
            state.isAnimationCancelled = false;
            state.isAnimationRunning = true;
            if (_frameTimestamp) {
                frame(_frameTimestamp);
            }
            else {
                requestFrame(frame);
            }
        }
    }
    else {
        state.isAnimationCancelled = true;
        state.animations = [];
    }
    // calculate diff
    const diff = styleDiff(oldValues, newValues);
    state.last = Object.assign({}, oldValues, newValues);
    if (Object.keys(diff).length !== 0) {
        updatePropsJestWrapper(viewDescriptors, diff, maybeViewRef, animatedStyle, adapters);
    }
}
// check for invalid usage of shared values in returned object
function checkSharedValueUsage(prop, currentKey) {
    if (Array.isArray(prop)) {
        // if it's an array (i.ex. transform) validate all its elements
        for (const element of prop) {
            checkSharedValueUsage(element, currentKey);
        }
    }
    else if (typeof prop === 'object' && prop.value === undefined) {
        // if it's a nested object, run validation for all its props
        for (const key of Object.keys(prop)) {
            checkSharedValueUsage(prop[key], key);
        }
    }
    else if (currentKey !== undefined &&
        typeof prop === 'object' &&
        prop.value !== undefined) {
        // if shared value is passed insted of its value, throw an error
        throw new Error(`invalid value passed to \`${currentKey}\`, maybe you forgot to use \`.value\`?`);
    }
}
export function useAnimatedStyle(updater, dependencies, adapters) {
    var _a, _b;
    const viewsRef = makeViewsRefSet();
    const viewDescriptors = makeViewDescriptorsSet();
    const initRef = useRef();
    const inputs = Object.values((_a = updater._closure) !== null && _a !== void 0 ? _a : {});
    const adaptersArray = adapters
        ? Array.isArray(adapters)
            ? adapters
            : [adapters]
        : [];
    const adaptersHash = adapters ? buildWorkletsHash(adaptersArray) : null;
    const animationsActive = useSharedValue(true);
    const animatedStyle = useRef({});
    // build dependencies
    if (!dependencies) {
        dependencies = [...inputs, updater.__workletHash];
    }
    else {
        dependencies.push(updater.__workletHash);
    }
    adaptersHash && dependencies.push(adaptersHash);
    if (!initRef.current) {
        const initialStyle = initialUpdaterRun(updater);
        validateAnimatedStyles(initialStyle);
        initRef.current = {
            initial: {
                value: initialStyle,
                updater: updater,
            },
            remoteState: makeRemote({ last: initialStyle }),
            sharableViewDescriptors: makeMutable([]),
        };
        viewDescriptors.rebuildsharableViewDescriptors(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        initRef.current.sharableViewDescriptors);
    }
    dependencies.push((_b = initRef.current) === null || _b === void 0 ? void 0 : _b.sharableViewDescriptors.value);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const { initial, remoteState, sharableViewDescriptors } = initRef.current;
    const maybeViewRef = NativeReanimatedModule.native ? undefined : viewsRef;
    useEffect(() => {
        let fun;
        let updaterFn = updater;
        let optimalization = updater.__optimalization;
        if (adapters) {
            updaterFn = () => {
                'worklet';
                const newValues = updater();
                adaptersArray.forEach((adapter) => {
                    adapter(newValues);
                });
                return newValues;
            };
        }
        if (canApplyOptimalisation(updaterFn) && !shouldBeUseWeb()) {
            if (hasColorProps(updaterFn())) {
                updaterFn = () => {
                    'worklet';
                    const newValues = updaterFn();
                    const oldValues = remoteState.last;
                    const diff = styleDiff(oldValues, newValues);
                    remoteState.last = Object.assign({}, oldValues, newValues);
                    parseColors(diff);
                    return diff;
                };
            }
            else {
                updaterFn = () => {
                    'worklet';
                    const newValues = updaterFn();
                    const oldValues = remoteState.last;
                    const diff = styleDiff(oldValues, newValues);
                    remoteState.last = Object.assign({}, oldValues, newValues);
                    return diff;
                };
            }
        }
        else if (!shouldBeUseWeb()) {
            optimalization = 0;
            updaterFn = () => {
                'worklet';
                const style = updaterFn();
                parseColors(style);
                return style;
            };
        }
        if (typeof updater.__optimalization !== undefined) {
            updaterFn.__optimalization = optimalization;
        }
        if (isJest()) {
            fun = () => {
                'worklet';
                jestStyleUpdater(sharableViewDescriptors, updater, remoteState, maybeViewRef, animationsActive, animatedStyle, adaptersArray);
            };
        }
        else {
            fun = () => {
                'worklet';
                styleUpdater(sharableViewDescriptors, updaterFn, remoteState, maybeViewRef, animationsActive);
            };
        }
        const mapperId = startMapper(fun, inputs, [], updaterFn, 
        // TODO fix this
        sharableViewDescriptors);
        return () => {
            stopMapper(mapperId);
        };
    }, dependencies);
    useEffect(() => {
        animationsActive.value = true;
        return () => {
            // initRef.current = null;
            // viewsRef = null;
            animationsActive.value = false;
        };
    }, []);
    checkSharedValueUsage(initial.value);
    if (process.env.JEST_WORKER_ID) {
        return { viewDescriptors, initial: initial, viewsRef, animatedStyle };
    }
    else {
        return { viewDescriptors, initial: initial, viewsRef };
    }
}
