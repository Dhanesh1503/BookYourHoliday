/* App.js
 * This is the root container which will be rendered first.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import '../styles/main.scss';

class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <div id='application_container'>
        <a href='/home'><p>Hi you are now rendering the <strong>Application Component</strong>...!</p></a>
        {children}
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
