import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions/productActions';

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
      reduxActions
    } = this.props;

    // apply discount
    reduxActions.selectProduct(
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
      <div className="tm">
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
  reduxActions: shape({
    selectProduct: func.isRequired
  }).isRequired
};

function mapStateToProps(state) {
  return {
    productList: state.productList,
    discounts: state.discounts,
    product: state.product
  };
}

function mapDispatchToProps(dispatch) {
  return {
    reduxActions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Supermarket);
