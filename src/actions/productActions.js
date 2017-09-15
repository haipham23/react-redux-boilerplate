import { SELECT_PRODUCT } from '../constants/actionTypes';

import selectProductAsync from '../services/selectProductAsync';
import calculateTotal from '../services/calculateTotal';

const selectProduct = (e, product, productList, discounts) => dispatch =>
  selectProductAsync(e, product, productList, discounts)
    .then(({ selectedProducts, displayedProducts }) => dispatch({
      type: SELECT_PRODUCT,
      product: {
        selected: selectedProducts,
        displayed: displayedProducts,
        total: calculateTotal(displayedProducts)
      }
    }));

export {
  selectProduct
};
