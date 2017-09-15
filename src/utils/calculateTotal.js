import Big from 'big.js';

const calculateTotal = products => (
  products
    .map(p => p.price)
    .reduce((a, b) => Big(a).plus(Big(b)).toFixed(2))
);

export default calculateTotal;
