/* eslint no-restricted-syntax: "off" */
/* eslint no-await-in-loop: "off" */

import filterDiscounts from './filterDiscounts';
import findProduct from './findProduct';

const selectProductAsync = async (e, product, productList, discounts) => {
  const selectedProducts = [
    ...product.selected,
    findProduct(productList, e)
  ];

  let displayedProducts = [...selectedProducts];

  // filter by active discount
  // sort discount based on priority
  const filteredDiscounts = filterDiscounts(discounts);

  // apply discounts
  for (const fd of filteredDiscounts) {
    displayedProducts = await fd(displayedProducts);
  }

  return {
    selectedProducts,
    displayedProducts
  };
};

export default selectProductAsync;
