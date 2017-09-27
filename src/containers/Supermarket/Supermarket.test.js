import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import Supermarket from './Supermarket';
import configure, { history } from '../../store/configure';

describe('Supermarket', () => {
  const wrapper = mount(
    <Provider store={configure()}>
      <ConnectedRouter history={history}>
        <Supermarket />
      </ConnectedRouter>
    </Provider>
  );

  it('should render', () => {
    expect(wrapper.find('.tm').length).to.equal(1);
    expect(wrapper.find('SelectProductButtons').length).to.equal(1);
    expect(wrapper.find('SelectedProducts').length).to.equal(1);
  });

  it('should handle select product', (done) => {
    // simulate click on 1st button
    wrapper
      .find('SelectProductButtons')
      .find('.tm-spb__btn')
      .at(0)
      .simulate('click');

    setImmediate(() => {
      expect(wrapper.find('.tm-sp__item').length).to.equal(1);

      done();
    });
  });

  it('should handle select 2 products', (done) => {
    // simulate click on 1st button
    wrapper
      .find('SelectProductButtons')
      .find('.tm-spb__btn')
      .at(1)
      .simulate('click');

    setImmediate(() => {
      expect(wrapper.find('.tm-sp__item').length).to.equal(2);

      done();
    });
  });

  it('should handle select 3 products', (done) => {
    // simulate click on 1st button
    wrapper
      .find('SelectProductButtons')
      .find('.tm-spb__btn')
      .at(2)
      .simulate('click');

    setImmediate(() => {
      expect(wrapper.find('.tm-sp__item').length).to.equal(3);

      done();
    });
  });

  it('should handle discount', (done) => {
    // simulate click on 1st button
    wrapper
      .find('SelectProductButtons')
      .find('.tm-spb__btn')
      .at(0)
      .simulate('click');

    setImmediate(() => {
      expect(wrapper.find('.tm-sp__item').length).to.equal(4);
      expect(wrapper.find('.tm-sp__item').at(3).text()).to.include('Buy 1 get 1 free');

      done();
    });
  });

  it('should redirect to about page', (done) => {
    expect(history.location.pathname).to.equal('/');

    wrapper
      .find('.tm-sp__about-btn')
      .props()
      .onClick(new MouseEvent('click'));

    setImmediate(() => {
      expect(history.location.pathname).to.equal('/about');

      done();
    });
  });
});
