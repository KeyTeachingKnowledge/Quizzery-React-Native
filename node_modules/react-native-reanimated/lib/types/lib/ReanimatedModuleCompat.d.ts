declare const _default: {
    disconnectNodeFromView(): Promise<void>;
    attachEvent(_viewTag: number, _eventName: string, _nodeID: number): Promise<void>;
    detachEvent(_viewTag: number, _eventName: string, _nodeID: number): Promise<void>;
    createNode(_nodeID: number, _config: Record<string, unknown>): Promise<void>;
    dropNode(_nodeID: number): Promise<void>;
    configureProps(_nativeProps: string[], _uiProps: string[]): Promise<void>;
    disconnectNodes(): Promise<void>;
    addListener(): Promise<void>;
    removeListeners(): Promise<void>;
    removeAllListeners(): Promise<void>;
    animateNextTransition(): Promise<void>;
};
export default _default;
