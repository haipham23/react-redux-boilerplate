import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import productReducer from './productReducer';
import discountsReducer from './discountsReducer';
import productListReducer from './productListReducer';

const rootReducer = combineReducers({
  product: productReducer,
  discounts: discountsReducer,
  productList: productListReducer,
  routing: routerReducer
});

export default rootReducer;
