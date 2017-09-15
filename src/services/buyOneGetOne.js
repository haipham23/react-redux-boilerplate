import notDiscountedProduct from './notDiscountedProduct';

const getLabel = name => ({
  id: 'DI-B1G1',
  name: `Buy 1 get 1 free ${name}`,
  price: '0.00'
});

const buyOneGetOne = products => (
  new Promise((resolve) => {
    const discountedProducts = [];
    const selectedProducts = [];

    products.forEach((p) => {
      if (notDiscountedProduct(p.id)) {
        const spIdx = selectedProducts.indexOf(p.id);

        if (spIdx === -1) {
          // add first product to basket
          selectedProducts.push(p.id);
          discountedProducts.push(p);
        } else {
          // 2nd products that have same id
          // apply discount
          discountedProducts.push(getLabel(p.name));
          selectedProducts.splice(spIdx, 1);
        }
      } else {
        discountedProducts.push(p);
      }
    });

    resolve(discountedProducts);
  })
);

export default buyOneGetOne;
