import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import Model from './LoginModel';

class Login extends Component {
  render() {
    const {
      isLoading,
      isAuth
    } = this.props.auth;

    if (isAuth) {
      return <Redirect to="/dashboard" push />;
    }

    return (
      <div className="container login">
        <div className="row">
          <div className="col-xs-12 col-md-6 offset-md-3">
            <div className="form-group">
              <label htmlFor="email">
                Email address
              </label>
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">
                Password
              </label>
              <input
                name="password"
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-block"
              onClick={this.props.login}
              disabled={isLoading}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = Model.propTypes;

export default compose(
  connect(
    Model.mapStateToProps,
    Model.mapDispatchToProps
  )
)(Login);
