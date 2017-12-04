import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

import SelectProductButtons from '../../components/SelectProductButtons/SelectProductButtons';
import SelectedProducts from '../../components/SelectedProducts/SelectedProducts';

import Model from './SupermarketModel';

class Supermarket extends Component {
  render() {
    return (
      <div className="container tm">
        <SelectProductButtons
          productList={this.props.productList}
          onSelect={this.props.onSelect}
        />
        <SelectedProducts
          product={this.props.product}
          onReset={this.props.resetProduct}
        />
      </div>
    );
  }
}

Supermarket.propTypes = Model.propTypes;

export default compose(
  connect(
    Model.mapStateToProps,
    Model.mapDispatchToProps
  ),
  withHandlers(Model.handlers),
)(Supermarket);
