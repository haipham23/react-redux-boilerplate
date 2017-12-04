import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import Model from './SelectedProductsModel';

import notDiscountedProduct from '../../services/notDiscountedProduct';

class SelectedProducts extends PureComponent {
  render() {
    const { product, onReset } = this.props;

    return (
      <div className="sm-sp">
        <ul className="list-group sm-sp__list">
          {
            product.displayed.map((p, i) => {
              const pillClass = classNames('badge badge-pill', {
                'badge-primary': notDiscountedProduct(p.id),
                'badge-danger': !notDiscountedProduct(p.id)
              });

              return (
                <li
                  className="list-group-item d-flex justify-content-between align-items-center"
                  key={p.id + i}
                >
                  {p.name}
                  <span className={pillClass}>
                    ${p.price}
                  </span>
                </li>
              );
            })
          }
          <li className="list-group-item list-group-item-success d-flex justify-content-between align-items-center">
            Total:
            <span className="badge badge-primary badge-pill">
              ${product.total}
            </span>
          </li>
        </ul>
        <div className="sm-sp__btn-home">
          <button
            className="btn btn-danger sm-sp__btn-mr"
            onClick={() => onReset()}
          >
            Reset
          </button>
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

SelectedProducts.propTypes = Model.propTypes;

export default SelectedProducts;
