import { JSReanimated } from './commonTypes';
import Mapper from './Mapper';
export default class MapperRegistry<T> {
    sortedMappers: Mapper<T>[];
    mappers: Map<number, Mapper<T>>;
    _module: JSReanimated;
    updatedSinceLastExecute: boolean;
    constructor(module: JSReanimated);
    startMapper(mapper: Mapper<T>): number;
    stopMapper(id: number): void;
    execute(): void;
    updateOrder(): void;
    get needRunOnRender(): boolean;
}
