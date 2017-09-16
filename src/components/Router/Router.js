import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';

import Supermarket from '../../containers/Supermarket/Supermarket';
import NotFound from '../NotFound/NotFound';

class Router extends PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Supermarket} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Router;
