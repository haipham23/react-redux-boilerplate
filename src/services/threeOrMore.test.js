import { expect } from 'chai';

import threeOrMore from './threeOrMore';

describe('threeOrMore service', () => {
  it('should not apply for 1 product', (done) => {
    const products = [{
      id: 'AP1',
      name: 'Apple',
      price: '1.11'
    }];

    threeOrMore(products)
      .then((result) => {
        expect(result).to.deep.equal(products);

        done();
      });
  });

  it('should not apply for 2 products of same kind', (done) => {
    const products = [{
      id: 'AP1',
      name: 'Apple',
      price: '1.11'
    }, {
      id: 'AP1',
      name: 'Apple',
      price: '1.11'
    }];

    threeOrMore(products)
      .then((result) => {
        expect(result).to.deep.equal(products);

        done();
      });
  });

  it('should apply for 4 products, 3 of them are of the same kind', (done) => {
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

    const expected = [{
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

    threeOrMore(products)
      .then((result) => {
        expect(result).to.deep.equal(expected);

        done();
      });
  });

  it('should not apply for 4 products, 2 of them are of the same kind', (done) => {
    const products = [{
      id: 'AP1',
      name: 'Apple',
      price: '1.11'
    }, {
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
    }];

    threeOrMore(products)
      .then((result) => {
        expect(result).to.deep.equal(products);

        done();
      });
  });
});
