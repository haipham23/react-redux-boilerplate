import React, { PureComponent } from 'react';
import Proptypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

const privateRoute = ({ component: Component, isAuth, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      isAuth
        ? (<Component {...props} />)
        : (<Redirect to="/login" />)
    )}
  />
);

class PrivateRoute extends PureComponent {
  render() {
    return privateRoute(this.props);
  }
}

privateRoute.propTypes = {
  component: Proptypes.element.isRequired,
  isAuth: Proptypes.bool.isRequired
};

export default PrivateRoute;
