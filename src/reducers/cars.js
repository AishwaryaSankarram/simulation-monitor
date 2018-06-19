import { FETCH_CARS, UPDATE_EV } from '../actions/constants'

export default function(state = null, action) {

  switch(action.type) {
    case FETCH_CARS:
      return action.payload.cars;

    case UPDATE_EV:
      let newState = [...state];
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
      console.log("NEW STATE ->", newState);
      return newState;
  }

  return state;
}
