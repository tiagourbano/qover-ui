import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from './auth';

import Login from './pages/Login';
import Survey from './pages/Survey';
import Result from './pages/Result';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRoute path="/survey" component={Survey} />
            <PrivateRoute path="/result" component={Result} />
        </Switch>
    </Router>
);

export default Routes;
