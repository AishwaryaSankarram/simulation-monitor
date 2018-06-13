import Api from '../utils/api.jsx'
import axios from 'axios';
import { FETCH_ALL_SCENARIOS, FETCH_CARS } from './constants.js'

export function fetchAllScenarios() {

  console.log("FETCH ALL SCENARIOS ACTION CALLED");

  const baseUrl = Api.baseUrl + "scenario/getAllScenarios";
  const auth = {username: "71d94195-bdb4-409f-89d3-70353c2d31f0", password: "test"};
  let response = axios.get(baseUrl, {auth: auth});


  return {
    type: FETCH_ALL_SCENARIOS,
    payload: response
  }
}

export function fetchCars(scenario) {
  console.log("FETCH CARS");

  return {
    type: FETCH_CARS,
    payload: scenario
  }
}

export function checkCredentials(payload) {


  console.log("CHECKING USER CREDENTIALS...")

  let returnObj;

  let response = axios({
      method: 'post',
      url: Api.baseUrl + "user/login",
      data: payload,
      validateStatus: (status) => {
        return true; // I'm always returning true, you may want to do it depending on the status received
      },
  });


  return {
    type: "LOGIN_STATUS",
    payload: response,
    pwd: payload.password
  }

}
