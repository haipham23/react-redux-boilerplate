import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import Header from './Header';

describe('Header', () => {
  const wrapper = mount(
    <Header />
  );

  it('should render', () => {
    expect(wrapper.find('h2').length).to.equal(1);
    expect(wrapper.find('h2').text()).to.equal('Text Master Supermarket');
  });
});
