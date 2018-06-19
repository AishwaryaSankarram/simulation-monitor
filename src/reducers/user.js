import { LOGIN_SUCCESS, LOGIN_FAIL, RENDER_LOGIN } from '../actions/constants'

export default function(state = null, action) {

  switch(action.type) {
    case LOGIN_SUCCESS:
      return action.payload.data;
    case LOGIN_FAIL:
      console.log("LOGIN FAILED");
      return null;
    case RENDER_LOGIN:
      return null;
    default:
      return state;  
  }

}
