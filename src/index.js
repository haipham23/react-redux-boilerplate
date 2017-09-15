import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import TextMaster from './containers/TextMaster/TextMaster';
import registerServiceWorker from './registerServiceWorker';
import configure from './store/configure';

import './css/index.css';

ReactDOM.render(
  <Provider store={configure()}>
    <TextMaster />
  </Provider>, document.getElementById('root')
);

registerServiceWorker();
