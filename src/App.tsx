import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { History } from 'history';
import cookie from "react-cookies";

import canUseDOM from "./can-use-dom";
import { routes } from './routes';
import { LOCAL_STORAGE } from "./app/utils/Constants";
import { hasSomeRoles } from './app/utils/AppUtils';

import AppContainer from './app/AppContainer';

type Props = {
    history?: History,
}

function App({ 
    history,
}: Props) {

    const _renderPrivateRouter = (profile, route, index) => {
        const { component: Component, ...rest } = route;

        return (
            <Route
                {...rest}
                key={index}
                render={props => {
                    if (!cookie.load(LOCAL_STORAGE.ACCESS_TOKEN)) {
                        return (<Redirect to={{ pathname: "/login", state: { from: props.location } }} />)
                    } else if (profile && hasSomeRoles(profile, route.allowRoles)) {
                        return <Component {...props} />;
                    } else {
                        return (<Redirect to={{ pathname: "/not-found", state: { from: props.location } }} />)
                    }
                }}
            />
        )
    }

    return (
        <AppContainer
            history={history}
        >
            {({ profile }) => (
                <div className="routes-container">
                    <Switch>
                        {routes.map((route, index) => {
                            const { component: Component, ...rest } = route;

                            if (canUseDOM && Array.isArray(route.allowRoles) && route.allowRoles.length > 0) {
                                return _renderPrivateRouter(profile, route, index);
                            } else {
                                return (<Route key={index} component={Component} {...rest} />);
                            }
                        })}
                    </Switch>
                </div>
            )}
        </AppContainer>
    );
}

export default App;
