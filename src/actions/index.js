import Api from '../utils/api.jsx'
import axios from 'axios';
import { FETCH_ALL_SCENARIOS, FETCH_CARS, LOGIN_SUCCESS, LOGIN_FAIL, RENDER_LOGIN, UPDATE_EV } from './constants.js'

export function fetchAllScenarios(authPayload) {

  console.log("FETCH ALL SCENARIOS ACTION CALLED");

  const baseUrl = Api.baseUrl + "scenario/getAllScenarios";
  let response = axios.get(baseUrl, {auth: authPayload});


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

export async function checkCredentials(payload, source) {


  console.log("CHECKING USER CREDENTIALS...")

  let response = await axios({
      method: 'post',
      url: Api.baseUrl + "user/login",
      data: payload,
      validateStatus: (status) => {
        return true; // I'm always returning true, you may want to do it depending on the status received
      },
  });

  console.log("RESPONSE ->", response);

  if(response.status === 200) {
    localStorage.setItem("loginData",JSON.stringify(response.data));
    localStorage.setItem("pwd",payload.password);
    return {
      type: LOGIN_SUCCESS,
      payload: response,
      pwd: payload.password
    }
  } else {
      if(source === "user") {
        return {
          type: LOGIN_FAIL
        }
    } else if (source === "history" ) {
        return {
          type: RENDER_LOGIN
        }
    }
  }
}

export function renderLogin() {
  return {
    type: RENDER_LOGIN
  }
}

export function updateEV(car) {
  return {
    type: UPDATE_EV,
    payload: car
  }
}
