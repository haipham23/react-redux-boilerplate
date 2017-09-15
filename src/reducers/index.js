import { combineReducers } from 'redux';

import productReducer from './productReducer';
import discountsReducer from './discountsReducer';
import productListReducer from './productListReducer';

const rootReducer = combineReducers({
  product: productReducer,
  discounts: discountsReducer,
  productList: productListReducer
});

export default rootReducer;
