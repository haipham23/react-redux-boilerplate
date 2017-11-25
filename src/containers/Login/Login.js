import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

import * as actions from '../../actions/authActions';

class Login extends Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
  }

  login() {
    this.props.reduxActions.login('username', 'password');
  }

  render() {
    const {
      isLoading,
      isAuth
    } = this.props.auth;

    if (isAuth) {
      return <Redirect to='/dashboard' push />;
    }

    return (
      <div className="container login">
        <div className="row">
          <div className="col-xs-12 col-md-6 offset-md-3">
            <div className="form-group">
              <label>
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-block"
              onClick={this.login}
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
  }),
  reduxActions: shape({
    login: func.isRequired
  }).isRequired
};

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    reduxActions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
