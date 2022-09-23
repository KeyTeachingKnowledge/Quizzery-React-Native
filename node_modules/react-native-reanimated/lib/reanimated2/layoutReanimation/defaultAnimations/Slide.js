import { Dimensions } from 'react-native';
import { ComplexAnimationBuilder } from '../animationBuilder';
const { width, height } = Dimensions.get('window');
export class SlideInRight extends ComplexAnimationBuilder {
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
                        originX: delayFunction(delay, animation(values.targetOriginX, config)),
                    },
                    initialValues: Object.assign({ originX: values.targetOriginX + width }, initialValues),
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new SlideInRight();
    }
}
export class SlideInLeft extends ComplexAnimationBuilder {
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
                        originX: delayFunction(delay, animation(values.targetOriginX, config)),
                    },
                    initialValues: Object.assign({ originX: values.targetOriginX - width }, initialValues),
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new SlideInLeft();
    }
}
export class SlideOutRight extends ComplexAnimationBuilder {
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
                        originX: delayFunction(delay, animation(Math.max(values.currentOriginX + width, width), config)),
                    },
                    initialValues: Object.assign({ originX: values.currentOriginX }, initialValues),
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new SlideOutRight();
    }
}
export class SlideOutLeft extends ComplexAnimationBuilder {
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
                        originX: delayFunction(delay, animation(Math.min(values.currentOriginX - width, -width), config)),
                    },
                    initialValues: Object.assign({ originX: values.currentOriginX }, initialValues),
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new SlideOutLeft();
    }
}
export class SlideInUp extends ComplexAnimationBuilder {
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
                        originY: delayFunction(delay, animation(values.targetOriginY, config)),
                    },
                    initialValues: Object.assign({ originY: -height }, initialValues),
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new SlideInUp();
    }
}
export class SlideInDown extends ComplexAnimationBuilder {
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
                        originY: delayFunction(delay, animation(values.targetOriginY, config)),
                    },
                    initialValues: Object.assign({ originY: values.targetOriginY + height }, initialValues),
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new SlideInDown();
    }
}
export class SlideOutUp extends ComplexAnimationBuilder {
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
                        originY: delayFunction(delay, animation(Math.min(values.currentOriginY - height, -height), config)),
                    },
                    initialValues: Object.assign({ originY: values.currentOriginY }, initialValues),
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new SlideOutUp();
    }
}
export class SlideOutDown extends ComplexAnimationBuilder {
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
                        originY: delayFunction(delay, animation(Math.max(values.currentOriginY + height, height), config)),
                    },
                    initialValues: Object.assign({ originY: values.currentOriginY }, initialValues),
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new SlideOutDown();
    }
}
