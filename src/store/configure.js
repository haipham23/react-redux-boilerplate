/* eslint no-underscore-dangle: "off" */

import {
  createStore,
  compose,
  applyMiddleware
} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from '../reducers';

function configureStoreProd(initialState) {
  const middlewares = [
    thunk
  ];

  return createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares)
  ));
}

function configureStoreDev(initialState) {
  const logger = createLogger();

  const middlewares = [
    reduxImmutableStateInvariant(),
    thunk,
    logger
  ];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middlewares)
  ));

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

const configureStore =
  ['production', 'test'].indexOf(process.env.NODE_ENV) !== -1
    ? configureStoreProd
    : configureStoreDev;

export default configureStore;
