import React, { Component } from 'react';
import '../css/header.css';
import logo from '../images/logo.png';
import Dropdown from '../containers/dropdown.jsx';
import { ActionButtons } from '../containers/action-buttons'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { startSimulation } from '../actions/scenario-actions';

class Header extends Component {

  menuClick() {
    console.log("Menu clicked");
  }

  startSimulation(event) {
    console.log("STARTING SIMULATION");
    this.props.startSimulation();
  }


 render() {
   console.log("THIS.PROPS.actionButtons ->", this.props.actionButtons)
    return (
        <header>
            <div className="header-part">
              <div className="page-logo">
                <figure className="logo">
                  <img src={logo} alt="Carma Networks" title="Carma Networks" />
                </figure>
              </div>
              <div className="header-title">Simulation Monitor</div>
              {this.props.user && <div>
                  <ActionButtons startSimulation={this.startSimulation.bind(this)} userName={this.props.user.name} actionButtons={this.props.actionButtons} />
                  <Dropdown items={this.props.scenarios} />
              </div> }

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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ startSimulation }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
