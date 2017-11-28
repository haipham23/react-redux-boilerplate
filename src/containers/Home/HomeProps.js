import Proptypes from 'prop-types';
import { bindActionCreators } from 'redux';

import { setLanguage } from 'redux-i18n';

const propTypes = {
  lang: Proptypes.string.isRequired,
  rSetLanguage: Proptypes.func.isRequired
};

const contextTypes = {
  t: Proptypes.func
};

const mapStateToProps = state => ({
  lang: state.i18nState.lang
});

const mapDispatchToProps = dispatch => ({
  rSetLanguage: bindActionCreators(setLanguage, dispatch)
});

export {
  propTypes,
  contextTypes,
  mapStateToProps,
  mapDispatchToProps
};
