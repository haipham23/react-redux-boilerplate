import React, { PureComponent } from 'react';

import Model from './SelectProductButtonsModel';

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

SelectProductButtons.propTypes = Model.propTypes;

export default SelectProductButtons;
