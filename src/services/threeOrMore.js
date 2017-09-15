import notDiscountedProduct from './notDiscountedProduct';

const getLabel = name => ({
  id: 'DI-BP',
  name: `Discount on bulk purchase of ${name}`,
  price: '-0.50'
});

const threeOrMore = products => (
  new Promise((resolve) => {
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
          .fill(getLabel(discountedProduct.name));

        discountedProducts = discountedProducts.concat(discounts);
      }
    });

    resolve(discountedProducts);
  })
);

export default threeOrMore;
