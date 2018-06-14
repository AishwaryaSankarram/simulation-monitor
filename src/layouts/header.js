import React, { Component } from 'react';
import '../css/header.css';
import logo from '../images/logo.png';
import Dropdown from '../containers/dropdown.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { fetchAllScenarios } from '../actions/index';



class Header extends Component {


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
