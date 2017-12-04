import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

import SelectProductButtons from '../../components/SelectProductButtons/SelectProductButtons';
import SelectedProducts from '../../components/SelectedProducts/SelectedProducts';

import Props from './SupermarketProps';

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
          onReset={this.props.rResetProduct}
        />
      </div>
    );
  }
}

Supermarket.propTypes = Props.propTypes;

export default compose(
  connect(
    Props.mapStateToProps,
    Props.mapDispatchToProps
  ),
  withHandlers(Props.handlers),
)(Supermarket);
