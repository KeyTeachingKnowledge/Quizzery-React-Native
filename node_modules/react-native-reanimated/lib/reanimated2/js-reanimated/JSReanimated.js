import MapperRegistry from './MapperRegistry';
import Mapper from './Mapper';
import MutableValue from './MutableValue';
import { NativeReanimated } from '../NativeReanimated/NativeReanimated';
import { isJest } from '../PlatformChecker';
export default class JSReanimated extends NativeReanimated {
    constructor() {
        super(false);
        this._valueSetter = undefined;
        this._renderRequested = false;
        this._mapperRegistry = new MapperRegistry(this);
        this._frames = [];
        if (isJest()) {
            this.timeProvider = { now: () => global.ReanimatedDataMock.now() };
        }
        else {
            this.timeProvider = { now: () => window.performance.now() };
        }
    }
    pushFrame(frame) {
        this._frames.push(frame);
        this.maybeRequestRender();
    }
    getTimestamp() {
        return this.timeProvider.now();
    }
    maybeRequestRender() {
        if (!this._renderRequested) {
            this._renderRequested = true;
            requestAnimationFrame((_timestampMs) => {
                this._renderRequested = false;
                this._onRender(this.getTimestamp());
            });
        }
    }
    _onRender(timestampMs) {
        this._mapperRegistry.execute();
        const frames = [...this._frames];
        this._frames = [];
        for (let i = 0, len = frames.length; i < len; ++i) {
            frames[i](timestampMs);
        }
        if (this._mapperRegistry.needRunOnRender) {
            this._mapperRegistry.execute();
        }
    }
    installCoreFunctions(valueSetter) {
        this._valueSetter = valueSetter;
    }
    makeShareable(value) {
        return value;
    }
    makeMutable(value) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return new MutableValue(value, this._valueSetter);
    }
    makeRemote(object = {}) {
        return object;
    }
    startMapper(mapper, inputs = [], outputs = []) {
        const instance = new Mapper(this, mapper, inputs, outputs);
        const mapperId = this._mapperRegistry.startMapper(instance);
        this.maybeRequestRender();
        return mapperId;
    }
    stopMapper(mapperId) {
        this._mapperRegistry.stopMapper(mapperId);
    }
    registerEventHandler(_, __) {
        // noop
        return '';
    }
    unregisterEventHandler(_) {
        // noop
    }
    enableLayoutAnimations() {
        console.warn('[Reanimated] enableLayoutAnimations is not available for WEB yet');
    }
    registerSensor() {
        console.warn('[Reanimated] useAnimatedSensor is not available on web yet.');
        return -1;
    }
    unregisterSensor() {
        // noop
    }
    jestResetModule() {
        if (isJest()) {
            /**
             * If someone used timers to stop animation before the end,
             * then _renderRequested was set as true
             * and any new update from another test wasn't applied.
             */
            this._renderRequested = false;
        }
        else {
            throw Error('This method can be only use in Jest testing.');
        }
    }
}
