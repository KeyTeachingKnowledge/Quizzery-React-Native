import { useEffect, useRef } from 'react';
import { cancelAnimation } from '../animation';
import { makeMutable } from '../core';
export function useSharedValue(init) {
    const ref = useRef(makeMutable(init));
    if (ref.current === null) {
        ref.current = makeMutable(init);
    }
    useEffect(() => {
        return () => {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            cancelAnimation(ref.current);
        };
    }, []);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return ref.current;
}
