import { BaseAnimationBuilder } from '../animationBuilder';
import { Easing } from '../../Easing';
import { withTiming } from '../../animation';
export class CurvedTransition extends BaseAnimationBuilder {
    constructor() {
        super(...arguments);
        this.easingXV = Easing.in(Easing.ease);
        this.easingYV = Easing.out(Easing.ease);
        this.easingWidthV = Easing.in(Easing.exp);
        this.easingHeightV = Easing.out(Easing.exp);
        this.build = () => {
            var _a;
            const delayFunction = this.getDelayFunction();
            const callback = this.callbackV;
            const delay = this.getDelay();
            const duration = (_a = this.durationV) !== null && _a !== void 0 ? _a : 300;
            const easing = {
                easingX: this.easingXV,
                easingY: this.easingYV,
                easingWidth: this.easingWidthV,
                easingHeight: this.easingHeightV,
            };
            return (values) => {
                'worklet';
                return {
                    initialValues: {
                        originX: values.currentOriginX,
                        originY: values.currentOriginY,
                        width: values.currentWidth,
                        height: values.currentHeight,
                    },
                    animations: {
                        originX: delayFunction(delay, withTiming(values.targetOriginX, {
                            duration,
                            easing: easing.easingX,
                        })),
                        originY: delayFunction(delay, withTiming(values.targetOriginY, {
                            duration,
                            easing: easing.easingY,
                        })),
                        width: delayFunction(delay, withTiming(values.targetWidth, {
                            duration,
                            easing: easing.easingWidth,
                        })),
                        height: delayFunction(delay, withTiming(values.targetHeight, {
                            duration,
                            easing: easing.easingHeight,
                        })),
                    },
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new CurvedTransition();
    }
    static easingX(easing) {
        const instance = this.createInstance();
        return instance.easingX(easing);
    }
    easingX(easing) {
        this.easingXV = easing;
        return this;
    }
    static easingY(easing) {
        const instance = this.createInstance();
        return instance.easingY(easing);
    }
    easingY(easing) {
        this.easingYV = easing;
        return this;
    }
    static easingWidth(easing) {
        const instance = this.createInstance();
        return instance.easingWidth(easing);
    }
    easingWidth(easing) {
        this.easingWidthV = easing;
        return this;
    }
    static easingHeight(easing) {
        const instance = this.createInstance();
        return instance.easingHeight(easing);
    }
    easingHeight(easing) {
        this.easingHeightV = easing;
        return this;
    }
}
