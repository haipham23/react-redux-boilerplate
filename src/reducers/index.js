import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './authReducer';
import product from './productReducer';
import discounts from './discountsReducer';
import productList from './productListReducer';

const rootReducer = combineReducers({
  auth,
  product,
  discounts,
  productList,
  routing: routerReducer
});

export default rootReducer;
