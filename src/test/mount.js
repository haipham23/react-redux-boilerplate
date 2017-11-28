import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import I18n from 'redux-i18n';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import configure, { history } from '../store/configure';

Enzyme.configure({ adapter: new Adapter() });

const mountContainer = container => mount(
  <Provider store={configure()}>
    <I18n translations={{}} initialLang="en" useReducer>
      <ConnectedRouter history={history}>
        {container}
      </ConnectedRouter>
    </I18n>
  </Provider>
);

export {
  mountContainer
};
