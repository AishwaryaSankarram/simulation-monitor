import React, { Component } from 'react';
import MyMapContainer from './map.jsx';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { fetchAllScenarios, newCarData } from '../actions/scenario-actions';
import Warnings from '../components/warnings';
import { SUBSCRIPTION_URL } from '../config';
import CarPanel from './car-panel';
import MyModal from '../layouts/Modal.jsx';
import '../css/home-page.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { warningsInitialState } from '../constants.js';

class HomePage extends Component {

  constructor(props){
    super(props);
    this.toastsObj= {};
    this.processData = this.processData.bind(this);
    this.displayWarnings = this.displayWarnings.bind(this);
  }

  componentDidMount(){
    let self = this;
    let authPayload = {username: JSON.parse(localStorage.getItem("loginData")).uuid, password: localStorage.getItem("pwd")};
    if(this.props.scenarios.length === 0) {
      this.props.fetchAllScenarios(authPayload);
    }
    
   
    window.socket.on('reset', function(data) {
      data = JSON.parse(data);
      self.toastsObj = {};
      window.socket.emit("unsubscribe", SUBSCRIPTION_URL);
		  // console.log('Reset data : ', data);
    });

    // if (window.socketStart) {
      self.toastsObj={};
      window.socket.on('console', self.processData);
      // } // End of main IF
  }

  processData(data){
    let self = this;
    let msg = JSON.parse(data);
    let content = JSON.parse(msg.data);
    // console.log('RECEIVING : ', parseInt(content["messageID"], 10), " at time ", new Date().toLocaleTimeString() + " " + new Date().getMilliseconds());
    self.displayWarnings(content);
    self.props.newCarData(content);
  }

  displayWarnings(content){
    let self = this;
    let evLocation = content["EVLocation"];
    let rvLocation = content["RVLocation"];

    let warningArray = content["AwarenessData"].Warning.split(" ");
    if (content["messageID"] === "11"){
      self.toastsObj = {};
    }
    if (Object.keys(warningsInitialState).indexOf(warningArray[0]) > -1) {
      warningArray.forEach(warning => {
        if (warning.length > 0) {
          let toastKey = warning + evLocation.vehID + rvLocation.vehID;
          if (self.toastsObj.hasOwnProperty(toastKey)) {
            let toastCount = self.toastsObj[toastKey].count + 1;
            let toastData = self.toastsObj[toastKey].data;
            if(toast.isActive(toastData)){
            toast.update(toastData, {
              render: 'Warning ' + warning + ' received  between ' + self.props.carMap[evLocation.vehID] + ' and ' 
              + self.props.carMap[rvLocation.vehID] + ' (' + toastCount + ')',
            });
            }else{
              toast.dismiss(toastData);
              toastData = toast.error('Warning ' + warning + ' received  between ' + self.props.carMap[evLocation.vehID] + ' and '
                + self.props.carMap[rvLocation.vehID] + ' (' + toastCount + ')', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 5000
              });
            }
            self.toastsObj[toastKey] = { count: toastCount, data: toastData };
          } else {
            let toastData = toast.error('Warning ' + warning + ' received between ' + self.props.carMap[evLocation.vehID] + ' and ' + self.props.carMap[rvLocation.vehID], {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 5000
            });
            self.toastsObj[toastKey] = { count: 1, data: toastData };
          }
        }
      }); //End of forEach
    } // End of IF
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
        <ToastContainer style={{ fontSize: "12px", marginLeft: "5%", marginTop: "3%" }} className="warning-toast" />
        <MyMapContainer />
        {this.props.modalIsOpen && <MyModal modalIsOpen={this.props.modalIsOpen}/>}
      </div>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAllScenarios, newCarData}, dispatch);
}

function mapStateToProps(state) {
  return {
    scenarios: state.scenarios,
    modalIsOpen: state.modalIsOpen,
    carMap: state.carMap,
    overlayShow: state.overlay.overlayShow,
    overlayText: state.overlay.overlayText
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
