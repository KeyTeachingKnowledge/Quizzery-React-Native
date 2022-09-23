import ReanimatedFlatlist from './FlatList';
import WrappedComponents from './WrappedComponents';
const ReanimatedComponents = Object.assign(Object.assign({}, WrappedComponents), { FlatList: ReanimatedFlatlist });
export default ReanimatedComponents;
