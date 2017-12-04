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

import * as actions from '../../actions/productActions';

export default {
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
    selectProduct: func.isRequired,
    resetProduct: func.isRequired
  },

  handlers: {
    onSelect: props => (event) => {
      event.preventDefault();

      const {
        product,
        productList,
        discounts,
        selectProduct
      } = props;

      // apply discount
      selectProduct(
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
    selectProduct: bindActionCreators(actions.selectProduct, dispatch),
    resetProduct: bindActionCreators(actions.resetProduct, dispatch)
  })
};
