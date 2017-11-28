import Proptypes from 'prop-types';

const {
  arrayOf,
  shape,
  string
} = Proptypes;

const propTypes = {
  productList: arrayOf(shape({
    id: string.isRequired,
    name: string.isRequired,
    price: string.isRequired
  })).isRequired,
  onSelect: Proptypes.func.isRequired
};

export {
  propTypes
};
