import Api from '../utils/api.jsx'
import axios from 'axios';
import { FETCH_ALL_SCENARIOS, PLAY_CLICKED } from './constants.js'

export async function fetchAllScenarios(authPayload) {

  console.log("FETCH ALL SCENARIOS ACTION CALLED");

  const baseUrl = Api.baseUrl + "scenario/getAllScenarios";
  let response =  await axios.get(baseUrl, {auth: authPayload});
  let data;
  if(response.status === 200) {
    console.log("RESPONSE STATUS 200 =>", response);
    data = response.data
  } else {
    data = []
  }


  return {
    type: FETCH_ALL_SCENARIOS,
    payload: data
  }
}

export function startSimulation() {
  console.log("PLAY BUTTON CLICKED");

  return {
    type: PLAY_CLICKED
  }

}
