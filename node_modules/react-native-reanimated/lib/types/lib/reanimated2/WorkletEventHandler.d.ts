import { NativeEvent } from './commonTypes';
export default class WorkletEventHandler<T extends NativeEvent<T>> {
    worklet: (event: T) => void;
    eventNames: string[];
    reattachNeeded: boolean;
    listeners: Record<string, (event: T) => void>;
    viewTag: number | undefined;
    registrations: string[];
    constructor(worklet: (event: T) => void, eventNames?: string[]);
    updateWorklet(newWorklet: (event: T) => void): void;
    registerForEvents(viewTag: number, fallbackEventName?: string): void;
    unregisterFromEvents(): void;
}
