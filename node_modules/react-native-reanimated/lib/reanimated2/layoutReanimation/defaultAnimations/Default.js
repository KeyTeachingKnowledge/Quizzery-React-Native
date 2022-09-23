export const DefaultLayout = (values) => {
    'worklet';
    return {
        initialValues: {
            originX: values.targetOriginX,
            originY: values.targetOriginY,
            width: values.targetWidth,
            height: values.targetHeight,
        },
        animations: {},
    };
};
export const DefaultEntering = (values) => {
    'worklet';
    return {
        initialValues: {
            originX: values.targetOriginX,
            originY: values.targetOriginY,
            width: values.targetWidth,
            height: values.targetHeight,
        },
        animations: {},
    };
};
export const DefaultExiting = (values) => {
    'worklet';
    return {
        initialValues: {
            originX: values.currentOriginX,
            originY: values.currentOriginY,
            width: values.currentWidth,
            height: values.currentHeight,
        },
        animations: {},
    };
};
