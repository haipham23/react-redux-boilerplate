import productList from '../products/productList';
import discounts from '../discounts/discounts';

export default {
  auth: {
    isLoading: false,
    isAuth: false,
    token: ''
  },
  product: {
    selected: [],
    displayed: [],
    total: '0.00'
  },
  productList,
  discounts
};
