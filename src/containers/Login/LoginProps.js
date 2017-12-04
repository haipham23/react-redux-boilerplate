import { bindActionCreators } from 'redux';
import {
  string,
  bool,
  shape,
  func
} from 'prop-types';

import { login } from '../../actions/authActions';

const Props = {
  propTypes: {
    auth: shape({
      isLoading: bool.isRequired,
      isAuth: bool.isRequired,
      token: string
    }).isRequired,
    rLogin: func.isRequired
  },
  mapStateToProps: state => ({
    auth: state.auth
  }),
  mapDispatchToProps: dispatch => ({
    rLogin: bindActionCreators(login, dispatch)
  })
};

export default Props;
