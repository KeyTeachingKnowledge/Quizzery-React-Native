import { Dimensions } from 'react-native';
import { ComplexAnimationBuilder } from '../animationBuilder';
const { width } = Dimensions.get('window');
export class RollInLeft extends ComplexAnimationBuilder {
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
                            { translateX: delayFunction(delay, animation(0), config) },
                            { rotate: delayFunction(delay, animation('0deg', config)) },
                        ],
                    },
                    initialValues: Object.assign({ transform: [{ translateX: -width }, { rotate: '-180deg' }] }, initialValues),
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new RollInLeft();
    }
}
export class RollInRight extends ComplexAnimationBuilder {
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
                            { rotate: delayFunction(delay, animation('0deg', config)) },
                        ],
                    },
                    initialValues: Object.assign({ transform: [{ translateX: width }, { rotate: '180deg' }] }, initialValues),
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new RollInRight();
    }
}
export class RollOutLeft extends ComplexAnimationBuilder {
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
                            { rotate: delayFunction(delay, animation('-180deg', config)) },
                        ],
                    },
                    initialValues: Object.assign({ transform: [{ translateX: 0 }, { rotate: '0deg' }] }, initialValues),
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new RollOutLeft();
    }
}
export class RollOutRight extends ComplexAnimationBuilder {
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
                            { rotate: delayFunction(delay, animation('180deg', config)) },
                        ],
                    },
                    initialValues: Object.assign({ transform: [{ translateX: 0 }, { rotate: '0deg' }] }, initialValues),
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new RollOutRight();
    }
}
