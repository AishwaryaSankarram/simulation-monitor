import {Api} from '../utils/api.jsx'
import axios from 'axios';
import { FETCH_ALL_SCENARIOS, PLAY_CLICKED, CAR_DATA } from './constants.js';
import { START_SCRIPT_COMMAND } from '../config.js'

export async function fetchAllScenarios(authPayload) {

  // console.log("FETCH ALL SCENARIOS ACTION CALLED");

  const baseUrl = Api.baseUrl + "scenario/getAllScenarios";
  let response =  await axios.get(baseUrl, {auth: authPayload});
  let data;
  if(response.status === 200) {
    // console.log("RESPONSE STATUS 200 =>", response);
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
  // console.log("PLAY BUTTON CLICKED");
  // let sysCommand = "/home/murali/py/sim_kill_port.py;/home/murali/py/sim_kill_port.py;/home/murali/py/sim_self_start.py;/home/murali/py/sim_stop.py;/home/murali/py/sim_start.py";


  //callCommandForExecution(sysCommand);
  let payload = {remotePath:"/tmp/", remoteIp:"localhost", remotePass:"P@ssc0de", remoteUser:"murali", command: START_SCRIPT_COMMAND};

  window.socket.emit("start", JSON.stringify(payload), function(response) {
    // console.log("RESPONSE FROM START EVENT =>", response);
    if(response === "failed") {
      window.socket.emit("start", JSON.stringify(payload));
      window.socketStart = false;
    } else {
      window.socketStart = true;
    }
  });

  return {
    type: PLAY_CLICKED
  }

}

export function newCarData(data) {
  return {
    type: CAR_DATA,
    payload: data
  }
}
