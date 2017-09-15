/* eslint no-unused-expressions: "off" */
import { expect } from 'chai';

import productList from './productList';

it('product list should have correct format', () => {
  let isValid = true;

  productList.forEach((p) => {
    isValid = p.id && p.name && p.price && parseFloat(p.price) > 0;
  });

  expect(isValid).to.be.true;
});
