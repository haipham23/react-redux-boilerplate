import { bindActionCreators } from 'redux';
import {
  string,
  bool,
  shape,
  func
} from 'prop-types';

import * as actions from '../../actions/authActions';

export default {
  propTypes: {
    auth: shape({
      isLoading: bool.isRequired,
      isAuth: bool.isRequired,
      token: string
    }).isRequired,
    login: func.isRequired
  },
  mapStateToProps: state => ({
    auth: state.auth
  }),
  mapDispatchToProps: dispatch => ({
    login: bindActionCreators(actions.login, dispatch)
  })
};
