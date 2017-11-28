import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';

import Dashboard from '../Dashboard/Dashboard';

import Supermarket from '../../containers/Supermarket/Supermarket';
import Login from '../../containers/Login/Login';

class Router extends PureComponent {
  render() {
    const { isAuth } = this.props;

    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/super-market" component={Supermarket} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/dashboard" isAuth={isAuth} component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

Router.propTypes = {
  isAuth: Proptypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isAuth: state.auth.isAuth
  };
}

export default withRouter(connect(mapStateToProps)(Router));
