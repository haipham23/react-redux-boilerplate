import React, { PureComponent } from 'react';
import Proptypes from 'prop-types';

class SelectProductButtons extends PureComponent {
  render() {
    const { productList, onSelect } = this.props;

    return (
      <div className="tm-spb">
        <p className="tm-spb__title">Select Products to add to your basket</p>
        {
          productList.map((p, i) =>
            <button
              className="tm-spb__btn"
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

const {
  arrayOf,
  shape,
  string
} = Proptypes;

SelectProductButtons.propTypes = {
  productList: arrayOf(shape({
    id: string.isRequired,
    name: string.isRequired,
    price: string.isRequired
  })).isRequired,
  onSelect: Proptypes.func.isRequired
};

export default SelectProductButtons;
