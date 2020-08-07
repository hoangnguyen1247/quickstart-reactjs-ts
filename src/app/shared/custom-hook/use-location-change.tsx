import React from "react";
import { History } from "history";

export const mockMediaQueryList: any = {
    media: '',
    matches: false,
};

type Props = {
    history: History,
    rawQuery,
    defaultState: string,
};

export function useLocationChange({
    history,
    rawQuery,
    defaultState,
}: Props) {
    const [state, setState] = React.useState(defaultState);

    const query = rawQuery;

    React.useEffect(() => {
        let mounted = true;
        const mediaQueryList: MediaQueryList =
        typeof window === 'undefined'
            ? mockMediaQueryList
            : window.matchMedia(query);

        const unlistenHistory = history.listen((location, action) => {
            // console.log(action, location.pathname, location.state);
            console.log(action, location.pathname);
        });

        setState("");

        return () => {
            mounted = false;
            if (unlistenHistory) {
                unlistenHistory();
            }
        };
    }, [query]);

    return state;
}
