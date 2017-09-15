import React, { PureComponent } from 'react';
import Proptypes from 'prop-types';

class SelectedProducts extends PureComponent {
  render() {
    const { product } = this.props;

    return (
      <div>
        {
          product.displayed.map((p, i) =>
            <div
              className="App-product"
              key={p.id + i}
            >
              {p.name} : ${p.price}
            </div>)
        }
        <div className="App-total">
          ${product.total}
        </div>
      </div>
    );
  }
}

SelectedProducts.propTypes = {
  product: Proptypes.object.isRequired
};

export default SelectedProducts;
