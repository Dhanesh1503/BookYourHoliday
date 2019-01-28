/* configureStore.js
 * Single store where all the state will be maintained
 */

import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';
import * as Constants from '../constants/CommonConstants';

const logger = createLogger({
  level : 'info',
  collapsed : false,
  logger : console,
  predicate : () => true
});

//Display DevTools only for Development Environments
let enhancer;

if (__DEVELOPMENT__) {
  enhancer = compose(applyMiddleware(thunkMiddleware, logger), DevTools.instrument());
}
else {
  enhancer = compose(applyMiddleware(thunkMiddleware));
}

export default function configureStore() {
  return createStore(rootReducer, {}, enhancer);
}
