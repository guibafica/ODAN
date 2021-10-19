import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ScrollToTop from './helpers';

import Dashboard from './pages/Dashboard';
import PetDetails from './pages/PetDetails';

const Routes = () => (
  <Router>
    <ScrollToTop />

    <Switch>
      <Route exact={true} path="/" component={Dashboard} />
      <Route
        exact={true}
        path="/pet-details/:petID"
        component={PetDetails}
      />
    </Switch>
  </Router>
);

export default Routes;
