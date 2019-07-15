import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from './auth';

import Login from './pages/Login';
import Survey from './pages/Survey';
import Result from './pages/Result';
import Logout from './pages/Logout';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <PrivateRoute path="/survey" component={Survey} />
      <PrivateRoute path="/result" component={Result} />
      <Route exact path="/logout" component={Logout} />
    </Switch>
  </Router>
);

export default Routes;
