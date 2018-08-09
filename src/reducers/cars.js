import { FETCH_CARS, UPDATE_EV, PLAY_CLICKED, CAR_DATA, REPLAY_CLICKED } from '../actions/constants'

export default function (state = null, action) {
  let newState;
  switch (action.type) {
    case FETCH_CARS:
      let carResponse = action.payload.cars;
      carResponse.forEach((car) => {
        car.initialLat = car.latitude;
        car.initialLng = car.longitude;
      });
      return carResponse;

    case UPDATE_EV:
      newState = [...state];
      let setToEV = newState.filter((car) => car === action.payload)[0];
      if (setToEV.useAsEv) {
        return state;
      } else {
        setToEV.useAsEv = true;
      }
      let setToRV = newState.filter((car) => car !== action.payload);
      setToRV.forEach((car) => {
        car.useAsEv = false;
      });
      // console.log("NEW STATE ->", newState);
      return newState;

    case REPLAY_CLICKED:
    case PLAY_CLICKED:
      newState = [...state];
      newState.forEach((car) => {
        car.latitude = car.initialLat;
        car.longitude = car.initialLng;
        car.path = [];
      });
      return newState;

    case CAR_DATA:
      newState = [...state];
      let evCar = action.payload.EVLocation;

      let rvCar = action.payload.RVLocation;
      if (evCar && rvCar) {
        let newStateEV = newState.filter((car) => car.vehId.toString() === evCar.vehID)[0];

        let newStateRV = newState.filter((car) => car.vehId.toString() === rvCar.vehID)[0];

        // console.log("NEW STATE EV ->", newStateEV);
        // console.log("NEW STATE RV ->", newStateRV);


        if (newStateEV) {
          let evLatLngObj = { lat: parseFloat(evCar['LatitudeInDeg']), lng: parseFloat(evCar['LongitudeInDeg']) };
          newStateEV.path = [...newStateEV.path, evLatLngObj];
          newStateEV.speed = evCar['SpeedInMetersPerSec'];
          newStateEV.timeToDest = evCar['TimeToDestSec'].toString();
          newStateEV.heading = parseFloat(evCar['HeadingInDeg']);
          newStateEV.latitude = evLatLngObj.lat;
          newStateEV.longitude = evLatLngObj.lng;
        }

        if (newStateRV) {
          let rvLatLngObj = { lat: parseFloat(rvCar['LatitudeInDeg']), lng: parseFloat(rvCar['LongitudeInDeg']) };
          newStateRV.path = [...newStateRV.path, rvLatLngObj];
          newStateRV.speed = rvCar['SpeedInMetersPerSec'];
          newStateRV.timeToDest = rvCar['TimeToDestSec'].toString();
          newStateRV.heading = parseFloat(rvCar['HeadingInDeg']);
          newStateRV.latitude = rvLatLngObj.lat;
          newStateRV.longitude = rvLatLngObj.lng;
        }
      }
      return newState;
    default:
      return state;
  }


}
