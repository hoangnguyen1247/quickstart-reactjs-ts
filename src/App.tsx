import React from 'react';
import cookie from "react-cookies";
import { Route, Switch, Redirect } from "react-router-dom";
import { History } from 'history';

import canUseDOM from "src/can-use-dom";
import { routes } from 'src/routes';
import { LOCAL_STORAGE } from "src/app/utils/Constants";
import { hasSomeRoles } from 'src/app/utils/PermissionUtils';

import { AppManager } from 'src/app/AppManager';

type Props = {
    history?: History,
}

const _renderPrivateRouter = (profile, route, index) => {
    const { component: Component, allowRoles, ...rest } = route;

    return (
        <Route
            {...rest}
            key={index}
            render={props => {
                if (!cookie.load(LOCAL_STORAGE.ACCESS_TOKEN)) {
                    return (<Redirect to={{ pathname: "/login", state: { from: props.location } }} />)
                } else if (profile && hasSomeRoles(profile, allowRoles)) {
                    return <Component {...props} />;
                } else {
                    return (<Redirect to={{ pathname: "/not-found", state: { from: props.location } }} />)
                }
            }}
        />
    )
}

class App extends React.Component<Props> {

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        const {
            history,
        } = this.props;

        return (
            <AppManager
                history={history}
            >
                {({ profile }) => (
                    <Switch>
                        {routes.map((route, index) => {
                            const { component: Component, allowRoles, ...rest } = route;

                            if (canUseDOM && Array.isArray(allowRoles) && allowRoles.length > 0) {
                                return _renderPrivateRouter(profile, route, index);
                            } else {
                                return (<Route key={index} component={Component} {...rest} />);
                            }
                        })}
                    </Switch>
                )}
            </AppManager>
        );
    }
}

export default App;
