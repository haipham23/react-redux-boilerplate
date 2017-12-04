import Proptypes from 'prop-types';
import { bindActionCreators } from 'redux';

import { setLanguage } from 'redux-i18n';

export default {
  propTypes: {
    lang: Proptypes.string.isRequired,
    setLanguage: Proptypes.func.isRequired
  },
  contextTypes: {
    t: Proptypes.func
  },
  mapStateToProps: state => ({
    lang: state.i18nState.lang
  }),
  mapDispatchToProps: dispatch => ({
    setLanguage: bindActionCreators(setLanguage, dispatch)
  })
};
