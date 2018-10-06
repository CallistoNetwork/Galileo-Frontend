import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Notfound from '../containers/NotFound';
import { langs } from '../constants/';

const Routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path={`/:lang${langs}/`} component={Home} />
      <Route component={Notfound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
