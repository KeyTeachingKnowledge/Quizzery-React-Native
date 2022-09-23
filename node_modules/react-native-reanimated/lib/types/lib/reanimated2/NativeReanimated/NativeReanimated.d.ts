import { SharedValue, SensorValue3D, SensorValueRotation } from '../commonTypes';
import { Descriptor } from '../hook/commonTypes';
export declare class NativeReanimated {
    native: boolean;
    private InnerNativeModule;
    constructor(native?: boolean);
    installCoreFunctions(valueSetter: <T>(value: T) => void): void;
    makeShareable<T>(value: T): T;
    makeMutable<T>(value: T): SharedValue<T>;
    makeRemote<T>(object?: {}): T;
    registerSensor(sensorType: number, interval: number, sensorData: SensorValue3D | SensorValueRotation): any;
    unregisterSensor(sensorId: number): any;
    startMapper(mapper: () => void, inputs: any[] | undefined, outputs: any[] | undefined, updater: () => void, viewDescriptors: Descriptor[] | SharedValue<Descriptor[]>): number;
    stopMapper(mapperId: number): void;
    registerEventHandler<T>(eventHash: string, eventHandler: (event: T) => void): string;
    unregisterEventHandler(id: string): void;
    getViewProp<T>(viewTag: string, propName: string, callback?: (result: T) => void): Promise<T>;
    enableLayoutAnimations(flag: boolean): void;
    configureProps(uiProps: string[], nativeProps: string[]): void;
}
