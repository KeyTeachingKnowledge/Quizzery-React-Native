import { withDelay } from '../../animation';
export class BaseAnimationBuilder {
    constructor() {
        this.randomizeDelay = false;
        this.build = () => {
            throw Error('Unimplemented method in child class.');
        };
    }
    static duration(durationMs) {
        const instance = this.createInstance();
        return instance.duration(durationMs);
    }
    duration(durationMs) {
        this.durationV = durationMs;
        return this;
    }
    static delay(delayMs) {
        const instance = this.createInstance();
        return instance.delay(delayMs);
    }
    delay(delayMs) {
        this.delayV = delayMs;
        return this;
    }
    static withCallback(callback) {
        const instance = this.createInstance();
        return instance.withCallback(callback);
    }
    withCallback(callback) {
        this.callbackV = callback;
        return this;
    }
    // 300ms is the default animation duration. If any animation has different default has to override this method.
    static getDuration() {
        return 300;
    }
    getDuration() {
        var _a;
        return (_a = this.durationV) !== null && _a !== void 0 ? _a : 300;
    }
    static randomDelay() {
        const instance = this.createInstance();
        return instance.randomDelay();
    }
    randomDelay() {
        this.randomizeDelay = true;
        return this;
    }
    // when randomizeDelay is set to true, randomize delay between 0 and provided value (or 1000ms if delay is not provided)
    getDelay() {
        var _a, _b;
        return this.randomizeDelay
            ? Math.random() * ((_a = this.delayV) !== null && _a !== void 0 ? _a : 1000)
            : (_b = this.delayV) !== null && _b !== void 0 ? _b : 0;
    }
    getDelayFunction() {
        const isDelayProvided = this.randomizeDelay || this.delayV;
        return isDelayProvided
            ? withDelay
            : (_, animation) => {
                'worklet';
                return animation;
            };
    }
    static build() {
        const instance = this.createInstance();
        return instance.build();
    }
}
