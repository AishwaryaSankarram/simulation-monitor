import Api from '../utils/api.jsx'
import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAIL, RENDER_LOGIN } from './constants.js';


export async function checkCredentials(payload, source) {


  console.log("CHECKING USER CREDENTIALS...")

  let response = await axios({
      method: 'post',
      url: Api.baseUrl + "user/login",
      data: payload,
      validateStatus: (status) => {
        return true; // I'm always returning true, you may want to do it depending on the status received
      },
  });

  if(response.status === 200) {
    localStorage.setItem("loginData",JSON.stringify(response.data));
    localStorage.setItem("pwd",payload.password);
    return {
      type: LOGIN_SUCCESS,
      payload: response,
      pwd: payload.password
    }
  } else {
      if(source === "user") {
        return {
          type: LOGIN_FAIL
        }
    } else if (source === "history") {
        return {
          type: RENDER_LOGIN
        }
    }
  }
}

export function renderLogin() {
  return {
    type: RENDER_LOGIN
  }
}
