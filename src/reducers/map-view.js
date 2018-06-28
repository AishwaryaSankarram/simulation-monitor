import { FETCH_CARS, CAR_DATA } from '../actions/constants'

import { mapViewInitialState } from '../constants';

export default function(state = mapViewInitialState, action) {

  switch(action.type) {
    case FETCH_CARS:
      return {previewMode: true, playMode: false};
    case CAR_DATA:
      return {previewMode: false, playMode: true};
    default:
      return state;
  }

}
