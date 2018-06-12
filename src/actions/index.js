import Api from '../utils/api.jsx'
import axios from 'axios';

export function fetchAllScenarios() {

  console.log("FETCH ALL SCENARIOS ACTION CALLED");

  const baseUrl = Api.baseUrl + "scenario/getAllScenarios";
  const auth = {username: "71d94195-bdb4-409f-89d3-70353c2d31f0", password: "test"};
  let response = axios.get(baseUrl, {auth: auth});

  return {
    type: "FETCH_ALL_SCENARIOS",
    payload: response
  }
}

export function fetchCars(scenarioName) {
  console.log("FETCH CARS");

  return {
    type:"FETCH_CARS",
    payload: scenarioName
  }
}
