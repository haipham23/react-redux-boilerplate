import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions/productActions';

import Header from '../../components/Header/Header';
import SelectProductButtons from '../../components/SelectProductButtons/SelectProductButtons';
import SelectedProducts from '../../components/SelectedProducts/SelectedProducts';

class TextMaster extends Component {
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
        <Header />
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

TextMaster.propTypes = {
  productList: PropTypes.array.isRequired,
  discounts: PropTypes.array.isRequired,
  product: PropTypes.object.isRequired,
  reduxActions: PropTypes.object.isRequired
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
)(TextMaster);
