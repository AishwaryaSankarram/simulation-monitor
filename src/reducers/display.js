import React from 'react';
import LoginPage from '../containers/login-page';
import HomePage from '../containers/HomePage';
import { LOGIN_SUCCESS, LOGIN_FAIL, RENDER_LOGIN } from '../actions/constants'

export default function(state = null, action) {

  switch(action.type) {
    case LOGIN_SUCCESS:
      return (
        <div>
          <HomePage />
        </div>
        );

    case LOGIN_FAIL:
      return (
        <div>
          <div className="alert-danger" >{"Incorrect E-mail or Password Provided, please try again."}</div>
          <LoginPage />
        </div>
      );

    case RENDER_LOGIN:
      return (
        <div>
          <LoginPage />
        </div>
      );

    case "PLAY_CLICKED":

      return (
        <div>
          <div className="overlay">
            <div className="overlayText">Simulation is starting up. Please Wait...</div>
          </div>
          <HomePage />
        </div>
      );

    default:
       return state;
 }

}
