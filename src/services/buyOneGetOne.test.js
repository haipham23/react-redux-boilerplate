import { expect } from 'chai';

import buyOneGetOne from './buyOneGetOne';

describe('buyOneGetOne service', () => {
  it('should not apply for 1 product', (done) => {
    const products = [{
      id: 'AP1',
      name: 'Apple',
      price: '1.11'
    }];

    buyOneGetOne(products)
      .then((result) => {
        expect(result).to.deep.equal(products);

        done();
      });
  });

  it('should apply for 2 products of the same kind', (done) => {
    const products = [{
      id: 'AP1',
      name: 'Apple',
      price: '1.11'
    }, {
      id: 'AP1',
      name: 'Apple',
      price: '1.11'
    }];

    const expected = [{
      id: 'AP1',
      name: 'Apple',
      price: '1.11'
    }, {
      id: 'DI-B1G1',
      name: 'Buy 1 get 1 free Apple',
      price: '0.00'
    }];

    buyOneGetOne(products)
      .then((result) => {
        expect(result).to.deep.equal(expected);

        done();
      });
  });

  it('should not apply for discounted product', (done) => {
    const products = [{
      id: 'AP1',
      name: 'Apple',
      price: '1.11'
    }, {
      id: 'DI-AP1',
      name: 'Apple',
      price: '-0.50'
    }];

    buyOneGetOne(products)
      .then((result) => {
        expect(result).to.deep.equal(products);

        done();
      });
  });

  it('should not apply for 2 products of the different kinds', (done) => {
    const products = [{
      id: 'AP1',
      name: 'Apple',
      price: '1.11'
    }, {
      id: 'CF1',
      name: 'Coffee',
      price: '2.11'
    }];

    buyOneGetOne(products)
      .then((result) => {
        expect(result).to.deep.equal(products);

        done();
      });
  });

  it('should apply for 3 products, 2 of them are of the same kind', (done) => {
    const products = [{
      id: 'AP1',
      name: 'Apple',
      price: '1.11'
    }, {
      id: 'CF1',
      name: 'Coffee',
      price: '2.11'
    }, {
      id: 'AP1',
      name: 'Apple',
      price: '1.11'
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
      id: 'DI-B1G1',
      name: 'Buy 1 get 1 free Apple',
      price: '0.00'
    }];

    buyOneGetOne(products)
      .then((result) => {
        expect(result).to.deep.equal(expected);

        done();
      });
  });
});
