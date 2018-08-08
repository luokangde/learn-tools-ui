'use strict';
import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux';
import 'element-theme-default';

import './resource/styles/common.scss';
import './resource/styles/prism.css';
import Route  from './router';
import store from './store/store'

console.log(store.getState())

const render = Component => {
    ReactDom.render(
        <Provider store={store}>
            <AppContainer>
                <Component />
            </AppContainer>
        </Provider>,
        document.getElementById('root')
    )
}

render(Route);

if (process.env.NODE_ENV === 'development' && module.hot) {
    //
    const orgError = console.error; // eslint-disable-line no-console
    console.error = (...args) => { // eslint-disable-line no-console
        if (args && args.length === 1 && typeof args[0] === 'string' && args[0].indexOf('You cannot change <Router routes>;') > -1) {
            // React route changed
        } else {
            // Log the error as normally
            orgError.apply(console, args);
        }
    };
    module.hot.accept('./router', () => {
        render(Route);
    });
}