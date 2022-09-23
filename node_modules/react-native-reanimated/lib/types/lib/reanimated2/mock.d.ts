declare const NOOP: () => void;
declare const ID: (t: any) => any;
declare const IMMEDIATE_CB_INVOCATION: (cb: () => unknown) => unknown;
declare const ReanimatedV2: {
    useSharedValue: (v: any) => {
        value: any;
    };
    useDerivedValue: (a: any) => {
        value: any;
    };
    useAnimatedScrollHandler: () => () => void;
    useAnimatedGestureHandler: () => () => void;
    useAnimatedStyle: (cb: () => unknown) => unknown;
    useAnimatedRef: () => {
        current: null;
    };
    useAnimatedReaction: () => void;
    useAnimatedProps: (cb: () => unknown) => unknown;
    withTiming: (toValue: any, _: any, cb: any) => any;
    withSpring: (toValue: any, _: any, cb: any) => any;
    withDecay: (_: any, cb: any) => number;
    withDelay: (_: any, animationValue: any) => any;
    withSequence: (..._animations: any[]) => number;
    withRepeat: (animation: any) => any;
    cancelAnimation: () => void;
    measure: () => {
        x: number;
        y: number;
        width: number;
        height: number;
        pageX: number;
        pageY: number;
    };
    Easing: {
        linear: (t: any) => any;
        ease: (t: any) => any;
        quad: (t: any) => any;
        cubic: (t: any) => any;
        poly: (t: any) => any;
        sin: (t: any) => any;
        circle: (t: any) => any;
        exp: (t: any) => any;
        elastic: (t: any) => any;
        back: (t: any) => any;
        bounce: (t: any) => any;
        bezier: () => {
            factory: (t: any) => any;
        };
        bezierFn: (t: any) => any;
        in: (t: any) => any;
        out: (t: any) => any;
        inOut: (t: any) => any;
    };
    runOnJS: (fn: any) => any;
};
