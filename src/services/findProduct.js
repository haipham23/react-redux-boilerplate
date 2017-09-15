const findProduct = (productList, event) => (
  productList
    .find(p => p.id === event.target.value)
);

export default findProduct;
