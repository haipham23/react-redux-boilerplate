import Proptypes from 'prop-types';
import { bindActionCreators } from 'redux';

import { setLanguage } from 'redux-i18n';

const Props = {
  propTypes: {
    lang: Proptypes.string.isRequired,
    rSetLanguage: Proptypes.func.isRequired
  },
  contextTypes: {
    t: Proptypes.func
  },
  mapStateToProps: state => ({
    lang: state.i18nState.lang
  }),
  mapDispatchToProps: dispatch => ({
    rSetLanguage: bindActionCreators(setLanguage, dispatch)
  })
};

export default Props;
