/*
*Footer.js Component
*/
import React, { Component } from 'react';
import _ from 'lodash';
import './Footer.scss';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { browseState } = this.props;

    return (
      <div id='app-footer'>
        <p>Footer @ 2019</p>
      </div>
    );
  }
}

export default Footer;
