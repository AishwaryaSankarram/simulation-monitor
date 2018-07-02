import React, { Component } from 'react';
import '../css/header.css';
import logo from '../images/logo.png';
import Dropdown from '../containers/dropdown.jsx';
import { ActionButtons } from '../containers/action-buttons'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { startSimulation } from '../actions/scenario-actions';
import { showWarnings } from '../actions/header-actions';

class Header extends Component {

  menuClick() {
    // console.log("Menu clicked");
  }

  startSimulation(event) {
    // console.log("STARTING SIMULATION");
    this.props.startSimulation(this.props.cars);
  }

  displayWarnings(){
    this.props.showWarnings(false);
  }


 render() {
   // console.log("THIS.PROPS.actionButtons ->", this.props.actionButtons)
   console.log("CARS ->", this.props.cars);
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
                  <ActionButtons startSimulation={this.startSimulation.bind(this)} userName={this.props.user.name}
                  actionButtons={this.props.actionButtons} displayWarnings={this.displayWarnings.bind(this)}/>
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
    cars: state.cars,
    actionButtons: state.actionButtons,
    warningsShown: state.modalIsOpen
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ startSimulation, showWarnings }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
