import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import configure from './store/configure';

ReactDOM.render(
  <Provider store={configure()}>
    <App />
  </Provider>, document.getElementById('root')
);

registerServiceWorker();
