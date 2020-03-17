import React from 'react';
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import './App.scss';
import { routes } from './routes';
import { PrivateRoute } from "app/AppHOC";
import AppContainer from 'app/AppContainer';

class App extends React.Component {

    render() {
        return (
            <AppContainer
                history={this.props.history}
            >
                <div className="routes-container">
                    <Switch>
                        {routes.map((route, index) => (
                            route.isPrivate ?
                                <PrivateRoute {...route} key={index} /> :
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
