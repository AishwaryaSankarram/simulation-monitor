
import { FETCH_CARS, UPDATE_EV } from './constants.js'

export function fetchCars(scenario) {
  // console.log("FETCH CARS");

  return {
    type: FETCH_CARS,
    payload: scenario
  }
}

export function updateEV(car) {
  return {
    type: UPDATE_EV,
    payload: car
  }
}
