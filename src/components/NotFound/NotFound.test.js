import React from 'react';
import Enzyme, { mount } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';

import NotFound from './NotFound';

Enzyme.configure({ adapter: new Adapter() });

describe('NotFound', () => {
  const wrapper = mount(
    <NotFound />
  );

  it('should render', () => {
    expect(wrapper.find('.nf').length).to.equal(1);
    expect(wrapper.find('h1').length).to.equal(1);
    expect(wrapper.find('h1').text()).to.equal('Page Not Found');
  });
});
