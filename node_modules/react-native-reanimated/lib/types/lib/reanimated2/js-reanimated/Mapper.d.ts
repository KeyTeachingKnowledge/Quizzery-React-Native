import { NestedObjectValues } from '../commonTypes';
import { JSReanimated } from './commonTypes';
import MutableValue from './MutableValue';
export default class Mapper<T> {
    static MAPPER_ID: number;
    id: number;
    inputs: MutableValue<T>[];
    outputs: MutableValue<T>[];
    mapper: () => void;
    dirty: boolean;
    constructor(module: JSReanimated, mapper: () => void, inputs?: NestedObjectValues<MutableValue<T>>[], outputs?: NestedObjectValues<MutableValue<T>>[]);
    execute(): void;
    extractMutablesFromArray<T>(array: NestedObjectValues<MutableValue<T>>): MutableValue<T>[];
}
