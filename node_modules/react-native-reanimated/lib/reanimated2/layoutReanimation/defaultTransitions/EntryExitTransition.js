import { BaseAnimationBuilder } from '../animationBuilder';
import { withSequence, withTiming } from '../../animation';
import { FadeIn, FadeOut } from '../defaultAnimations/Fade';
export class EntryExitTransition extends BaseAnimationBuilder {
    constructor() {
        super(...arguments);
        this.enteringV = FadeIn;
        this.exitingV = FadeOut;
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const callback = this.callbackV;
            const delay = this.getDelay();
            const enteringAnimation = this.enteringV.build();
            const exitingAnimation = this.exitingV.build();
            const exitingDuration = this.exitingV.getDuration();
            return (values) => {
                'worklet';
                var _a, _b, _c, _d;
                const enteringValues = enteringAnimation(values);
                const exitingValues = exitingAnimation(values);
                const animations = {
                    transform: [],
                };
                for (const prop of Object.keys(exitingValues.animations)) {
                    if (prop === 'transform') {
                        (_a = exitingValues.animations[prop]) === null || _a === void 0 ? void 0 : _a.forEach((value, index) => {
                            var _a;
                            for (const transformProp of Object.keys(value)) {
                                (_a = animations.transform) === null || _a === void 0 ? void 0 : _a.push({
                                    [transformProp]: delayFunction(delay, withSequence(value[transformProp], withTiming(exitingValues.initialValues.transform
                                        ? exitingValues.initialValues.transform[index][transformProp]
                                        : 0, { duration: 0 }))),
                                });
                            }
                        });
                    }
                    else {
                        const sequence = enteringValues.animations[prop] !== undefined
                            ? [
                                exitingValues.animations[prop],
                                withTiming(enteringValues.initialValues[prop], {
                                    duration: 0,
                                }),
                                enteringValues.animations[prop],
                            ]
                            : [
                                exitingValues.animations[prop],
                                withTiming(Object.keys(values).includes(prop)
                                    ? values[prop]
                                    : exitingValues.initialValues[prop], { duration: 0 }),
                            ];
                        animations[prop] = delayFunction(delay, withSequence(...sequence));
                    }
                }
                for (const prop of Object.keys(enteringValues.animations)) {
                    if (prop === 'transform') {
                        (_b = enteringValues.animations[prop]) === null || _b === void 0 ? void 0 : _b.forEach((value, index) => {
                            var _a;
                            for (const transformProp of Object.keys(value)) {
                                (_a = animations.transform) === null || _a === void 0 ? void 0 : _a.push({
                                    [transformProp]: delayFunction(delay + exitingDuration, withSequence(withTiming(enteringValues.initialValues.transform
                                        ? enteringValues.initialValues.transform[index][transformProp]
                                        : 0, { duration: exitingDuration }), value[transformProp])),
                                });
                            }
                        });
                    }
                    else if (animations[prop] !== undefined) {
                        // it was already added in the previous loop
                        continue;
                    }
                    else {
                        animations[prop] = delayFunction(delay, withSequence(withTiming(enteringValues.initialValues[prop], { duration: 0 }), enteringValues.animations[prop]));
                    }
                }
                const mergedTransform = ((_c = exitingValues.initialValues.transform) !== null && _c !== void 0 ? _c : []).concat(((_d = enteringValues.animations.transform) !== null && _d !== void 0 ? _d : []).map((value) => {
                    const objectKeys = Object.keys(value);
                    if ((objectKeys === null || objectKeys === void 0 ? void 0 : objectKeys.length) < 1) {
                        console.error(`[Reanimated]: \${value} is not a valid Transform object`);
                        return value;
                    }
                    const transformProp = objectKeys[0];
                    const current = value[transformProp].current;
                    if (typeof current === 'string') {
                        if (current.includes('deg'))
                            return {
                                [transformProp]: '0deg',
                            };
                        else
                            return {
                                [transformProp]: '0',
                            };
                    }
                    else if (transformProp.includes('translate')) {
                        return { [transformProp]: 0 };
                    }
                    else {
                        return { [transformProp]: 1 };
                    }
                    return value;
                }));
                return {
                    initialValues: Object.assign(Object.assign({}, exitingValues.initialValues), { originX: values.currentOriginX, originY: values.currentOriginY, width: values.currentWidth, height: values.currentHeight, transform: mergedTransform }),
                    animations: Object.assign({ originX: delayFunction(delay + exitingDuration, withTiming(values.targetOriginX, { duration: exitingDuration })), originY: delayFunction(delay + exitingDuration, withTiming(values.targetOriginY, { duration: exitingDuration })), width: delayFunction(delay + exitingDuration, withTiming(values.targetWidth, { duration: exitingDuration })), height: delayFunction(delay + exitingDuration, withTiming(values.targetHeight, { duration: exitingDuration })) }, animations),
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new EntryExitTransition();
    }
    static entering(animation) {
        const instance = this.createInstance();
        return instance.entering(animation);
    }
    entering(animation) {
        this.enteringV = animation;
        return this;
    }
    static exiting(animation) {
        const instance = this.createInstance();
        return instance.exiting(animation);
    }
    exiting(animation) {
        this.exitingV = animation;
        return this;
    }
}
export function combineTransition(exiting, entering) {
    return EntryExitTransition.entering(entering).exiting(exiting);
}
