/* eslint no-unused-expressions: "off" */

import { expect } from 'chai';

import notDiscountedProduct from './notDiscountedProduct';

describe('notDiscountedProduct service', () => {
  it('should return true', () => {
    expect(notDiscountedProduct('AP1')).to.be.true;
  });

  it('should return false', () => {
    expect(notDiscountedProduct('DI-AP1')).to.be.false;
  });
});
