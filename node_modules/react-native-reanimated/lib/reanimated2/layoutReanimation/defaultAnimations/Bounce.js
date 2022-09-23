import { withSequence, withTiming } from '../../animation';
import { Dimensions } from 'react-native';
import { ComplexAnimationBuilder } from '../animationBuilder/ComplexAnimationBuilder';
const { width, height } = Dimensions.get('window');
export class BounceIn extends ComplexAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const delay = this.getDelay();
            const duration = this.getDuration();
            const callback = this.callbackV;
            const initialValues = this.initialValues;
            return () => {
                'worklet';
                return {
                    animations: {
                        transform: [
                            {
                                scale: delayFunction(delay, withSequence(withTiming(1.2, { duration: duration * 0.55 }), withTiming(0.9, { duration: duration * 0.15 }), withTiming(1.1, { duration: duration * 0.15 }), withTiming(1, { duration: duration * 0.15 }))),
                            },
                        ],
                    },
                    initialValues: Object.assign({ transform: [{ scale: 0 }] }, initialValues),
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new BounceIn();
    }
    static getDuration() {
        return 600;
    }
    getDuration() {
        var _a;
        return (_a = this.durationV) !== null && _a !== void 0 ? _a : 600;
    }
}
export class BounceInDown extends ComplexAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const delay = this.getDelay();
            const duration = this.getDuration();
            const callback = this.callbackV;
            const initialValues = this.initialValues;
            return () => {
                'worklet';
                return {
                    animations: {
                        transform: [
                            {
                                translateY: delayFunction(delay, withSequence(withTiming(-20, { duration: duration * 0.55 }), withTiming(10, { duration: duration * 0.15 }), withTiming(-10, { duration: duration * 0.15 }), withTiming(0, { duration: duration * 0.15 }))),
                            },
                        ],
                    },
                    initialValues: Object.assign({ transform: [
                            {
                                translateY: height,
                            },
                        ] }, initialValues),
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new BounceInDown();
    }
    static getDuration() {
        return 600;
    }
    getDuration() {
        var _a;
        return (_a = this.durationV) !== null && _a !== void 0 ? _a : 600;
    }
}
export class BounceInUp extends ComplexAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const delay = this.getDelay();
            const duration = this.getDuration();
            const callback = this.callbackV;
            const initialValues = this.initialValues;
            return () => {
                'worklet';
                return {
                    animations: {
                        transform: [
                            {
                                translateY: delayFunction(delay, withSequence(withTiming(20, { duration: duration * 0.55 }), withTiming(-10, { duration: duration * 0.15 }), withTiming(10, { duration: duration * 0.15 }), withTiming(0, { duration: duration * 0.15 }))),
                            },
                        ],
                    },
                    initialValues: Object.assign({ transform: [{ translateY: -height }] }, initialValues),
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new BounceInUp();
    }
    static getDuration() {
        return 600;
    }
    getDuration() {
        var _a;
        return (_a = this.durationV) !== null && _a !== void 0 ? _a : 600;
    }
}
export class BounceInLeft extends ComplexAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const delay = this.getDelay();
            const duration = this.getDuration();
            const callback = this.callbackV;
            const initialValues = this.initialValues;
            return () => {
                'worklet';
                return {
                    animations: {
                        transform: [
                            {
                                translateX: delayFunction(delay, withSequence(withTiming(20, { duration: duration * 0.55 }), withTiming(-10, { duration: duration * 0.15 }), withTiming(10, { duration: duration * 0.15 }), withTiming(0, { duration: duration * 0.15 }))),
                            },
                        ],
                    },
                    initialValues: Object.assign({ transform: [{ translateX: -width }] }, initialValues),
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new BounceInLeft();
    }
    static getDuration() {
        return 600;
    }
    getDuration() {
        var _a;
        return (_a = this.durationV) !== null && _a !== void 0 ? _a : 600;
    }
}
export class BounceInRight extends ComplexAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const delay = this.getDelay();
            const duration = this.getDuration();
            const callback = this.callbackV;
            const initialValues = this.initialValues;
            return () => {
                'worklet';
                return {
                    animations: {
                        transform: [
                            {
                                translateX: delayFunction(delay, withSequence(withTiming(-20, { duration: duration * 0.55 }), withTiming(10, { duration: duration * 0.15 }), withTiming(-10, { duration: duration * 0.15 }), withTiming(0, { duration: duration * 0.15 }))),
                            },
                        ],
                    },
                    initialValues: Object.assign({ transform: [{ translateX: width }] }, initialValues),
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new BounceInRight();
    }
    static getDuration() {
        return 600;
    }
    getDuration() {
        var _a;
        return (_a = this.durationV) !== null && _a !== void 0 ? _a : 600;
    }
}
export class BounceOut extends ComplexAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const delay = this.getDelay();
            const duration = this.getDuration();
            const callback = this.callbackV;
            const initialValues = this.initialValues;
            return () => {
                'worklet';
                return {
                    animations: {
                        transform: [
                            {
                                scale: delayFunction(delay, withSequence(withTiming(1.1, { duration: duration * 0.15 }), withTiming(0.9, { duration: duration * 0.15 }), withTiming(1.2, { duration: duration * 0.15 }), withTiming(0, { duration: duration * 0.55 }))),
                            },
                        ],
                    },
                    initialValues: Object.assign({ transform: [{ scale: 1 }] }, initialValues),
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new BounceOut();
    }
    static getDuration() {
        return 600;
    }
    getDuration() {
        var _a;
        return (_a = this.durationV) !== null && _a !== void 0 ? _a : 600;
    }
}
export class BounceOutDown extends ComplexAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const delay = this.getDelay();
            const duration = this.getDuration();
            const callback = this.callbackV;
            const initialValues = this.initialValues;
            return () => {
                'worklet';
                return {
                    animations: {
                        transform: [
                            {
                                translateY: delayFunction(delay, withSequence(withTiming(-10, { duration: duration * 0.15 }), withTiming(10, { duration: duration * 0.15 }), withTiming(-20, { duration: duration * 0.15 }), withTiming(height, {
                                    duration: duration * 0.55,
                                }))),
                            },
                        ],
                    },
                    initialValues: Object.assign({ transform: [{ translateY: 0 }] }, initialValues),
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new BounceOutDown();
    }
    static getDuration() {
        return 600;
    }
    getDuration() {
        var _a;
        return (_a = this.durationV) !== null && _a !== void 0 ? _a : 600;
    }
}
export class BounceOutUp extends ComplexAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const delay = this.getDelay();
            const duration = this.getDuration();
            const callback = this.callbackV;
            const initialValues = this.initialValues;
            return () => {
                'worklet';
                return {
                    animations: {
                        transform: [
                            {
                                translateY: delayFunction(delay, withSequence(withTiming(10, { duration: duration * 0.15 }), withTiming(-10, { duration: duration * 0.15 }), withTiming(20, { duration: duration * 0.15 }), withTiming(-height, {
                                    duration: duration * 0.55,
                                }))),
                            },
                        ],
                    },
                    initialValues: Object.assign({ transform: [{ translateY: 0 }] }, initialValues),
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new BounceOutUp();
    }
    static getDuration() {
        return 600;
    }
    getDuration() {
        var _a;
        return (_a = this.durationV) !== null && _a !== void 0 ? _a : 600;
    }
}
export class BounceOutLeft extends ComplexAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const delay = this.getDelay();
            const duration = this.getDuration();
            const callback = this.callbackV;
            const initialValues = this.initialValues;
            return () => {
                'worklet';
                return {
                    animations: {
                        transform: [
                            {
                                translateX: delayFunction(delay, withSequence(withTiming(10, { duration: duration * 0.15 }), withTiming(-10, { duration: duration * 0.15 }), withTiming(20, { duration: duration * 0.15 }), withTiming(-width, {
                                    duration: duration * 0.55,
                                }))),
                            },
                        ],
                    },
                    initialValues: Object.assign({ transform: [{ translateX: 0 }] }, initialValues),
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new BounceOutLeft();
    }
    static getDuration() {
        return 600;
    }
    getDuration() {
        var _a;
        return (_a = this.durationV) !== null && _a !== void 0 ? _a : 600;
    }
}
export class BounceOutRight extends ComplexAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const delay = this.getDelay();
            const duration = this.getDuration();
            const callback = this.callbackV;
            const initialValues = this.initialValues;
            return () => {
                'worklet';
                return {
                    animations: {
                        transform: [
                            {
                                translateX: delayFunction(delay, withSequence(withTiming(-10, { duration: duration * 0.15 }), withTiming(10, { duration: duration * 0.15 }), withTiming(-20, { duration: duration * 0.15 }), withTiming(width, {
                                    duration: duration * 0.55,
                                }))),
                            },
                        ],
                    },
                    initialValues: Object.assign({ transform: [{ translateX: 0 }] }, initialValues),
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new BounceOutRight();
    }
    static getDuration() {
        return 600;
    }
    getDuration() {
        var _a;
        return (_a = this.durationV) !== null && _a !== void 0 ? _a : 600;
    }
}
