import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';

import Supermarket from '../../containers/Supermarket/Supermarket';
import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';

class Router extends PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/super-market" component={Supermarket} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default withRouter(Router);
