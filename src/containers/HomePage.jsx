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
    this.props.fetchAllScenarios();


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
          {this.props.scenarios.length !== 0 && <Dropdown items={this.props.scenarios} /> }
        <button onClick={this.props.fetchAllScenarios}>Fetch scenarios.</button>
      </div>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAllScenarios }, dispatch);
}

function mapStateToProps(state) {
  return {
    scenarios: state.scenarios,
    selectedScenario: state.selectedScenario
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
