import React, { Component } from 'react';
import MyMapContainer from './map.jsx';
import Dropdown from '../containers/dropdown.jsx'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { fetchAllScenarios } from '../actions/index'
import CarPanel from './car-panel'

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      scenarios: false,
      cars: false
    }

    this.fetchCars = this.fetchCars.bind(this);
  }

  fetchCars(index) {
    console.log("INDEX =>", index);
    console.log("Scenarios =>", this.state.scenarios);
    let chosenScenario = this.state.scenarios[index];
    this.setState({cars: chosenScenario.cars});
    console.log("Chosen Scenario ---->", chosenScenario);

  }

  componentWillMount(){


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

function mapStateToProps(state) {
  return {
    cars: state.cars
  }
}

export default connect(mapStateToProps)(HomePage);
