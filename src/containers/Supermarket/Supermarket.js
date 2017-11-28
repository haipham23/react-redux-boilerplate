import React, { Component } from 'react';

import SelectProductButtons from '../../components/SelectProductButtons/SelectProductButtons';
import SelectedProducts from '../../components/SelectedProducts/SelectedProducts';

import * as P from './SupermarketProps';
import withConnect from '../../hoc/withConnect';

class Supermarket extends Component {
  constructor(props) {
    super(props);

    this.onSelect = this.onSelect.bind(this);
    this.onReset = this.onReset.bind(this);
  }

  onSelect(e) {
    e.preventDefault();

    const {
      product,
      productList,
      discounts,
      rSelectProduct
    } = this.props;

    // apply discount
    rSelectProduct(
      e,
      product,
      productList,
      discounts,
    );
  }

  onReset() {
    this.props.rResetProduct();
  }

  render() {
    const {
      productList,
      product
    } = this.props;

    return (
      <div className="container tm">
        <SelectProductButtons
          productList={productList}
          onSelect={this.onSelect}
        />
        <SelectedProducts
          product={product}
          onReset={this.onReset}
        />
      </div>
    );
  }
}

Supermarket.propTypes = P.propTypes;

export default withConnect(Supermarket, P);
