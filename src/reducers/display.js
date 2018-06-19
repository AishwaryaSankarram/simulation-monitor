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
          <LoginPage />
          <div className="alert-danger" >{"Incorrect E-mail or Password Provided, please try again."}</div>
        </div>
      );

    case RENDER_LOGIN:
      return (
        <div>
          <LoginPage />
        </div>
      );

    default:
       return state;
 }

}
