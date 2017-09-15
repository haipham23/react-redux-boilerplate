import { expect } from 'chai';

import calculateTotal from './calculateTotal';

describe('calculateTotal service', () => {
  it('should calculate total', () => {
    const products = [{
      id: 'AP1',
      name: 'Apple',
      price: '1.11'
    }, {
      id: 'CF1',
      name: 'Coffee',
      price: '2.11'
    }, {
      id: 'CF1',
      name: 'Coffee',
      price: '2.11'
    }, {
      id: 'CF1',
      name: 'Coffee',
      price: '2.11'
    }];

    const total = calculateTotal(products);

    expect(total).to.equal('7.44');
  });

  it('should calculate total with discount', () => {
    const products = [{
      id: 'AP1',
      name: 'Apple',
      price: '1.11'
    }, {
      id: 'CF1',
      name: 'Coffee',
      price: '2.11'
    }, {
      id: 'CF1',
      name: 'Coffee',
      price: '2.11'
    }, {
      id: 'CF1',
      name: 'Coffee',
      price: '2.11'
    }, {
      id: 'DI-BP',
      name: 'Discount on bulk purchase of Coffee',
      price: '-0.50'
    }, {
      id: 'DI-BP',
      name: 'Discount on bulk purchase of Coffee',
      price: '-0.50'
    }, {
      id: 'DI-BP',
      name: 'Discount on bulk purchase of Coffee',
      price: '-0.50'
    }];

    const total = calculateTotal(products);

    expect(total).to.equal('5.94');
  });
});
