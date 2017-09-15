import React, { PureComponent } from 'react';
import Proptypes from 'prop-types';

class SelectProductButtons extends PureComponent {
  render() {
    const { productList, onSelect } = this.props;

    return (
      <div className="App-desc">
        <p>Select Products to add to your basket</p>
        {
          productList.map((p, i) =>
            <button
              className="App-btn-product"
              value={p.id}
              key={p.id + i}
              onClick={onSelect}
            >
              {p.name}
            </button>)
        }
      </div>
    );
  }
}

SelectProductButtons.propTypes = {
  productList: Proptypes.array.isRequired,
  onSelect: Proptypes.func.isRequired
};

export default SelectProductButtons;
