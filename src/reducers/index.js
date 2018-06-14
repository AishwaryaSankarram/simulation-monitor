import { combineReducers } from 'redux';
import ScenariosReducer from './scenarios';
import CarsReducer from './cars';
import UserReducer from './user';
import LoginMessageReducer from './login-message';

const rootReducer = combineReducers({
  scenarios: ScenariosReducer,
  cars: CarsReducer,
  user: UserReducer,
  loginMessage: LoginMessageReducer
});

export default rootReducer;
