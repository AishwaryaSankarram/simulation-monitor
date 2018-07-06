import React, { Component } from 'react';
import '../css/header.css';
import logo from '../images/logo.png';
import Dropdown from '../containers/dropdown.jsx';
import { ActionButtons } from '../containers/action-buttons'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { startSimulation, stopSimulation, replaySimulation } from '../actions/scenario-actions';
import { showWarnings, zoomOptionChange } from '../actions/header-actions';

class Header extends Component {

  startSimulation(event) {
    if(this.props.actionButtons.playEnabled){
      // console.log("STARTING SIMULATION");
      this.props.startSimulation(this.props.cars);
    }else{
      // console.log("STOPPING SIMULATION");
      this.props.stopSimulation();
    }
  }

  restartSimulation(){
    // console.log("RESTARTING SIMULATION");
    this.props.replaySimulation(this.props.cars);
  }

  displayWarnings(){
    this.props.showWarnings(false);
  }

  zoomOptionChange(value){
    this.props.zoomOptionChange(value);
  }

 render() {
   // console.log("THIS.PROPS.actionButtons ->", this.props.actionButtons)
  //  console.log("CARS ->", this.props.cars);
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
                  <ActionButtons startSimulation={this.startSimulation.bind(this)} userName={this.props.user.name} restartSimulation={this.restartSimulation.bind(this)}
                  zoomOption={this.props.zoomOption} zoomOptionChange={this.zoomOptionChange.bind(this)}
                  actionButtons={this.props.actionButtons} displayWarnings={this.displayWarnings.bind(this)} />
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
    zoomOption: state.zoomOption,
    warningsShown: state.modalIsOpen
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ startSimulation, showWarnings, stopSimulation, replaySimulation, zoomOptionChange}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
