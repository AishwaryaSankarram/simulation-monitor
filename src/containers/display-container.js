import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { checkCredentials, renderLogin } from '../actions/user-actions'

class DisplayContainer extends Component {

  constructor(props) {
    super(props);   

  }

  componentWillMount() {
    if(localStorage.getItem("loginData") && localStorage.getItem("pwd")) {
      let loginData = JSON.parse(localStorage.getItem("loginData"));
      let pwd = localStorage.getItem("pwd")
      let payload = {"emailId": loginData.emailId, "password": pwd}
      this.props.checkCredentials(payload, "history");
    } else {
      this.props.renderLogin();
    }
  }

  render() {
    return this.props.display;
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ checkCredentials, renderLogin }, dispatch);
}

function mapStateToProps(state) {
  return {
    display: state.display
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayContainer)
