import filterDiscounts from './filterDiscounts';
import findProduct from './findProduct';

const selectProductAsync = async (e, product, productList, discounts) => {
  const selectedProducts = [
    ...product.selected,
    findProduct(productList, e)
  ];

  // filter by active discount
  // sort discount based on priority
  const filteredDiscounts = filterDiscounts(discounts);

  // apply discounts

  // using for loop
  // eslint no-restricted-syntax: "off"
  // eslint no-await-in-loop: "off"
  // let displayedProducts = [...selectedProducts];
  // for (const fd of filteredDiscounts) {
  //   displayedProducts = await fd(displayedProducts);
  // }

  // using reduce
  const displayedProducts = await filteredDiscounts.reduce(
    (fFunc, sFunc) => fFunc.then(result => sFunc(result)),
    Promise.resolve(selectedProducts)
  );

  return {
    selectedProducts,
    displayedProducts
  };
};

export default selectProductAsync;
