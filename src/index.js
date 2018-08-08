'use strict';
import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader'

import './resource/styles/common.scss';
import './resource/styles/prism.css';
import 'element-theme-default';

import RouterCommon from './router.common';

const render = Component => {
    ReactDom.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('root')
    )
}

render(RouterCommon);

if (process.env.NODE_ENV === 'development' && module.hot) {
    //提示路由错误
    const orgError = console.error; // eslint-disable-line no-console
    console.error = (...args) => { // eslint-disable-line no-console
        if (args && args.length === 1 && typeof args[0] === 'string' && args[0].indexOf('You cannot change <Router routes>;') > -1) {
            // React route changed
        } else {
            // Log the error as normally
            orgError.apply(console, args);
        }
    };
    module.hot.accept('./router.common', () => {
        render(RouterCommon);
    });
}