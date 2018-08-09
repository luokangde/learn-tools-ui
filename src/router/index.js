/**
 * Created by yobbo.wang on 2018/8/8.
 *  router config
 */
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import NotFound from '../app/container/NotFound';
import Login from '../app/container/Login';
import App from '../app/container/App';

export default () => (
    <HashRouter>
        <Switch>
            <Route path={"/"} component={App}/>
            <Route path="/404" component={NotFound} />
            <Route path="/login" component={Login} />
            <Route component={NotFound} />
        </Switch>
    </HashRouter>
)