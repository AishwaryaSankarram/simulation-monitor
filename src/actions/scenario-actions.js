import {Api} from '../utils/api.jsx'
import axios from 'axios';
import { FETCH_ALL_SCENARIOS, PLAY_CLICKED, CAR_DATA } from './constants.js';
// import { START_SCRIPT_COMMAND } from '../config.js'

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

export function startSimulation(cars) {
  // console.log("PLAY BUTTON CLICKED");
  // let sysCommand = "/home/murali/py/sim_kill_port.py;/home/murali/py/sim_kill_port.py;/home/murali/py/sim_self_start.py;/home/murali/py/sim_stop.py;/home/murali/py/sim_start.py";


  //callCommandForExecution(sysCommand);
  // let payload = {remotePath:"/tmp/", remoteIp:"localhost", remotePass:"P@ssc0de", remoteUser:"murali", command: START_SCRIPT_COMMAND};
  let objToSend = {}
  let payload = [];
  //
  // cars.forEach( (car,index) => {
  //   let gpsFileName = ((index + 1)*1000).toString()
  //   let carPayload = {"gpsFileName": car.geoFileName, "vehId": (index + 1)*1000, isEv: car.isEv}
  //   payload.push(carPayload);
  // });

  // cars[0].gpsFileName = "1234gps_sim.json";
  // cars[0].vehId = "1234";
  // cars[0].isEv = false;
  //
  // cars[1].gpsFileName = "4321gps_sim.json";
  // cars[1].vehId = "4321";
  // cars[1].isEv = true;

  cars.forEach( (car) => {
    let carPayload = {"gpsFileName": car.geoFileName, "vehId": car.vehId, "isEv": car.useAsEv };
    payload.push(carPayload);
  });

  objToSend.start = payload;
  console.log("OBJTOSEND ->", objToSend);


  window.socket.emit("start", JSON.stringify(objToSend), function(response) {
    console.log("RESPONSE FROM START EVENT =>", response);
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
