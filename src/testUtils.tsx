import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { HelmetProvider } from 'react-helmet-async';

import configureStore from 'src/store';

const history = createBrowserHistory();
const mockStore = configureStore();

export function renderConnectedComponent(ui, { initialState = {} as any, store = mockStore, ...renderOptions } = {} as any) {
    function Wrapper({ children }: any) {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <HelmetProvider>
                        {children}
                    </HelmetProvider>
                </Router>
            </Provider>
        )
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}
