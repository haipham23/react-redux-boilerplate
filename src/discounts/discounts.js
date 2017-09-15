const notDiscountedProduct = id => id.indexOf('DI-') === -1;

const buyOnegetOne = products => (
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
          discountedProducts.push({
            id: 'DI-B1G1',
            name: `Buy 1 get 1 free ${p.name}`,
            price: '0.00'
          });
          selectedProducts.splice(spIdx, 1);
        }
      } else {
        discountedProducts.push(p);
      }
    });

    resolve(discountedProducts);
  })
);


const threeOrMore = (products) => {
  const discountProduct = name => ({
    id: 'DI-BP',
    name: `Discount on bulk purchase of ${name}`,
    price: '-0.50'
  });

  return new Promise((resolve) => {
    let discountedProducts = [...products];
    const selectedItems = {};

    products.forEach((p) => {
      // don't apply on other discount
      if (notDiscountedProduct(p.id)) {
        selectedItems[p.id] = selectedItems[p.id]
          ? selectedItems[p.id] + 1
          : 1;
      }
    });

    Object.keys(selectedItems).forEach((item) => {
      if (selectedItems[item] >= 3) {
        const discountedProduct = products.find(p => p.id === item);
        const discounts = Array(selectedItems[item])
          .fill(discountProduct(discountedProduct.name));

        discountedProducts = discountedProducts.concat(discounts);
      }
    });

    resolve(discountedProducts);
  });
};


const discounts = [{
  name: 'buyOnegetOne',
  priority: 2,
  isActive: true,
  calc: buyOnegetOne
}, {
  name: 'threeOrMore',
  priority: 1,
  isActive: true,
  calc: threeOrMore
}];

export default discounts;
