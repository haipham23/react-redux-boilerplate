import { expect } from 'chai';

import discounts from './discounts';

describe('Discounts buyOnegetOne', () => {
  const buyOnegetOne = discounts.find(d => d.name === 'buyOnegetOne');

  it('should return discounted products', (done) => {
    const products = [{
      id: 'AP1',
      name: 'Apple',
      price: '5.00'
    }, {
      id: 'AP1',
      name: 'Apple',
      price: '5.00'
    }, {
      id: 'CF1',
      name: 'Coffee',
      price: '11.23'
    }];

    const discountedProducts = [{
      id: 'AP1',
      name: 'Apple',
      price: '5.00'
    }, {
      id: 'DI-B1G1',
      name: 'Buy 1 get 1 free Apple',
      price: '0.00'
    }, {
      id: 'CF1',
      name: 'Coffee',
      price: '11.23'
    }];

    buyOnegetOne
      .calc(products)
      .then((result) => {
        expect(result).to.deep.equal(discountedProducts);

        done();
      });
  });

  it('should return empty array for empty product', (done) => {
    buyOnegetOne
      .calc([])
      .then((result) => {
        expect(result).to.deep.equal([]);

        done();
      });
  });

  it('should return all products if condition not matched', (done) => {
    const products = [{
      id: 'AP1',
      name: 'Apple',
      price: '5.00'
    }, {
      id: 'FR1',
      name: 'Fruit Tea',
      price: '3.11'
    }, {
      id: 'CF1',
      name: 'Coffee',
      price: '11.23'
    }];

    buyOnegetOne
      .calc(products)
      .then((result) => {
        expect(result).to.deep.equal(products);

        done();
      });
  });
});


describe('Discounts threeOrMore', () => {
  const threeOrMore = discounts.find(d => d.name === 'threeOrMore');

  it('should return discounted products when buying 3 apples', (done) => {
    const products = Array(3).fill({
      id: 'AP1',
      name: 'Apple',
      price: '5.00'
    });

    const discountedProducts = products.concat(Array(3).fill({
      id: 'DI-BP',
      name: 'Discount on bulk purchase of Apple',
      price: '-0.50'
    }));

    threeOrMore
      .calc(products)
      .then((result) => {
        expect(result).to.deep.equal(discountedProducts);

        done();
      });
  });

  it('should return normal products when buying 2 apples', (done) => {
    const products = Array(2).fill({
      id: 'AP1',
      name: 'Apple',
      price: '5.00'
    });

    threeOrMore
      .calc(products)
      .then((result) => {
        expect(result).to.deep.equal(products);

        done();
      });
  });

  it('should return discounted products when buying 3 apples and 1 coffee', (done) => {
    const products = [{
      id: 'AP1',
      name: 'Apple',
      price: '5.00'
    }, {
      id: 'AP1',
      name: 'Apple',
      price: '5.00'
    }, {
      id: 'AP1',
      name: 'Apple',
      price: '5.00'
    }, {
      id: 'CF1',
      name: 'Coffee',
      price: '11.23'
    }];

    const discountedProducts = [{
      id: 'AP1',
      name: 'Apple',
      price: '5.00'
    }, {
      id: 'AP1',
      name: 'Apple',
      price: '5.00'
    }, {
      id: 'AP1',
      name: 'Apple',
      price: '5.00'
    }, {
      id: 'CF1',
      name: 'Coffee',
      price: '11.23'
    }, {
      id: 'DI-BP',
      name: 'Discount on bulk purchase of Apple',
      price: '-0.50'
    }, {
      id: 'DI-BP',
      name: 'Discount on bulk purchase of Apple',
      price: '-0.50'
    }, {
      id: 'DI-BP',
      name: 'Discount on bulk purchase of Apple',
      price: '-0.50'
    }];

    threeOrMore
      .calc(products)
      .then((result) => {
        expect(result).to.deep.equal(discountedProducts);

        done();
      });
  });
});
