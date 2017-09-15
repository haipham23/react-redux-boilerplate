import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions/productActions';

import './App.css';

class App extends Component {
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
      <div className="App">
        <div className="App-header">
          <h2>Text Master Supermarket</h2>
        </div>
        <div className="App-desc">
          Select Products to add to your basket
        </div>
        <div>
          {
            productList.map((p, i) =>
              <button
                className="App-btn-product"
                value={p.id}
                key={p.id + i}
                onClick={this.onSelect}
              >
                {p.name}
              </button>)
          }
        </div>
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
        </div>
        <div className="App-total">
          ${product.total}
        </div>
      </div>
    );
  }
}

App.propTypes = {
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
)(App);
