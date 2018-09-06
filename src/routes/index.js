import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Products from '../containers/Products';
import Administration from '../containers/Administration';

const routes = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/products" component={Products} />
    <Route path="/administration" component={Administration} />
  </Switch>
);

export default routes;
