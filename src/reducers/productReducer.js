import initState from './initState';
import {
  SELECT_PRODUCT,
  RESET_PRODUCT
} from '../constants/actionTypes';

export default function productReducer(state = initState.product, action) {
  switch (action.type) {
    case SELECT_PRODUCT:
      return action.product;

    case RESET_PRODUCT:
      return initState.product;

    default:
      return state;
  }
}
