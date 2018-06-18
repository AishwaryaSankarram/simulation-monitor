import React, { Component } from 'react';
import MyMapContainer from './map.jsx';
import Dropdown from '../containers/dropdown.jsx'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { fetchAllScenarios } from '../actions/scenario-actions'
import CarPanel from './car-panel'

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
    this.props.fetchAllScenarios(authPayload);
  }

  render() {


    return(
      <div>
        <CarPanel />
        <MyMapContainer cars={this.props.cars}/>
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
    cars: state.cars
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
