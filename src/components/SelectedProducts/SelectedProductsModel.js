import {
  shape,
  array,
  string,
  func
} from 'prop-types';

export default {
  propTypes: {
    product: shape({
      selected: array,
      displayed: array,
      total: string
    }).isRequired,
    onReset: func.isRequired
  }
};
