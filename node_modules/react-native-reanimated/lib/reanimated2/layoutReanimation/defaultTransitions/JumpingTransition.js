import { withSequence, withTiming } from '../../animation';
import { Easing } from '../../Easing';
import { BaseAnimationBuilder } from '../animationBuilder';
export class JumpingTransition extends BaseAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            var _a;
            const delayFunction = this.getDelayFunction();
            const callback = this.callbackV;
            const delay = this.getDelay();
            const duration = ((_a = this.durationV) !== null && _a !== void 0 ? _a : 300) / 2;
            const config = { duration: duration * 2 };
            return (values) => {
                'worklet';
                const d = Math.max(Math.abs(values.targetOriginX - values.currentOriginX), Math.abs(values.targetOriginY - values.currentOriginY));
                return {
                    initialValues: {
                        originX: values.currentOriginX,
                        originY: values.currentOriginY,
                        width: values.currentWidth,
                        height: values.currentHeight,
                    },
                    animations: {
                        originX: delayFunction(delay, withTiming(values.targetOriginX, config)),
                        originY: delayFunction(delay, withSequence(withTiming(Math.min(values.targetOriginY, values.currentOriginY) - d, {
                            duration,
                            easing: Easing.out(Easing.exp),
                        }), withTiming(values.targetOriginY, Object.assign(Object.assign({}, config), { duration, easing: Easing.bounce })))),
                        width: delayFunction(delay, withTiming(values.targetWidth, config)),
                        height: delayFunction(delay, withTiming(values.targetHeight, config)),
                    },
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new JumpingTransition();
    }
}
