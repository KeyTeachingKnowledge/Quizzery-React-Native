export default class MutableValue<T> {
    static MUTABLE_ID: number;
    _id: number;
    _value: T;
    _setter: (value: T) => void;
    _animation: null;
    _listeners: (() => void)[];
    constructor(value: T, setter: (value: T) => void);
    get value(): T;
    set value(nextValue: T);
    _setValue(newValue: T): void;
    addListener(listener: () => void): void;
    _triggerListener(): void;
}
