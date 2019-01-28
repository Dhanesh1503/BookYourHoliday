import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ActionCreators from '../../actions/Actions';
import Home from '../../components/browse/home/Home';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  	return (<Home {...this.props}/>);
  }
}


const mapStateToProps = (state) => {
  return { browseState : state.browseReducer };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatcher : bindActionCreators(ActionCreators, dispatch)
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeContainer));
