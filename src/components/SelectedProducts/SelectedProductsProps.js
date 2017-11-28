import Proptypes from 'prop-types';

const {
  shape,
  array,
  string
} = Proptypes;

const propTypes = {
  product: shape({
    selected: array,
    displayed: array,
    total: string
  }).isRequired
};

export {
  propTypes
};
