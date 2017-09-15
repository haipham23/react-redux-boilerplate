import { expect } from 'chai';

import configure from './configure';
import { SELECT_PRODUCT } from '../constants/actionTypes';

describe('configure Store', () => {
  const product = {
    selected: [{ product: 'Apple' }],
    displayed: [{ product: 'Apple 1' }],
    total: '1.12'
  };

  it('should load dev config', () => {
    process.env.NODE_ENV = 'development';

    const store = configure();

    const preState = store.getState();

    expect(preState).to.include.all.keys(
      'product',
      'discounts',
      'productList'
    );

    store.dispatch({
      type: SELECT_PRODUCT,
      product
    });

    const nextState = store.getState();

    expect(nextState.product).to.deep.equal(product);
  });

  it('should load prod config', () => {
    process.env.NODE_ENV = 'production';

    const store = configure();

    const preState = store.getState();

    expect(preState).to.include.all.keys(
      'product',
      'discounts',
      'productList'
    );

    store.dispatch({
      type: SELECT_PRODUCT,
      product
    });

    const nextState = store.getState();

    expect(nextState.product).to.deep.equal(product);
  });
});
