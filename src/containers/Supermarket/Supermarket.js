import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectProduct } from '../../actions/productActions';

import SelectProductButtons from '../../components/SelectProductButtons/SelectProductButtons';
import SelectedProducts from '../../components/SelectedProducts/SelectedProducts';

class Supermarket extends Component {
  constructor(props) {
    super(props);

    this.onSelect = this.onSelect.bind(this);
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
        />
      </div>
    );
  }
}

const {
  arrayOf,
  shape,
  array,
  string,
  number,
  bool,
  func
} = Proptypes;

Supermarket.propTypes = {
  productList: arrayOf(shape({
    id: string.isRequired,
    name: string.isRequired,
    price: string.isRequired
  })).isRequired,
  discounts: arrayOf(shape({
    name: string.isRequired,
    priority: number.isRequired,
    isActive: bool.isRequired,
    calc: func.isRequired
  })).isRequired,
  product: shape({
    selected: array,
    displayed: array,
    total: string
  }).isRequired,
  rSelectProduct: func.isRequired
};

const mapStateToProps = state => ({
  productList: state.productList,
  discounts: state.discounts,
  product: state.product
});

const mapDispatchToProps = dispatch => ({
  rSelectProduct: bindActionCreators(selectProduct, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Supermarket);
