import { useEffect, useRef } from 'react';
import { makeMutable } from '../core';
import NativeReanimated from '../NativeReanimated';
export var SensorType;
(function (SensorType) {
    SensorType[SensorType["ACCELEROMETER"] = 1] = "ACCELEROMETER";
    SensorType[SensorType["GYROSCOPE"] = 2] = "GYROSCOPE";
    SensorType[SensorType["GRAVITY"] = 3] = "GRAVITY";
    SensorType[SensorType["MAGNETIC_FIELD"] = 4] = "MAGNETIC_FIELD";
    SensorType[SensorType["ROTATION"] = 5] = "ROTATION";
})(SensorType || (SensorType = {}));
export function useAnimatedSensor(sensorType, userConfig) {
    const ref = useRef({
        sensor: null,
        unregister: () => {
            // NOOP
        },
        isAvailable: false,
        config: {
            interval: 0,
        },
    });
    if (ref.current.sensor === null) {
        ref.current.config = Object.assign({ interval: 10 }, userConfig);
        let sensorData;
        if (sensorType === SensorType.ROTATION) {
            sensorData = {
                qw: 0,
                qx: 0,
                qy: 0,
                qz: 0,
                yaw: 0,
                pitch: 0,
                roll: 0,
            };
        }
        else {
            sensorData = {
                x: 0,
                y: 0,
                z: 0,
            };
        }
        ref.current.sensor = makeMutable(sensorData);
    }
    useEffect(() => {
        ref.current.config = Object.assign({ interval: 10 }, userConfig);
        const id = NativeReanimated.registerSensor(sensorType, ref.current.config.interval, ref.current.sensor);
        if (id !== -1) {
            // if sensor is available
            ref.current.unregister = () => NativeReanimated.unregisterSensor(id);
            ref.current.isAvailable = true;
        }
        else {
            // if sensor is unavailable
            ref.current.unregister = () => {
                // NOOP
            };
            ref.current.isAvailable = false;
        }
        return () => {
            ref.current.unregister();
        };
    }, [sensorType, userConfig]);
    return ref.current;
}
