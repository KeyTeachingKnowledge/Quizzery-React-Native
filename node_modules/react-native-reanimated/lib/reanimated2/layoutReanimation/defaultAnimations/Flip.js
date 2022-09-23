import { ComplexAnimationBuilder } from '../animationBuilder';
export class FlipInXUp extends ComplexAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const [animation, config] = this.getAnimationAndConfig();
            const delay = this.getDelay();
            const callback = this.callbackV;
            const initialValues = this.initialValues;
            return (targetValues) => {
                'worklet';
                return {
                    initialValues: Object.assign({ transform: [
                            { perspective: 500 },
                            { rotateX: '90deg' },
                            { translateY: -targetValues.targetHeight },
                        ] }, initialValues),
                    animations: {
                        transform: [
                            { perspective: 500 },
                            { rotateX: delayFunction(delay, animation('0deg', config)) },
                            { translateY: delayFunction(delay, animation(0, config)) },
                        ],
                    },
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new FlipInXUp();
    }
}
export class FlipInYLeft extends ComplexAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const [animation, config] = this.getAnimationAndConfig();
            const delay = this.getDelay();
            const callback = this.callbackV;
            const initialValues = this.initialValues;
            return (targetValues) => {
                'worklet';
                return {
                    initialValues: Object.assign({ transform: [
                            { perspective: 500 },
                            { rotateY: '-90deg' },
                            { translateX: -targetValues.targetWidth },
                        ] }, initialValues),
                    animations: {
                        transform: [
                            { perspective: delayFunction(delay, animation(500, config)) },
                            { rotateY: delayFunction(delay, animation('0deg', config)) },
                            { translateX: delayFunction(delay, animation(0, config)) },
                        ],
                    },
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new FlipInYLeft();
    }
}
export class FlipInXDown extends ComplexAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const [animation, config] = this.getAnimationAndConfig();
            const delay = this.getDelay();
            const callback = this.callbackV;
            const initialValues = this.initialValues;
            return (targetValues) => {
                'worklet';
                return {
                    initialValues: Object.assign({ transform: [
                            { perspective: 500 },
                            { rotateX: '-90deg' },
                            { translateY: targetValues.targetHeight },
                        ] }, initialValues),
                    animations: {
                        transform: [
                            { perspective: delayFunction(delay, animation(500, config)) },
                            { rotateX: delayFunction(delay, animation('0deg', config)) },
                            { translateY: delayFunction(delay, animation(0, config)) },
                        ],
                    },
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new FlipInXDown();
    }
}
export class FlipInYRight extends ComplexAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const [animation, config] = this.getAnimationAndConfig();
            const delay = this.getDelay();
            const callback = this.callbackV;
            const initialValues = this.initialValues;
            return (targetValues) => {
                'worklet';
                return {
                    initialValues: Object.assign({ transform: [
                            { perspective: 500 },
                            { rotateY: '90deg' },
                            { translateX: targetValues.targetWidth },
                        ] }, initialValues),
                    animations: {
                        transform: [
                            { perspective: delayFunction(delay, animation(500, config)) },
                            { rotateY: delayFunction(delay, animation('0deg', config)) },
                            { translateX: delayFunction(delay, animation(0, config)) },
                        ],
                    },
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new FlipInYRight();
    }
}
export class FlipInEasyX extends ComplexAnimationBuilder {
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
                    initialValues: Object.assign({ transform: [{ perspective: 500 }, { rotateX: '90deg' }] }, initialValues),
                    animations: {
                        transform: [
                            { perspective: delayFunction(delay, animation(500, config)) },
                            { rotateX: delayFunction(delay, animation('0deg', config)) },
                        ],
                    },
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new FlipInEasyX();
    }
}
export class FlipInEasyY extends ComplexAnimationBuilder {
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
                    initialValues: Object.assign({ transform: [{ perspective: 500 }, { rotateY: '90deg' }] }, initialValues),
                    animations: {
                        transform: [
                            { perspective: delayFunction(delay, animation(500, config)) },
                            { rotateY: delayFunction(delay, animation('0deg', config)) },
                        ],
                    },
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new FlipInEasyY();
    }
}
export class FlipOutXUp extends ComplexAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const [animation, config] = this.getAnimationAndConfig();
            const delay = this.getDelay();
            const callback = this.callbackV;
            const initialValues = this.initialValues;
            return (targetValues) => {
                'worklet';
                return {
                    initialValues: Object.assign({ transform: [
                            { perspective: 500 },
                            { rotateX: '0deg' },
                            { translateY: 0 },
                        ] }, initialValues),
                    animations: {
                        transform: [
                            { perspective: delayFunction(delay, animation(500, config)) },
                            { rotateX: delayFunction(delay, animation('90deg', config)) },
                            {
                                translateY: delayFunction(delay, animation(-targetValues.currentHeight, config)),
                            },
                        ],
                    },
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new FlipOutXUp();
    }
}
export class FlipOutYLeft extends ComplexAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const [animation, config] = this.getAnimationAndConfig();
            const delay = this.getDelay();
            const callback = this.callbackV;
            const initialValues = this.initialValues;
            return (targetValues) => {
                'worklet';
                return {
                    initialValues: Object.assign({ transform: [
                            { perspective: 500 },
                            { rotateY: '0deg' },
                            { translateX: 0 },
                        ] }, initialValues),
                    animations: {
                        transform: [
                            { perspective: delayFunction(delay, animation(500, config)) },
                            { rotateY: delayFunction(delay, animation('-90deg', config)) },
                            {
                                translateX: delayFunction(delay, animation(-targetValues.currentWidth, config)),
                            },
                        ],
                    },
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new FlipOutYLeft();
    }
}
export class FlipOutXDown extends ComplexAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const [animation, config] = this.getAnimationAndConfig();
            const delay = this.getDelay();
            const callback = this.callbackV;
            const initialValues = this.initialValues;
            return (targetValues) => {
                'worklet';
                return {
                    initialValues: Object.assign({ transform: [
                            { perspective: 500 },
                            { rotateX: '0deg' },
                            { translateY: 0 },
                        ] }, initialValues),
                    animations: {
                        transform: [
                            { perspective: delayFunction(delay, animation(500, config)) },
                            { rotateX: delayFunction(delay, animation('-90deg', config)) },
                            {
                                translateY: delayFunction(delay, animation(targetValues.currentHeight, config)),
                            },
                        ],
                    },
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new FlipOutXDown();
    }
}
export class FlipOutYRight extends ComplexAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const [animation, config] = this.getAnimationAndConfig();
            const delay = this.getDelay();
            const callback = this.callbackV;
            const initialValues = this.initialValues;
            return (targetValues) => {
                'worklet';
                return {
                    initialValues: Object.assign({ transform: [
                            { perspective: 500 },
                            { rotateY: '0deg' },
                            { translateX: 0 },
                        ] }, initialValues),
                    animations: {
                        transform: [
                            { perspective: delayFunction(delay, animation(500, config)) },
                            { rotateY: delayFunction(delay, animation('90deg', config)) },
                            {
                                translateX: delayFunction(delay, animation(targetValues.currentWidth, config)),
                            },
                        ],
                    },
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new FlipOutYRight();
    }
}
export class FlipOutEasyX extends ComplexAnimationBuilder {
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
                    initialValues: Object.assign({ transform: [{ perspective: 500 }, { rotateX: '0deg' }] }, initialValues),
                    animations: {
                        transform: [
                            { perspective: delayFunction(delay, animation(500, config)) },
                            { rotateX: delayFunction(delay, animation('90deg', config)) },
                        ],
                    },
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new FlipOutEasyX();
    }
}
export class FlipOutEasyY extends ComplexAnimationBuilder {
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
                    initialValues: Object.assign({ transform: [{ perspective: 500 }, { rotateY: '0deg' }] }, initialValues),
                    animations: {
                        transform: [
                            { perspective: delayFunction(delay, animation(500, config)) },
                            { rotateY: delayFunction(delay, animation('90deg', config)) },
                        ],
                    },
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new FlipOutEasyY();
    }
}
