import { defineAnimation } from './util';
import { Platform } from 'react-native';
export function withDecay(userConfig, callback) {
    'worklet';
    return defineAnimation(0, () => {
        'worklet';
        var _a;
        const config = {
            deceleration: 0.998,
            velocityFactor: Platform.OS !== 'web' ? 1 : 1000,
            velocity: 0,
        };
        if (userConfig) {
            Object.keys(userConfig).forEach((key) => (config[key] = userConfig[key]));
        }
        const VELOCITY_EPS = Platform.OS !== 'web' ? 1 : 1 / 20;
        const SLOPE_FACTOR = 0.1;
        function decay(animation, now) {
            const { lastTimestamp, startTimestamp, initialVelocity, current, velocity, } = animation;
            const deltaTime = Math.min(now - lastTimestamp, 64);
            const v = velocity *
                Math.exp(-(1 - config.deceleration) * (now - startTimestamp) * SLOPE_FACTOR);
            animation.current =
                current + (v * config.velocityFactor * deltaTime) / 1000; // /1000 because time is in ms not in s
            animation.velocity = v;
            animation.lastTimestamp = now;
            if (config.clamp) {
                if (initialVelocity < 0 && animation.current <= config.clamp[0]) {
                    animation.current = config.clamp[0];
                    return true;
                }
                else if (initialVelocity > 0 &&
                    animation.current >= config.clamp[1]) {
                    animation.current = config.clamp[1];
                    return true;
                }
            }
            return Math.abs(v) < VELOCITY_EPS;
        }
        function validateConfig() {
            if (config.clamp) {
                if (!Array.isArray(config.clamp)) {
                    throw Error(`config.clamp must be an array but is ${typeof config.clamp}`);
                }
                if (config.clamp.length !== 2) {
                    throw Error(`clamp array must contain 2 items but is given ${config.clamp.length}`);
                }
            }
            if (config.velocityFactor <= 0) {
                throw Error(`config.velocityFactor must be greather then 0 but is ${config.velocityFactor}`);
            }
        }
        function onStart(animation, value, now) {
            animation.current = value;
            animation.lastTimestamp = now;
            animation.startTimestamp = now;
            animation.initialVelocity = config.velocity;
            validateConfig();
        }
        return {
            onFrame: decay,
            onStart,
            callback,
            velocity: (_a = config.velocity) !== null && _a !== void 0 ? _a : 0,
            initialVelocity: 0,
            current: 0,
            lastTimestamp: 0,
            startTimestamp: 0,
        };
    });
}
