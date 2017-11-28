import React from 'react';
import Enzyme, { mount } from 'enzyme';
import { expect } from 'chai';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import Adapter from 'enzyme-adapter-react-16';

import Login from './Login';
import configure, { history } from '../../store/configure';

Enzyme.configure({ adapter: new Adapter() });

describe('Login', () => {
  const wrapper = mount(
    <Provider store={configure()}>
      <ConnectedRouter history={history}>
        <Login />
      </ConnectedRouter>
    </Provider>
  );

  it('should render', () => {
    expect(wrapper.find('input').length).to.equal(2);
  });
});
