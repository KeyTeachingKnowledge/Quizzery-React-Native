/// <reference types="react" />
declare const ReanimatedComponents: {
    FlatList: import("react").FC<import("./FlatList").ReanimatedFlatlistProps<any>>;
    View: import("react").ComponentType<import("../../createAnimatedComponent").AnimatedComponentProps<import("../../createAnimatedComponent").InitialComponentProps>>;
    Text: import("react").ComponentType<import("../../createAnimatedComponent").AnimatedComponentProps<import("../../createAnimatedComponent").InitialComponentProps>>;
    Image: import("react").ComponentType<import("../../createAnimatedComponent").AnimatedComponentProps<import("../../createAnimatedComponent").InitialComponentProps>>;
    ScrollView: import("react").ComponentType<import("../../createAnimatedComponent").AnimatedComponentProps<import("../../createAnimatedComponent").InitialComponentProps>>;
};
export default ReanimatedComponents;
