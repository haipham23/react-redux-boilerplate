import {
  arrayOf,
  shape,
  string,
  func
} from 'prop-types';

export default {
  propTypes: {
    productList: arrayOf(shape({
      id: string.isRequired,
      name: string.isRequired,
      price: string.isRequired
    })).isRequired,
    onSelect: func.isRequired
  }
};
