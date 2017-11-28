import Proptypes from 'prop-types';
import { bindActionCreators } from 'redux';

import { selectProduct } from '../../actions/productActions';

const {
  arrayOf,
  shape,
  array,
  string,
  number,
  bool,
  func
} = Proptypes;

const propTypes = {
  productList: arrayOf(shape({
    id: string.isRequired,
    name: string.isRequired,
    price: string.isRequired
  })).isRequired,
  discounts: arrayOf(shape({
    name: string.isRequired,
    priority: number.isRequired,
    isActive: bool.isRequired,
    calc: func.isRequired
  })).isRequired,
  product: shape({
    selected: array,
    displayed: array,
    total: string
  }).isRequired,
  rSelectProduct: func.isRequired
};

const mapStateToProps = state => ({
  productList: state.productList,
  discounts: state.discounts,
  product: state.product
});

const mapDispatchToProps = dispatch => ({
  rSelectProduct: bindActionCreators(selectProduct, dispatch)
});

export {
  propTypes,
  mapStateToProps,
  mapDispatchToProps
};
