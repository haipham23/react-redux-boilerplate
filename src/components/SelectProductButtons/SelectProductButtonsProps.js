import {
  arrayOf,
  shape,
  string,
  func
} from 'prop-types';

const Props = {
  propTypes: {
    productList: arrayOf(shape({
      id: string.isRequired,
      name: string.isRequired,
      price: string.isRequired
    })).isRequired,
    onSelect: func.isRequired
  }
};

export default Props;
