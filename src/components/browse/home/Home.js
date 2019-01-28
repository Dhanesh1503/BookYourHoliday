/*
*Home.js Component
*/
import React, { Component } from 'react';
import _ from 'lodash';
import './Home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { browseState } = this.props;

    return (
      <div id='home-container'>
        <p>Hi ....!! You are now rendering the <strong>HomePage Component</strong> of the application.</p>
      </div>
    );
  }
}

export default Home;
