import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';

import TextMaster from '../../containers/TextMaster/TextMaster';
import NotFound from '../NotFound/NotFound';

class Router extends PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={TextMaster} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Router;
