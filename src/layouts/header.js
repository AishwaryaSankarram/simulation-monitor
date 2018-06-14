import React, { Component } from 'react';
import '../css/header.css';
import logo from '../images/logo.png';
import Dropdown from '../containers/dropdown.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { fetchAllScenarios } from '../actions/index';
import {MuiThemeProvider, RaisedButton} from 'material-ui';




class Header extends Component {

  menuClick() {
    console.log("Menu clicked");
  }


 render() {
    return (
        <header>
            <div className="header-part">
              <div className="page-logo">
                <figure className="logo">
                  <img src={logo} alt="Carma Networks" title="Carma Networks" />
                </figure>
              </div>
              <div className="header-title">Simulation Monitor</div>
              {this.props.user && this.props.scenarios.length !== 0 && <Dropdown items={this.props.scenarios} /> }
              {this.props.user && <MuiThemeProvider><div className="add_car">

              <RaisedButton className="logout_icon new_car" title={"Logged in as "+this.props.user.name} onClick={this.menuClick.bind(this)}>
              <i className="fa fa-user-circle">{this.props.user.name}</i>
              </RaisedButton>
              </div></MuiThemeProvider>}
            </div>
        </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    scenarios: state.scenarios
  }
}

export default connect(mapStateToProps)(Header);
