import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from "history";

import configureStore from './store';
import * as serviceWorker from './serviceWorker';

import './index.scss';
import App from "./App";

// Let the reducers handle initial state
const history = createBrowserHistory();
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App history={history}/>
        </Router>
    </Provider>,
    document.getElementById('root'),
);

serviceWorker.unregister();
