import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

import { login } from '../../actions/authActions';

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
              onClick={this.props.rLogin}
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

const {
  string,
  bool,
  shape,
  func
} = Proptypes;

Login.propTypes = {
  auth: shape({
    isLoading: bool.isRequired,
    isAuth: bool.isRequired,
    token: string
  }).isRequired,
  rLogin: func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  rLogin: bindActionCreators(login, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
