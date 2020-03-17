import React from "react";
import cookie from "react-cookies";
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { LOCAL_STORAGE } from "./utils/Constants";
import { CustomRouteProps } from "../routes";

import canUseDOM from "./../can-use-dom";

export type ICustomRoute = {
    isPrivate?: boolean,
} & RouteProps;

export function CustomRoute({ ...rest }: CustomRouteProps): ICustomRoute {

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
