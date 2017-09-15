import buyOneGetOne from '../services/buyOneGetOne';
import threeOrMore from '../services/threeOrMore';

const discounts = [{
  name: 'buyOnegetOne',
  priority: 2,
  isActive: true,
  calc: buyOneGetOne
}, {
  name: 'threeOrMore',
  priority: 1,
  isActive: true,
  calc: threeOrMore
}];

export default discounts;
