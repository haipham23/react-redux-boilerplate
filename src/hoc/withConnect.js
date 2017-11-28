import { connect } from 'react-redux';

const withConnect = (Component, props) => (connect(
  props.mapStateToProps,
  props.mapDispatchToProps
)(Component));

export default withConnect;
