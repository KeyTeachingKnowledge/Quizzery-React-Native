import { Easing } from '../../Easing';
import { withDelay, withSequence, withTiming } from '../../animation';
export class Keyframe {
    /*
      Keyframe definition should be passed in the constructor as the map
      which keys are between range 0 - 100 (%) and correspond to the point in the animation progress.
    */
    constructor(definitions) {
        this.build = () => {
            const delay = this.delayV;
            const delayFunction = this.getDelayFunction();
            const { keyframes, initialValues } = this.parseDefinitions();
            const callback = this.callbackV;
            return (_targetValues) => {
                'worklet';
                const animations = {};
                /*
                      For each style property, an animations sequence is created that corresponds with its key points.
                      Transform style properties require special handling because of their nested structure.
                */
                const addAnimation = (key) => {
                    var _a;
                    const keyframePoints = keyframes[key];
                    // in case if property was only passed as initial value
                    if (keyframePoints.length === 0)
                        return;
                    const animation = delayFunction(delay, keyframePoints.length === 1
                        ? withTiming(keyframePoints[0].value, {
                            duration: keyframePoints[0].duration,
                            easing: keyframePoints[0].easing
                                ? keyframePoints[0].easing
                                : Easing.linear,
                        })
                        : withSequence.apply(this, keyframePoints.map((keyframePoint) => withTiming(keyframePoint.value, {
                            duration: keyframePoint.duration,
                            easing: keyframePoint.easing
                                ? keyframePoint.easing
                                : Easing.linear,
                        }))));
                    if (key.includes('transform')) {
                        if (!('transform' in animations)) {
                            animations.transform = [];
                        }
                        (_a = animations.transform) === null || _a === void 0 ? void 0 : _a.push({
                            [key.split(':')[1]]: animation,
                        });
                    }
                    else {
                        animations[key] = animation;
                    }
                };
                Object.keys(initialValues).forEach((key) => {
                    if (key.includes('transform')) {
                        initialValues[key].forEach((transformProp, index) => {
                            Object.keys(transformProp).forEach((transformPropKey) => {
                                addAnimation(index.toString() + '_transform:' + transformPropKey);
                            });
                        });
                    }
                    else {
                        addAnimation(key);
                    }
                });
                return {
                    animations: animations,
                    initialValues: initialValues,
                    callback: callback,
                };
            };
        };
        this.definitions = definitions;
    }
    parseDefinitions() {
        /*
            Each style property contain an array with all their key points:
            value, duration of transition to that value, and optional easing function (defaults to Linear)
        */
        const parsedKeyframes = {};
        /*
          Parsing keyframes 'from' and 'to'.
        */
        if (this.definitions.from) {
            if (this.definitions['0']) {
                throw Error("You cannot provide both keyframe 0 and 'from' as they both specified initial values");
            }
            this.definitions['0'] = this.definitions.from;
            delete this.definitions.from;
        }
        if (this.definitions.to) {
            if (this.definitions['100']) {
                throw Error("You cannot provide both keyframe 100 and 'to' as they both specified values at the end of the animation.");
            }
            this.definitions['100'] = this.definitions.to;
            delete this.definitions.to;
        }
        /*
           One of the assumptions is that keyframe  0 is required to properly set initial values.
           Every other keyframe should contain properties from the set provided as initial values.
        */
        if (!this.definitions['0']) {
            throw Error("Please provide 0, or 'from' keyframe with initial state of your object.");
        }
        const initialValues = this.definitions['0'];
        /*
          Initialize parsedKeyframes for properties provided in initial keyframe
        */
        Object.keys(initialValues).forEach((styleProp) => {
            var _a;
            if (styleProp === 'transform') {
                (_a = initialValues[styleProp]) === null || _a === void 0 ? void 0 : _a.forEach((transformStyle, index) => {
                    Object.keys(transformStyle).forEach((transformProp) => {
                        parsedKeyframes[index.toString() + '_transform:' + transformProp] =
                            [];
                    });
                });
            }
            else {
                parsedKeyframes[styleProp] = [];
            }
        });
        const duration = this.durationV ? this.durationV : 500;
        const animationKeyPoints = Array.from(Object.keys(this.definitions));
        const getAnimationDuration = (key, currentKeyPoint) => {
            const maxDuration = (currentKeyPoint / 100) * duration;
            const currentDuration = parsedKeyframes[key].reduce((acc, value) => acc + value.duration, 0);
            return maxDuration - currentDuration;
        };
        /*
           Other keyframes can't contain properties that were not specified in initial keyframe.
        */
        const addKeyPoint = ({ key, value, currentKeyPoint, easing, }) => {
            if (!(key in parsedKeyframes)) {
                throw Error("Keyframe can contain only that set of properties that were provide with initial values (keyframe 0 or 'from')");
            }
            parsedKeyframes[key].push({
                duration: getAnimationDuration(key, currentKeyPoint),
                value: value,
                easing: easing,
            });
        };
        animationKeyPoints
            .filter((value) => parseInt(value) !== 0)
            .sort((a, b) => parseInt(a) - parseInt(b))
            .forEach((keyPoint) => {
            if (parseInt(keyPoint) < 0 || parseInt(keyPoint) > 100) {
                throw Error('Keyframe should be in between range 0 - 100.');
            }
            const keyframe = this.definitions[keyPoint];
            const easing = keyframe.easing;
            delete keyframe.easing;
            const addKeyPointWith = (key, value) => addKeyPoint({
                key,
                value,
                currentKeyPoint: parseInt(keyPoint),
                easing,
            });
            Object.keys(keyframe).forEach((key) => {
                var _a;
                if (key === 'transform') {
                    (_a = keyframe[key]) === null || _a === void 0 ? void 0 : _a.forEach((transformStyle, index) => {
                        Object.keys(transformStyle).forEach((transformProp) => {
                            addKeyPointWith(index.toString() + '_transform:' + transformProp, transformStyle[transformProp]);
                        });
                    });
                }
                else {
                    addKeyPointWith(key, keyframe[key]);
                }
            });
        });
        return { initialValues: initialValues, keyframes: parsedKeyframes };
    }
    duration(durationMs) {
        this.durationV = durationMs;
        return this;
    }
    delay(delayMs) {
        this.delayV = delayMs;
        return this;
    }
    withCallback(callback) {
        this.callbackV = callback;
        return this;
    }
    getDelayFunction() {
        const delay = this.delayV;
        return delay
            ? withDelay
            : (_, animation) => {
                'worklet';
                return animation;
            };
    }
}
