import { FETCH_CARS } from '../actions/constants'

export default function(state = null, action) {

  switch(action.type) {
    case FETCH_CARS:
      return action.payload.cars;
  }

  return state;
}
