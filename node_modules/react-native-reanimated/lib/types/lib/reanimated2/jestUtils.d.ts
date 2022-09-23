declare global {
    namespace jest {
        interface Matchers<R> {
            toHaveAnimatedStyle(style: Record<string, unknown>[] | Record<string, unknown>): R;
        }
    }
}
export declare const withReanimatedTimer: (animatonTest: any) => void;
export declare const advanceAnimationByTime: (time?: number) => void;
export declare const advanceAnimationByFrame: (count: any) => void;
export declare const setUpTests: (userConfig?: {}) => void;
export declare const getAnimatedStyle: (received: any) => {};
