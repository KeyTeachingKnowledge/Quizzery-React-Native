import { SharedValue } from './commonTypes';
import { Descriptor } from './hook/commonTypes';
export interface ViewRefSet<T> {
    items: Set<T>;
    add: (item: T) => void;
    remove: (item: T) => void;
}
export interface ViewDescriptorsSet {
    batchToRemove: Set<number>;
    tags: Set<number>;
    waitForInsertSync: boolean;
    waitForRemoveSync: boolean;
    sharableViewDescriptors: SharedValue<Descriptor[]>;
    items: Descriptor[];
    add: (item: Descriptor) => void;
    remove: (viewTag: number) => void;
    rebuildsharableViewDescriptors: (sharableViewDescriptor: SharedValue<Descriptor[]>) => void;
}
export declare function makeViewDescriptorsSet(): ViewDescriptorsSet;
export declare function makeViewsRefSet<T>(): ViewRefSet<T>;
