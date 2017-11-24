import React, { PureComponent } from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

class SelectedProducts extends PureComponent {
  render() {
    const { product } = this.props;

    return (
      <div className="sm-sp">
        <ul className="list-group sm-sp__list">
          {
            product.displayed.map((p, i) =>
              <li
                className="list-group-item d-flex justify-content-between align-items-center"
                key={p.id + i}
              >
                {p.name}
                <span className="badge badge-primary badge-pill">
                  ${p.price}
                </span>
              </li>
            )
          }
          <li className="list-group-item list-group-item-success d-flex justify-content-between align-items-center">
            Total:
            <span className="badge badge-primary badge-pill">
              ${product.total}
            </span>
          </li>
        </ul>
        <div className="sm-sp__btn-home">
          <Link
            className="btn btn-outline-primary"
            to="/"
          >
            Home
          </Link>
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
