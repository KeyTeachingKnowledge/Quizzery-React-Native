import { Image, ScrollView, Text, View } from 'react-native';
import createAnimatedComponent from '../../createAnimatedComponent';
const WrappedComponents = {
    View: createAnimatedComponent(View),
    Text: createAnimatedComponent(Text),
    Image: createAnimatedComponent(Image),
    ScrollView: createAnimatedComponent(ScrollView),
};
export default WrappedComponents;
