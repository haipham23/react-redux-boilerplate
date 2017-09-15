import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import NotFound from './NotFound';

describe('NotFound', () => {
  const wrapper = mount(
    <NotFound />
  );

  it('should render', () => {
    expect(wrapper.find('.nf').length).to.equal(1);
    expect(wrapper.find('h2').length).to.equal(1);
    expect(wrapper.find('h2').text()).to.equal('Page Not Found');
  });
});
