import Api from '../utils/api.jsx'
import axios from 'axios';
import { FETCH_ALL_SCENARIOS } from './constants.js'

export function fetchAllScenarios(authPayload) {

  console.log("FETCH ALL SCENARIOS ACTION CALLED");

  const baseUrl = Api.baseUrl + "scenario/getAllScenarios";
  let response = axios.get(baseUrl, {auth: authPayload});


  return {
    type: FETCH_ALL_SCENARIOS,
    payload: response
  }
}
