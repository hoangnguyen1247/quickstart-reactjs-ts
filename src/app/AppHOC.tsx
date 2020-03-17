import React from "react";
import cookie from "react-cookies";
import canUseDOM from "can-use-dom";
import { Route, Redirect } from 'react-router-dom';

import { LOCAL_STORAGE } from "./utils/Constants";

export function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={props => {
                if (canUseDOM) {
                    return cookie.load(LOCAL_STORAGE.ACCESS_TOKEN, { path: "/" })
                        ? <Component {...props} />
                        : (
                            <Redirect
                                to={{
                                    pathname: "/login",
                                    state: { from: props.location }
                                }}
                            />
                        )
                } else {
                    return <Component {...props} />;
                }
            }}
        />
    );
}
