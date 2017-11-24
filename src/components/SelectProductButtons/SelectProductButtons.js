import React, { PureComponent } from 'react';
import Proptypes from 'prop-types';

class SelectProductButtons extends PureComponent {
  render() {
    const { productList, onSelect } = this.props;

    return (
      <div className="sm-spb">
        <h1 className="sm-spb__title">Add Products to your basket</h1>
        {
          productList.map((p, i) =>
            <button
              className="btn btn-primary btn-lg sm-spb__btn--mr"
              value={p.id}
              key={p.id + i}
              onClick={onSelect}
            >
              {p.name}
            </button>
          )
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
