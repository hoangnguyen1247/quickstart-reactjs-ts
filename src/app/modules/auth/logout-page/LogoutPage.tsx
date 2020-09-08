import { useEffect } from "react";
import cookie from "react-cookies";
import { History } from "history";

import { LOCAL_STORAGE } from "src/app/utils/Constants";

type Props = {
    history: History,
};

const defaultProps = {

};

function LogutPage(props: Props){

    const {
        history,
    } = props;

    //
    // didMount and willUnmount
    useEffect(() => {
        cookie.remove(LOCAL_STORAGE.ACCESS_TOKEN, { path: "/" });
        cookie.remove(LOCAL_STORAGE.ACCESS_TOKEN_EXPIRES_IN, { path: "/" });
        cookie.remove(LOCAL_STORAGE.REFRESH_TOKEN, { path: "/" });

        if (history) {
            history.push("/login");
        }
    }, []);

    return null;
}

LogutPage.defaultProps = defaultProps;

export default LogutPage;
