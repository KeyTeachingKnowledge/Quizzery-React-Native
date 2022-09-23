import { Platform } from 'react-native';
export function isJest() {
    return !!process.env.JEST_WORKER_ID;
}
export function isChromeDebugger() {
    return !global.nativeCallSyncHook || global.__REMOTEDEV__;
}
export function isWeb() {
    return Platform.OS === 'web';
}
export function shouldBeUseWeb() {
    return isJest() || isChromeDebugger() || isWeb();
}
export function nativeShouldBeMock() {
    return isJest() || isChromeDebugger();
}
