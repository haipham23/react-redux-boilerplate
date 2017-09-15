const filterDiscounts = discounts => (
  discounts
    .filter(d => d.isActive)
    .sort((a, b) => a.priority < b.priority)
    .map(d => d.calc)
);

export default filterDiscounts;
