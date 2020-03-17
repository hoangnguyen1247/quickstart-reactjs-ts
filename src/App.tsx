import React from 'react';
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { History } from 'history';

import './App.scss';
import { routes } from './routes';
import { CustomRoute } from "./app/AppHOC";
import AppContainer from './app/AppContainer';

type Props = {
    history: History,
}

class App extends React.Component<Props> {

    render() {
        return (
            <AppContainer
                history={this.props.history}
            >
                <div className="routes-container">
                    <Switch>
                        {routes.map((route, index) => (
                            route.isPrivate ?
                                <CustomRoute {...route} key={index} /> :
                                <Route {...route} key={index} />
                            ))
                        }
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
