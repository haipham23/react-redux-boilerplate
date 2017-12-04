import { bindActionCreators } from 'redux';
import {
  arrayOf,
  shape,
  array,
  string,
  number,
  bool,
  func
} from 'prop-types';

import {
  selectProduct,
  resetProduct
} from '../../actions/productActions';

const Props = {
  propTypes: {
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
  },

  handlers: {
    onSelect: props => (event) => {
      event.preventDefault();

      const {
        product,
        productList,
        discounts,
        rSelectProduct
      } = props;

      // apply discount
      rSelectProduct(
        event,
        product,
        productList,
        discounts,
      );
    }
  },

  mapStateToProps: state => ({
    productList: state.productList,
    discounts: state.discounts,
    product: state.product
  }),

  mapDispatchToProps: dispatch => ({
    rSelectProduct: bindActionCreators(selectProduct, dispatch),
    rResetProduct: bindActionCreators(resetProduct, dispatch)
  })
};

export default Props;
