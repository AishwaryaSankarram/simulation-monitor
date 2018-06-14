import React, { Component } from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { fetchAllScenarios, checkCredentials } from '../actions/index'
import LoginPage from './login-page'
import HomePage from './HomePage'

class DisplayContainer extends Component {

  constructor(props) {
    super(props);

  }

  componentWillMount() {
    if(localStorage.getItem("loginData") && localStorage.getItem("pwd")) {
      let loginData = JSON.parse(localStorage.getItem("loginData"));
      let pwd = localStorage.getItem("pwd")
      let payload = {"emailId": loginData.emailId, "password": pwd}
      this.props.checkCredentials(payload);
    }
  }

  render() {
    console.log("THIS.PROPS.USER->", this.props.user);
    let self = this;
    if(this.props.user) {
      return (<HomePage />);
    } else {
      return (
        <div>
          <LoginPage />
         {self.props.loginMessage && <div className="alert-danger" >{"Incorrect E-mail or Password Provided, please try again."}</div>}
        </div>

      );
    }
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ checkCredentials }, dispatch);
}

function mapStateToProps(state) {
  return {
    user: state.user,
    loginMessage: state.loginMessage
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayContainer)
