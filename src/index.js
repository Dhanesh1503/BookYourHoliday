/* app.js
 * Base component that implement the render() method and is responsible toload the HTML content.
 */
import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import getAppProvider from './routes/index';
import { Provider } from 'react-redux';
import DevTools from './containers/DevTools';
import { AppContainer, hot } from 'react-hot-loader';
import * as Constants from './constants/CommonConstants';

const store = configureStore();
const mountNode = document.getElementById('appId');

ReactDOM.render(
  getAppProvider(store, history),
  mountNode,
);

if (__DEVELOPMENT__) {
  /* Mount Dev tools on the Dom structure */
  ReactDOM.render((
    <Provider store={store}>
      <DevTools />
    </Provider>
  ), document.getElementById('devtools'));
}  
