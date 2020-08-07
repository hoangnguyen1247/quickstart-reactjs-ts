import React from "react";

export const mockMediaQueryList: any = {
    media: '',
    matches: false,
};

type Props = {
    rawQuery,
    defaultState: boolean,
};

export function useConnectionOnlineChange({
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

        const onOnlineChange = () => {
            if (!mounted) {
                return;
            }

            setState(true);
        }; 
        
        const onOfflineChange = () => {
            if (!mounted) {
                return;
            }

            setState(false);
        };

        window.addEventListener("online", onOnlineChange);
        window.addEventListener("offline", onOfflineChange);

        setState(true);

        return () => {
            mounted = false;
            window.removeEventListener("online", onOnlineChange);
            window.removeEventListener("offline", onOfflineChange);
        };
    }, [query]);

    return state;
}
