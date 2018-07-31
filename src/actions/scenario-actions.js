import { Api } from '../utils/api.jsx';
import axios from 'axios';
import { FETCH_ALL_SCENARIOS, PLAY_CLICKED, CAR_DATA, STOP_CLICKED, REPLAY_CLICKED } from './constants.js';
import { SUBSCRIPTION_URL } from '../config';
// import { START_SCRIPT_COMMAND } from '../config.js'

export async function fetchAllScenarios(authPayload) {

  // console.log("FETCH ALL SCENARIOS ACTION CALLED");

  const baseUrl = Api.baseUrl + "scenario/getAllScenarios";
  let response = await axios.get(baseUrl, { auth: authPayload });
  let data;
  if (response.status === 200) {
    // console.log("RESPONSE STATUS 200 =>", response);
    data = response.data.filter(s => s.cars.length > 0);
  } else {
    data = [];
  }


  return {
    type: FETCH_ALL_SCENARIOS,
    payload: data
  }
}

export function stopSimulation() {
  window.socketStart = false;
  window.socket.emit("unsubscribe", window.subUrl || SUBSCRIPTION_URL);
  window.socket.emit("stop", JSON.stringify({ command: "stop" }), function (response) {
    if (response === "failed") {
      window.socketStart = true;
    } else {
      window.socketStart = false;
    }
  });
  return {
    type: STOP_CLICKED
  }
}

export function replaySimulation(cars) {
  let objToSend = {}
  let payload = [];
  cars.forEach((car) => {
    let carPayload = { "gpsFileName": car.geoFileName, "vehId": car.vehId, "isEv": car.useAsEv };
    payload.push(carPayload);
  });
  objToSend.start = payload;
  window.socket.emit("unsubscribe", window.subUrl || SUBSCRIPTION_URL);
  window.socket.emit("stop", JSON.stringify({ command: "stop" }), function (r) {
    window.socketStart = false;
    window.socket.emit("start", JSON.stringify(objToSend), function (response) {
      if (response === "failed") {
        window.socket.emit("start", JSON.stringify(objToSend));
        window.socketStart = false;
      } else {
        window.socketStart = true;
      }
      window.socket.emit("subscribe", window.subUrl || SUBSCRIPTION_URL);
    });
  });

  return {
    type: REPLAY_CLICKED,
    payload: cars.length
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

  cars.forEach((car) => {
    let carPayload = { "gpsFileName": car.geoFileName, "vehId": car.vehId, "isEv": car.useAsEv };
    payload.push(carPayload);
  });

  objToSend.start = payload;
  // console.log("OBJTOSEND ->", objToSend);
  
  window.socket.emit("start", JSON.stringify(objToSend), function (response) {
    // console.log("RESPONSE FROM START EVENT =>", response);
    if (response === "failed") {
      window.socket.emit("start", JSON.stringify(payload));
      window.socketStart = false;
    } else {
      window.socketStart = true;
    }
    window.socket.emit("subscribe", window.subUrl || SUBSCRIPTION_URL);
  });

  return {
    type: PLAY_CLICKED,
    payload: cars.length
  }

}

export function newCarData(data) { 
  if (data === null) {
    let obj = { processed: false, content: "No Data received" }
    window.socket.emit("callback", JSON.stringify(obj));
    return {
      type: "NO_DATA"
    }
  }else{
    return {
      type: CAR_DATA,
      payload: data
    }
  }
}
