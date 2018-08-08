/**
 * 程序入口
 */
import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader'

import './resource/styles/common.scss';
import './resource/styles/prism.css';
import 'element-theme-default';

import App from './app/container/App';

class Index extends React.Component {
    render() {
        return (
            <AppContainer>
                <App />
            </AppContainer>
        )
    }
}

ReactDom.render(
    <App />,
    document.getElementById('root')
)

if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./app/container/App', () => {
        const App = require('./app/container/App').default;
        render(<AppContainer><App /></AppContainer>, document.getElementById('root'));
    });
}