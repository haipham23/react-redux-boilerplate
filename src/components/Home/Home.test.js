import React from 'react';
import Enzyme, { mount } from 'enzyme';
import { expect } from 'chai';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import Adapter from 'enzyme-adapter-react-16';

import Home from './Home';
import configure, { history } from '../../store/configure';

Enzyme.configure({ adapter: new Adapter() });

describe('Home', () => {
  const wrapper = mount(
    <Provider store={configure()}>
      <ConnectedRouter history={history}>
        <Home />
      </ConnectedRouter>
    </Provider>
  );

  it('should render', () => {
    expect(wrapper.find('h1').length).to.equal(1);
    expect(wrapper.find('Link').length).to.equal(2);
  });
});
