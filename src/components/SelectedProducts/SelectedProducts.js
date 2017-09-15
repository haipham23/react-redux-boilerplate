import React, { PureComponent } from 'react';
import Proptypes from 'prop-types';

class SelectedProducts extends PureComponent {
  render() {
    const { product } = this.props;

    return (
      <div className="tm-sp">
        {
          product.displayed.map((p, i) =>
            <div
              className="tm-sp__item"
              key={p.id + i}
            >
              {p.name} : ${p.price}
            </div>)
        }
        <div className="tm-sp__total">
          ${product.total}
        </div>
      </div>
    );
  }
}

const {
  shape,
  array,
  string
} = Proptypes;

SelectedProducts.propTypes = {
  product: shape({
    selected: array,
    displayed: array,
    total: string
  }).isRequired
};

export default SelectedProducts;
