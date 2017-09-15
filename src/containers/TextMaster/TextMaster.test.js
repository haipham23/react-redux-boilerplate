import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { Provider } from 'react-redux';

import App from './App';
import configure from '../../store/configure';

describe('App', () => {
  const wrapper = mount(
    <Provider store={configure()}>
      <App />
    </Provider>
  );

  it('should render', () => {
    expect(wrapper.find('.App').length).to.equal(1);
    expect(wrapper.find('.App-header').length).to.equal(1);
    expect(wrapper.find('.App-desc').length).to.equal(1);
    expect(wrapper.find('.App-total').length).to.equal(1);

    expect(wrapper.find('.App-btn-product').length).to.greaterThan(0);

    expect(wrapper.find('.App-product').length).to.equal(0);
  });

  it('should handle select product', (done) => {
    // simulate click on 1st button
    wrapper.find('.App-btn-product').at(0).simulate('click');

    setImmediate(() => {
      expect(wrapper.find('.App-product').length).to.equal(1);

      done();
    });
  });

  it('should handle select 2 products', (done) => {
    // simulate click on 1st button
    wrapper.find('.App-btn-product').at(1).simulate('click');

    setImmediate(() => {
      expect(wrapper.find('.App-product').length).to.equal(2);

      done();
    });
  });

  it('should handle select 3 products', (done) => {
    // simulate click on 1st button
    wrapper.find('.App-btn-product').at(2).simulate('click');

    setImmediate(() => {
      expect(wrapper.find('.App-product').length).to.equal(3);

      done();
    });
  });

  it('should handle discount', (done) => {
    // simulate click on 1st button
    wrapper.find('.App-btn-product').at(0).simulate('click');

    setImmediate(() => {
      expect(wrapper.find('.App-product').length).to.equal(4);
      expect(wrapper.find('.App-product').at(3).text()).to.include('Buy 1 get 1 free');

      done();
    });
  });
});
