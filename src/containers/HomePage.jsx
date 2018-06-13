import React, { Component } from 'react';
import MyMapContainer from './map.jsx';
import Dropdown from '../containers/dropdown.jsx'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { fetchAllScenarios } from '../actions/index'

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

    let selectedCars;
    if(this.props.selectedScenario) {
      selectedCars = this.props.selectedScenario.cars;
    }
    console.log("SELECTED SCENARIO ->", this.props.selectedScenario);
    console.log("SELECTED CARS ->", selectedCars);

    return(
      <div>
        <MyMapContainer cars={selectedCars}/>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    selectedScenario: state.selectedScenario
  }
}

export default connect(mapStateToProps)(HomePage);
