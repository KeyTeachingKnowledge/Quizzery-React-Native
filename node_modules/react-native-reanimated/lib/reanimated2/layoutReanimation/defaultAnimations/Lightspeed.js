import { Dimensions } from 'react-native';
import { withSequence, withTiming } from '../../animation';
import { ComplexAnimationBuilder } from '../animationBuilder';
const { width } = Dimensions.get('window');
export class LightSpeedInRight extends ComplexAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const [animation, config] = this.getAnimationAndConfig();
            const delay = this.getDelay();
            const duration = this.getDuration();
            const callback = this.callbackV;
            const initialValues = this.initialValues;
            return () => {
                'worklet';
                return {
                    animations: {
                        opacity: delayFunction(delay, withTiming(1, { duration: duration })),
                        transform: [
                            {
                                translateX: delayFunction(delay, animation(0, Object.assign(Object.assign({}, config), { duration: duration * 0.7 }))),
                            },
                            {
                                skewX: delayFunction(delay, withSequence(withTiming('10deg', { duration: duration * 0.7 }), withTiming('-5deg', { duration: duration * 0.15 }), withTiming('0deg', { duration: duration * 0.15 }))),
                            },
                        ],
                    },
                    initialValues: Object.assign({ opacity: 0, transform: [{ translateX: width }, { skewX: '-45deg' }] }, initialValues),
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new LightSpeedInRight();
    }
}
export class LightSpeedInLeft extends ComplexAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const [animation, config] = this.getAnimationAndConfig();
            const delay = this.getDelay();
            const duration = this.getDuration();
            const callback = this.callbackV;
            const initialValues = this.initialValues;
            return () => {
                'worklet';
                return {
                    animations: {
                        opacity: delayFunction(delay, withTiming(1, { duration: duration })),
                        transform: [
                            {
                                translateX: delayFunction(delay, animation(0, Object.assign(Object.assign({}, config), { duration: duration * 0.7 }))),
                            },
                            {
                                skewX: delayFunction(delay, withSequence(withTiming('-10deg', { duration: duration * 0.7 }), withTiming('5deg', { duration: duration * 0.15 }), withTiming('0deg', { duration: duration * 0.15 }))),
                            },
                        ],
                    },
                    initialValues: Object.assign({ opacity: 0, transform: [{ translateX: -width }, { skewX: '45deg' }] }, initialValues),
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new LightSpeedInLeft();
    }
}
export class LightSpeedOutRight extends ComplexAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const [animation, config] = this.getAnimationAndConfig();
            const delay = this.getDelay();
            const callback = this.callbackV;
            const initialValues = this.initialValues;
            return () => {
                'worklet';
                return {
                    animations: {
                        opacity: delayFunction(delay, animation(0, config)),
                        transform: [
                            {
                                translateX: delayFunction(delay, animation(width, config)),
                            },
                            {
                                skewX: delayFunction(delay, animation('-45deg', config)),
                            },
                        ],
                    },
                    initialValues: Object.assign({ opacity: 1, transform: [{ translateX: 0 }, { skewX: '0deg' }] }, initialValues),
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new LightSpeedOutRight();
    }
}
export class LightSpeedOutLeft extends ComplexAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const [animation, config] = this.getAnimationAndConfig();
            const delay = this.getDelay();
            const callback = this.callbackV;
            const initialValues = this.initialValues;
            return () => {
                'worklet';
                return {
                    animations: {
                        opacity: delayFunction(delay, animation(0, config)),
                        transform: [
                            {
                                translateX: delayFunction(delay, animation(-width, config)),
                            },
                            {
                                skewX: delayFunction(delay, animation('45deg', config)),
                            },
                        ],
                    },
                    initialValues: Object.assign({ opacity: 1, transform: [{ translateX: 0 }, { skewX: '0deg' }] }, initialValues),
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new LightSpeedOutLeft();
    }
}
