import React from 'react';
import { expect } from 'chai';

import Home from './Home';

import { mountContainer } from '../../test/mount';

describe('Home', () => {
  const wrapper = mountContainer(<Home />);

  it('should render', () => {
    expect(wrapper.find('h1').length).to.equal(1);
    expect(wrapper.find('Link').length).to.equal(2);
  });
});
