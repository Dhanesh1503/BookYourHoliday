/* index.js
 * Application specific routes using react-router
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import App from '../containers/App';
import HomeContainer from '../containers/browse/HomeContainer';
import createHistory from 'history/createBrowserHistory'
 
const history = createHistory();

export default (store, history) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
      	<Switch>
        <App/>
   			  {/*<Route exact path='/' component={App}/>*/}
   			  {/*<Route path='/home' component={HomeContainer}/>*/}
  	 	  </Switch>
      </BrowserRouter>
    </Provider>
  );
};