import React, { Component } from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { fetchAllScenarios } from '../actions/index'
import LoginPage from './login-page'
import HomePage from './HomePage'

class DisplayContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log("THIS.PROPS.USER->", this.props.user);
    if(this.props.user) {
      return (<HomePage />);
    } else {
      return (<LoginPage />);
    }
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(DisplayContainer)
