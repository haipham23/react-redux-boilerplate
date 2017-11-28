import Proptypes from 'prop-types';
import { bindActionCreators } from 'redux';

import { login } from '../../actions/authActions';

const {
  string,
  bool,
  shape,
  func
} = Proptypes;

const propTypes = {
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

export {
  propTypes,
  mapStateToProps,
  mapDispatchToProps
};
