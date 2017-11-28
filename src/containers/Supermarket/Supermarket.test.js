import React from 'react';
import Enzyme, { mount } from 'enzyme';
import { expect } from 'chai';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import Adapter from 'enzyme-adapter-react-16';

import Supermarket from './Supermarket';
import configure, { history } from '../../store/configure';

Enzyme.configure({ adapter: new Adapter() });

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

    expect(wrapper.find('ul').length).to.equal(1);
    expect(wrapper.find('li').length).to.equal(1);
  });

  it('should handle select product', (done) => {
    // simulate click on 1st button
    wrapper
      .find('SelectProductButtons')
      .find('button')
      .at(0)
      .simulate('click');

    setImmediate(() => {
      wrapper.update();

      expect(wrapper.find('li').length).to.equal(2);

      done();
    });
  });

  it('should handle select 2 products', (done) => {
    // simulate click on 1st button
    wrapper
      .find('SelectProductButtons')
      .find('button')
      .at(1)
      .simulate('click');

    setImmediate(() => {
      wrapper.update();

      expect(wrapper.find('li').length).to.equal(3);

      done();
    });
  });

  it('should handle select 3 products', (done) => {
    // simulate click on 1st button
    wrapper
      .find('SelectProductButtons')
      .find('button')
      .at(2)
      .simulate('click');

    setImmediate(() => {
      wrapper.update();

      expect(wrapper.find('li').length).to.equal(4);

      done();
    });
  });

  it('should handle discount', (done) => {
    // simulate click on 1st button
    wrapper
      .find('SelectProductButtons')
      .find('button')
      .at(0)
      .simulate('click');

    setImmediate(() => {
      wrapper.update();

      expect(wrapper.find('li').length).to.equal(5);
      expect(wrapper.find('li').at(3).text()).to.include('Buy 1 get 1 free');

      done();
    });
  });
});
