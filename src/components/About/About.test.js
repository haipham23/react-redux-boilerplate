import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import About from './About';

Enzyme.configure({ adapter: new Adapter() });

describe('Header', () => {
  const wrapper = mount(
    <About />
  );

  it('should render', () => {
    expect(wrapper.find('.tm-about').length).to.equal(1);
    expect(wrapper.find('.tm-about__title').length).to.equal(1);
    expect(wrapper.find('.tm-about__tag').length).to.equal(1);
    expect(wrapper.find('.tm-about__github').length).to.equal(1);

    expect(wrapper.find('.tm-about__title').text()).to.equal('React Redux Boilerplate');
  });
});
