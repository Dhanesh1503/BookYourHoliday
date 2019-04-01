/* App.js
 * This is the root container which will be rendered first.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import AppHeader from '../components/browse/header/AppHeader';
import Home from '../components/browse/home/Home';
import Footer from '../components/browse/footer/Footer';
import '../styles/main.scss';

class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <div id='application_container'>
        <AppHeader/>
        <Home/>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    browseState : state.browseReducer,
  };
};

const AppContainer = hot(module)(App);

export default withRouter(connect(mapStateToProps)(AppContainer));
