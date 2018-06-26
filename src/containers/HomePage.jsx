import React, { Component } from 'react';
import MyMapContainer from './map.jsx';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { fetchAllScenarios } from '../actions/scenario-actions';
import { Warnings } from '../components/warnings'
import CarPanel from './car-panel';
import { socketStart } from '../constants.js'

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      scenarios: false,
      cars: false
    }
  }


  componentDidMount(){
    let authPayload = {username: this.props.user.uuid, password: localStorage.getItem("pwd")};
    if(!this.props.cars) {
      this.props.fetchAllScenarios(authPayload);
    }
    window.socket.on('console', function(data) {
    	data = JSON.parse(data);
		  console.log('RECEIVING : ', data);
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
      <div>
        <CarPanel cars={this.props.cars} />
        <br />
        <Warnings warnings={this.props.warnings} />
        <MyMapContainer mapView={this.props.mapView} cars={this.props.cars}/>
      </div>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAllScenarios }, dispatch);
}

function mapStateToProps(state) {
  return {
    user: state.user,
    mapView: state.mapView,
    cars: state.cars,
    warnings: state.warnings

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
