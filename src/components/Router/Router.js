import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';

import Supermarket from '../../containers/Supermarket/Supermarket';
import About from '../About/About';
import NotFound from '../NotFound/NotFound';

class Router extends PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Supermarket} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default withRouter(Router);
