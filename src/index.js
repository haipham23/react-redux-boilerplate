import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import I18n from 'redux-i18n';

import registerServiceWorker from './registerServiceWorker';
import configure, { history } from './store/configure';
import syncContent from './services/syncContent';

import Router from './components/Router/Router';

import './css/index.css';

const store = configure();

ReactDOM.render(
  <Provider store={store}>
    <I18n translations={{}} initialLang="en" useReducer>
      <ConnectedRouter history={history}>
        <Router />
      </ConnectedRouter>
    </I18n>
  </Provider>, document.getElementById('root')
);

registerServiceWorker();
syncContent(store);
