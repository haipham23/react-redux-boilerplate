import Proptypes from 'prop-types';

const {
  shape,
  array,
  string,
  func
} = Proptypes;

const propTypes = {
  product: shape({
    selected: array,
    displayed: array,
    total: string
  }).isRequired,
  onReset: func.isRequired
};

export {
  propTypes
};
