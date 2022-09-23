import { Dimensions } from 'react-native';
import { ComplexAnimationBuilder } from '../animationBuilder';
const { width, height } = Dimensions.get('window');
export class ZoomIn extends ComplexAnimationBuilder {
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
                        transform: [{ scale: delayFunction(delay, animation(1, config)) }],
                    },
                    initialValues: Object.assign({ transform: [{ scale: 0 }] }, initialValues),
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new ZoomIn();
    }
}
export class ZoomInRotate extends ComplexAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const [animation, config] = this.getAnimationAndConfig();
            const delay = this.getDelay();
            const rotate = this.rotateV ? this.rotateV : '0.3';
            const callback = this.callbackV;
            const initialValues = this.initialValues;
            return () => {
                'worklet';
                return {
                    animations: {
                        transform: [
                            { scale: delayFunction(delay, animation(1, config)) },
                            { rotate: delayFunction(delay, animation(0, config)) },
                        ],
                    },
                    initialValues: Object.assign({ transform: [{ scale: 0 }, { rotate: rotate }] }, initialValues),
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new ZoomInRotate();
    }
}
export class ZoomInLeft extends ComplexAnimationBuilder {
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
                        transform: [
                            { translateX: delayFunction(delay, animation(0, config)) },
                            { scale: delayFunction(delay, animation(1, config)) },
                        ],
                    },
                    initialValues: Object.assign({ transform: [{ translateX: -width }, { scale: 0 }] }, initialValues),
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new ZoomInLeft();
    }
}
export class ZoomInRight extends ComplexAnimationBuilder {
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
                        transform: [
                            { translateX: delayFunction(delay, animation(0, config)) },
                            { scale: delayFunction(delay, animation(1, config)) },
                        ],
                    },
                    initialValues: Object.assign({ transform: [{ translateX: width }, { scale: 0 }] }, initialValues),
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new ZoomInRight();
    }
}
export class ZoomInUp extends ComplexAnimationBuilder {
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
                        transform: [
                            { translateY: delayFunction(delay, animation(0, config)) },
                            { scale: delayFunction(delay, animation(1, config)) },
                        ],
                    },
                    initialValues: Object.assign({ transform: [{ translateY: -height }, { scale: 0 }] }, initialValues),
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new ZoomInUp();
    }
}
export class ZoomInDown extends ComplexAnimationBuilder {
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
                        transform: [
                            { translateY: delayFunction(delay, animation(0, config)) },
                            { scale: delayFunction(delay, animation(1, config)) },
                        ],
                    },
                    initialValues: Object.assign({ transform: [{ translateY: height }, { scale: 0 }] }, initialValues),
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new ZoomInDown();
    }
}
export class ZoomInEasyUp extends ComplexAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const [animation, config] = this.getAnimationAndConfig();
            const delay = this.getDelay();
            const callback = this.callbackV;
            const initialValues = this.initialValues;
            return (values) => {
                'worklet';
                return {
                    animations: {
                        transform: [
                            { translateY: delayFunction(delay, animation(0, config)) },
                            { scale: delayFunction(delay, animation(1, config)) },
                        ],
                    },
                    initialValues: Object.assign({ transform: [{ translateY: -values.targetHeight }, { scale: 0 }] }, initialValues),
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new ZoomInEasyUp();
    }
}
export class ZoomInEasyDown extends ComplexAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const [animation, config] = this.getAnimationAndConfig();
            const delay = this.getDelay();
            const callback = this.callbackV;
            const initialValues = this.initialValues;
            return (values) => {
                'worklet';
                return {
                    animations: {
                        transform: [
                            { translateY: delayFunction(delay, animation(0, config)) },
                            { scale: delayFunction(delay, animation(1, config)) },
                        ],
                    },
                    initialValues: Object.assign({ transform: [{ translateY: values.targetHeight }, { scale: 0 }] }, initialValues),
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new ZoomInEasyDown();
    }
}
export class ZoomOut extends ComplexAnimationBuilder {
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
                        transform: [{ scale: delayFunction(delay, animation(0, config)) }],
                    },
                    initialValues: Object.assign({ transform: [{ scale: 1 }] }, initialValues),
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new ZoomOut();
    }
}
export class ZoomOutRotate extends ComplexAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const [animation, config] = this.getAnimationAndConfig();
            const delay = this.getDelay();
            const rotate = this.rotateV ? this.rotateV : '0.3';
            const callback = this.callbackV;
            const initialValues = this.initialValues;
            return () => {
                'worklet';
                return {
                    animations: {
                        transform: [
                            { scale: delayFunction(delay, animation(0, config)) },
                            { rotate: delayFunction(delay, animation(rotate, config)) },
                        ],
                    },
                    initialValues: Object.assign({ transform: [{ scale: 1 }, { rotate: '0' }] }, initialValues),
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new ZoomOutRotate();
    }
}
export class ZoomOutLeft extends ComplexAnimationBuilder {
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
                        transform: [
                            { translateX: delayFunction(delay, animation(-width, config)) },
                            { scale: delayFunction(delay, animation(0, config)) },
                        ],
                    },
                    initialValues: Object.assign({ transform: [{ translateX: 0 }, { scale: 1 }] }, initialValues),
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new ZoomOutLeft();
    }
}
export class ZoomOutRight extends ComplexAnimationBuilder {
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
                        transform: [
                            { translateX: delayFunction(delay, animation(width, config)) },
                            { scale: delayFunction(delay, animation(0, config)) },
                        ],
                    },
                    initialValues: Object.assign({ transform: [{ translateX: 0 }, { scale: 1 }] }, initialValues),
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new ZoomOutRight();
    }
}
export class ZoomOutUp extends ComplexAnimationBuilder {
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
                        transform: [
                            { translateY: delayFunction(delay, animation(-height, config)) },
                            { scale: delayFunction(delay, animation(0, config)) },
                        ],
                    },
                    initialValues: Object.assign({ transform: [{ translateY: 0 }, { scale: 1 }] }, initialValues),
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new ZoomOutUp();
    }
}
export class ZoomOutDown extends ComplexAnimationBuilder {
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
                        transform: [
                            { translateY: delayFunction(delay, animation(height, config)) },
                            { scale: delayFunction(delay, animation(0, config)) },
                        ],
                    },
                    initialValues: Object.assign({ transform: [{ translateY: 0 }, { scale: 1 }] }, initialValues),
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new ZoomOutDown();
    }
}
export class ZoomOutEasyUp extends ComplexAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const [animation, config] = this.getAnimationAndConfig();
            const delay = this.getDelay();
            const callback = this.callbackV;
            const initialValues = this.initialValues;
            return (values) => {
                'worklet';
                return {
                    animations: {
                        transform: [
                            {
                                translateY: delayFunction(delay, animation(-values.currentHeight, config)),
                            },
                            { scale: delayFunction(delay, animation(0, config)) },
                        ],
                    },
                    initialValues: Object.assign({ transform: [{ translateY: 0 }, { scale: 1 }] }, initialValues),
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new ZoomOutEasyUp();
    }
}
export class ZoomOutEasyDown extends ComplexAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const [animation, config] = this.getAnimationAndConfig();
            const delay = this.getDelay();
            const callback = this.callbackV;
            const initialValues = this.initialValues;
            return (values) => {
                'worklet';
                return {
                    animations: {
                        transform: [
                            {
                                translateY: delayFunction(delay, animation(values.currentHeight, config)),
                            },
                            { scale: delayFunction(delay, animation(0, config)) },
                        ],
                    },
                    initialValues: Object.assign({ transform: [{ translateY: 0 }, { scale: 1 }] }, initialValues),
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new ZoomOutEasyDown();
    }
}
