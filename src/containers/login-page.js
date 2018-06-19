import React, { Component } from 'react';
import { checkCredentials } from '../actions/user-actions'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

import '../css/login-page.css';

const style = {
    margin: 15,
// backgroundColor:"#93c849",
};

class LoginPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      emailId:"",
      password:""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let payload={
            "emailId":this.state.emailId,
            "password":this.state.password
    };

    this.setState({
      emailId: "",
      password: ""
    });

    this.props.checkCredentials(payload, "user");

  }




  render() {
    return(
      <MuiThemeProvider key="login-fields">
                   <form action="/" method="POST" onSubmit={(event) => this.handleClick(event)}>
                      <div className="sing_in_wrapper clearfix">
                               <TextField
                                 hintText="Enter your email address"
                                 value={this.state.emailId}
                                 floatingLabelText="Email Address"
                                 onChange={(event) => this.setState({emailId:event.target.value})}
                                />
                        <br/>
                               <TextField
                                 type="password"
                                 hintText="Enter your password"
                                 value={this.state.password}
                                 floatingLabelText="Password"
                                 onChange={(event) => this.setState({password:event.target.value})}
                                />
                        <br/>    <div className="login_footer">
                                 <RaisedButton className='login_button' label="Login" type="submit" primary={true} style={style} onClick={(event) => this.handleSubmit(event)}/>
                                 </div>
                     </div>
                     </form>
                 </MuiThemeProvider>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ checkCredentials }, dispatch);
}

export default connect(null, mapDispatchToProps)(LoginPage);
