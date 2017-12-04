import {
  shape,
  array,
  string,
  func
} from 'prop-types';

const Props = {
  propTypes: {
    product: shape({
      selected: array,
      displayed: array,
      total: string
    }).isRequired,
    onReset: func.isRequired
  }
};

export default Props;
