import { SensorValue3D, SensorValueRotation } from '../commonTypes';
export declare enum SensorType {
    ACCELEROMETER = 1,
    GYROSCOPE = 2,
    GRAVITY = 3,
    MAGNETIC_FIELD = 4,
    ROTATION = 5
}
export declare type SensorConfig = {
    interval: number;
};
export declare type AnimatedSensor = {
    sensor: SensorValue3D | SensorValueRotation | null;
    unregister: () => void;
    isAvailable: boolean;
    config: SensorConfig;
};
export declare function useAnimatedSensor(sensorType: SensorType, userConfig?: SensorConfig): AnimatedSensor;
