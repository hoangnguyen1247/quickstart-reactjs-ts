import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { History } from 'history';
import cookie from "react-cookies";

import canUseDOM from "./can-use-dom";
import { LOCAL_STORAGE } from "./app/utils/Constants";
import { routes } from './routes';
import AppContainer from './app/AppContainer';

type Props = {
    history?: History,
}

class App extends React.Component<Props> {

    render() {
        return (
            <AppContainer
                history={this.props.history}
            >
                <div className="routes-container">
                    <Switch>
                        {routes.map((route, index) => {
                            const { component, ...rest } = route;

                            if (canUseDOM && route.isPrivate && !cookie.load(LOCAL_STORAGE.ACCESS_TOKEN)) {
                                return (
                                    <Redirect to={{ pathname: "/login", /** state: { from: props.location } */ }} />
                                )
                            } else return (<Route key={index} component={component} {...rest} />)
                        })}
                    </Switch>
                </div>
                <ToastContainer
                    autoClose={5000}
                />
            </AppContainer>
        );
    }
}

export default App;
