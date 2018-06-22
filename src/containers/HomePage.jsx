import React, { Component } from 'react';
import MyMapContainer from './map.jsx';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
<<<<<<< HEAD
import { fetchAllScenarios, newCarData, receiveSocketData } from '../actions/scenario-actions';
import { Warnings } from '../components/warnings'
=======
import { fetchAllScenarios } from '../actions/scenario-actions';
import { Warnings } from '../components/warnings';
>>>>>>> d012fd3... Show Warnings  Modal
import CarPanel from './car-panel';
import MyModal from '../layouts/Modal.jsx';
import '../css/home-page.css';

class HomePage extends Component {

  componentDidMount(){
    let self = this;
    let authPayload = {username: this.props.user.uuid, password: localStorage.getItem("pwd")};
    if(!this.props.cars) {
      this.props.fetchAllScenarios(authPayload);
    }

    window.socket.on('console', function(data) {
      let msg = JSON.parse(data);
      // console.log('RECEIVING : ', data);
      self.props.newCarData(JSON.parse(msg.data));
      self.props.receiveSocketData(JSON.parse(msg.data));
    });

    window.socket.on('reset', function(data) {
    	data = JSON.parse(data);
		  console.log('Reset data : ', data);
    });

    window.socket.on('tcpClients', function(data){
      console.log("RAW DATA =>", data);
      console.log("DATA.LENGTH", data.length);
      if(data.length > 0 && window.socketStart) {
        console.log("Subscribing to data....");
        window.socket.emit("subscribe", "192.168.1.5");
      }

    })
  }

  render() {
    return(
      <div className="main-page">
        <CarPanel cars={this.props.cars} />
        <br />
        <Warnings warnings={this.props.warnings} />
        <MyMapContainer mapView={this.props.mapView} cars={this.props.cars}/>
        <MyModal/>
      </div>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAllScenarios, newCarData, receiveSocketData }, dispatch);
}

function mapStateToProps(state) {
  return {
    user: state.user,
    mapView: state.mapView,
    cars: state.cars,
    warnings: state.warnings.count

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
