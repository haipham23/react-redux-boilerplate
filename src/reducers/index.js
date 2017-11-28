import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { i18nState } from 'redux-i18n';

import auth from './authReducer';
import product from './productReducer';
import discounts from './discountsReducer';
import productList from './productListReducer';

const rootReducer = combineReducers({
  auth,
  product,
  discounts,
  productList,
  routing: routerReducer,
  i18nState
});

export default rootReducer;
