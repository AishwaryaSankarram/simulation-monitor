import React, { Component } from 'react';
import MyMapContainer from './map.jsx';
import axios from 'axios';
import Dropdown from '../components/dropdown.jsx'
import Api from '../utils/api.jsx'

export default class HomePage extends Component {

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
    //Call Axios and fetch scenarios - set it to this.state.scenarios
    const self = this;
    const baseUrl = Api.baseUrl + "scenario/getAllScenarios"
    const auth = {username: "71d94195-bdb4-409f-89d3-70353c2d31f0", password: "test"};
    let newScenarios = [];
    axios.get(baseUrl, {auth: auth}).then(function(response) {
      console.log(response.data);
      response.data.forEach((scenario) => {
        newScenarios.push(scenario);
      });
      self.setState({
        scenarios: newScenarios
      });
    });


  }

  render() {

    return(
      <div>
        <MyMapContainer
            cars={this.state.cars}/>
          {this.state.scenarios && <Dropdown items={this.state.scenarios} fetchCars={this.fetchCars} /> }
      </div>
    );
  }


}
