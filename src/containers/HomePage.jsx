import React, { Component } from 'react';
import MyMapContainer from './map.jsx';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { fetchAllScenarios, newCarData, receiveSocketData } from '../actions/scenario-actions';
import Warnings from '../components/warnings';
import { warningsInitialState } from "../constants";
import CarPanel from './car-panel';
import MyModal from '../layouts/Modal.jsx';
import '../css/home-page.css';

class HomePage extends Component {

  componentDidMount(){
    let self = this;
    let authPayload = {username: JSON.parse(localStorage.getItem("loginData")).uuid, password: localStorage.getItem("pwd")};
    if(this.props.scenarios.length === 0) {
      this.props.fetchAllScenarios(authPayload);
    }

    window.socket.on('console', function(data) {
      let msg = JSON.parse(data);
      // console.log('RECEIVING : ', JSON.parse(msg.data));
      self.props.newCarData(JSON.parse(msg.data));
    });

    window.socket.on('reset', function(data) {
    	data = JSON.parse(data);
		  console.log('Reset data : ', data);
    });

    window.socket.on('tcpClients', function(data){
      // console.log("RAW DATA =>", data);
      // console.log("DATA.LENGTH", data.length);
      if(data.length > 0 && window.socketStart) {
        // console.log("Subscribing to data....");
        window.socket.emit("subscribe", "192.168.1.5");
      }

    })
  }

  render() {

    return(
      <div className="main-page">
        {this.props.overlayShow && <div className="overlay">
          <div className="overlayText">{this.props.overlayText}</div>
          </div>}
        <CarPanel />
        <br />
        <Warnings />
        <MyMapContainer />
        {this.props.modalIsOpen && <MyModal modalIsOpen={this.props.modalIsOpen}/>}
      </div>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAllScenarios, newCarData, receiveSocketData }, dispatch);
}

function mapStateToProps(state) {
  return {
    scenarios: state.scenarios,
    modalIsOpen: state.modalIsOpen,
    overlayShow: state.overlay.overlayShow,
    overlayText: state.overlay.overlayText

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
