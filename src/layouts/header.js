import React, { Component } from 'react';
import '../css/header.css';
import logo from '../images/logo.png';
import Dropdown from '../containers/dropdown.jsx';
import { ActionButtons } from '../containers/action-buttons'
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
              {this.props.user && <div><Dropdown items={this.props.scenarios} />
              <ActionButtons userName={this.props.user.name} actionButtons={this.props.actionButtons} /></div> }

            </div>
        </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    scenarios: state.scenarios,
    actionButtons: state.actionButtons
  }
}

export default connect(mapStateToProps)(Header);
