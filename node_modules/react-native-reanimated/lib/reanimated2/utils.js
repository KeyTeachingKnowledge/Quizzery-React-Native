import { measure } from './NativeMethods';
export function getRelativeCoords(parentRef, x, y) {
    'worklet';
    const parentCoords = measure(parentRef);
    return {
        x: x - parentCoords.x,
        y: y - parentCoords.y,
    };
}
