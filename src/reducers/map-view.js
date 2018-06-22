import { FETCH_CARS } from '../actions/constants'

import { mapViewInitialState } from '../constants';

export default function(state = mapViewInitialState, action) {

  switch(action.type) {
    case FETCH_CARS:
      return {previewMode: true, playMode: false};
    default:
      return state; 
  }

}
