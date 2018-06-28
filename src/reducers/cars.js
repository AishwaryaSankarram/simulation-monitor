import { FETCH_CARS, UPDATE_EV, PLAY_CLICKED } from '../actions/constants'

export default function(state = null, action) {
  let newState;

  switch(action.type) {
    case FETCH_CARS:
      return action.payload.cars;

    case UPDATE_EV:
        newState = [...state];
        let setToEV = newState.filter((car) => car === action.payload)[0];
        if(setToEV.isEv) {
          return state;
        } else {
          setToEV.isEv = true;
        }
        let setToRV = newState.filter((car) => car !== action.payload);
        setToRV.forEach( (car) => {
          car.isEv = false;
        });
        // console.log("NEW STATE ->", newState);
        return newState;

    case PLAY_CLICKED:
        newState = [...state];
        newState[0].carId = 1000;
        newState[1].carId = 2000;
        newState[0].path = [];
        newState[1].path = [];
        return newState;

    case "CAR_DATA":
        newState = [...state];
        let evCar = action.payload.EVLocation;

        let rvCar = action.payload.RVLocation;

        let newStateEV = newState.filter( (car) => car.carId.toString() === evCar.vehID)[0];

        let newStateRV = newState.filter( (car) => car.carId.toString() === rvCar.vehID)[0];

        newStateEV.latitude = parseFloat(evCar['LatitudeInDeg']);
        newStateEV.longitude = parseFloat(evCar['LongitudeInDeg']);
        let evLatLngObj = {lat: newStateEV.latitude, lng: newStateEV.longitude};
        newStateEV.path.push(evLatLngObj);
        newStateEV.speed = evCar['SpeedInMetersPerSec'];
        newStateEV.timeToDest = evCar['TimeToDestSec'].toString();
        newStateEV.heading = parseFloat(evCar['HeadingInDeg']);
        newStateRV.latitude = parseFloat(rvCar['LatitudeInDeg']);
        newStateRV.longitude = parseFloat(rvCar['LongitudeInDeg']);
        let rvLatLngObj = {lat: newStateRV.latitude, lng: newStateRV.longitude};
        newStateRV.path.push(rvLatLngObj);
        newStateRV.speed = rvCar['SpeedInMetersPerSec'];
        newStateRV.timeToDest = rvCar['TimeToDestSec'].toString();
        newStateRV.heading = parseFloat(rvCar['HeadingInDeg']);
        return newState;
    default:
       return state;
  }


}
