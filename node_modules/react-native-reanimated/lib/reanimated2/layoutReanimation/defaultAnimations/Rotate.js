import { ComplexAnimationBuilder } from '../animationBuilder';
export class RotateInDownLeft extends ComplexAnimationBuilder {
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
                        opacity: delayFunction(delay, animation(1, config)),
                        transform: [
                            { rotate: delayFunction(delay, animation('0deg', config)) },
                            { translateX: delayFunction(delay, animation(0, config)) },
                            { translateY: delayFunction(delay, animation(0, config)) },
                        ],
                    },
                    initialValues: Object.assign({ opacity: 0, transform: [
                            { rotate: '-90deg' },
                            { translateX: values.targetWidth / 2 - values.targetHeight / 2 },
                            { translateY: -(values.targetWidth / 2 - values.targetHeight / 2) },
                        ] }, initialValues),
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new RotateInDownLeft();
    }
}
export class RotateInDownRight extends ComplexAnimationBuilder {
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
                        opacity: delayFunction(delay, animation(1, config)),
                        transform: [
                            { rotate: delayFunction(delay, animation('0deg', config)) },
                            { translateX: delayFunction(delay, animation(0, config)) },
                            { translateY: delayFunction(delay, animation(0, config)) },
                        ],
                    },
                    initialValues: Object.assign({ opacity: 0, transform: [
                            { rotate: '90deg' },
                            { translateX: -(values.targetWidth / 2 - values.targetHeight / 2) },
                            { translateY: -(values.targetWidth / 2 - values.targetHeight / 2) },
                        ] }, initialValues),
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new RotateInDownRight();
    }
}
export class RotateInUpLeft extends ComplexAnimationBuilder {
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
                        opacity: delayFunction(delay, animation(1, config)),
                        transform: [
                            { rotate: delayFunction(delay, animation('0deg', config)) },
                            { translateX: delayFunction(delay, animation(0, config)) },
                            { translateY: delayFunction(delay, animation(0, config)) },
                        ],
                    },
                    initialValues: Object.assign({ opacity: 0, transform: [
                            { rotate: '90deg' },
                            { translateX: values.targetWidth / 2 - values.targetHeight / 2 },
                            { translateY: values.targetWidth / 2 - values.targetHeight / 2 },
                        ] }, initialValues),
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new RotateInUpLeft();
    }
}
export class RotateInUpRight extends ComplexAnimationBuilder {
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
                        opacity: delayFunction(delay, animation(1, config)),
                        transform: [
                            { rotate: delayFunction(delay, animation('0deg', config)) },
                            { translateX: delayFunction(delay, animation(0, config)) },
                            { translateY: delayFunction(delay, animation(0, config)) },
                        ],
                    },
                    initialValues: Object.assign({ opacity: 0, transform: [
                            { rotate: '-90deg' },
                            { translateX: -(values.targetWidth / 2 - values.targetHeight / 2) },
                            { translateY: values.targetWidth / 2 - values.targetHeight / 2 },
                        ] }, initialValues),
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new RotateInUpRight();
    }
}
export class RotateOutDownLeft extends ComplexAnimationBuilder {
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
                        opacity: delayFunction(delay, animation(0, config)),
                        transform: [
                            { rotate: delayFunction(delay, animation('90deg', config)) },
                            {
                                translateX: delayFunction(delay, animation(values.currentWidth / 2 - values.currentHeight / 2, config)),
                            },
                            {
                                translateY: delayFunction(delay, animation(values.currentWidth / 2 - values.currentHeight / 2, config)),
                            },
                        ],
                    },
                    initialValues: Object.assign({ opacity: 1, transform: [{ rotate: '0deg' }, { translateX: 0 }, { translateY: 0 }] }, initialValues),
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new RotateOutDownLeft();
    }
}
export class RotateOutDownRight extends ComplexAnimationBuilder {
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
                        opacity: delayFunction(delay, animation(0, config)),
                        transform: [
                            { rotate: delayFunction(delay, animation('-90deg', config)) },
                            {
                                translateX: delayFunction(delay, animation(-(values.currentWidth / 2 - values.currentHeight / 2), config)),
                            },
                            {
                                translateY: delayFunction(delay, animation(values.currentWidth / 2 - values.currentHeight / 2, config)),
                            },
                        ],
                    },
                    initialValues: Object.assign({ opacity: 1, transform: [{ rotate: '0deg' }, { translateX: 0 }, { translateY: 0 }] }, initialValues),
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new RotateOutDownRight();
    }
}
export class RotateOutUpLeft extends ComplexAnimationBuilder {
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
                        opacity: delayFunction(delay, animation(0, config)),
                        transform: [
                            { rotate: delayFunction(delay, animation('-90deg', config)) },
                            {
                                translateX: delayFunction(delay, animation(values.currentWidth / 2 - values.currentHeight / 2, config)),
                            },
                            {
                                translateY: delayFunction(delay, animation(-(values.currentWidth / 2 - values.currentHeight / 2), config)),
                            },
                        ],
                    },
                    initialValues: Object.assign({ opacity: 1, transform: [{ rotate: '0deg' }, { translateX: 0 }, { translateY: 0 }] }, initialValues),
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new RotateOutUpLeft();
    }
}
export class RotateOutUpRight extends ComplexAnimationBuilder {
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
                        opacity: delayFunction(delay, animation(0, config)),
                        transform: [
                            { rotate: delayFunction(delay, animation('90deg', config)) },
                            {
                                translateX: delayFunction(delay, animation(-(values.currentWidth / 2 - values.currentHeight / 2), config)),
                            },
                            {
                                translateY: delayFunction(delay, animation(-(values.currentWidth / 2 - values.currentHeight / 2), config)),
                            },
                        ],
                    },
                    initialValues: Object.assign({ opacity: 1, transform: [{ rotate: '0deg' }, { translateX: 0 }, { translateY: 0 }] }, initialValues),
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new RotateOutUpRight();
    }
}
