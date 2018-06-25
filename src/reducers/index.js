import { combineReducers } from 'redux';
import ScenariosReducer from './scenarios';
import CarsReducer from './cars';
import UserReducer from './user';
import LoginMessageReducer from './login-message';
import DisplayReducer from './display'
import ActionButtonsReducer from './action-buttons'
import MapViewReducer from './map-view'
import WarningsReducer from './warnings'

const rootReducer = combineReducers({
  scenarios: ScenariosReducer,
  cars: CarsReducer,
  user: UserReducer,
  display: DisplayReducer,
  loginMessage: LoginMessageReducer,
  actionButtons: ActionButtonsReducer,
  mapView: MapViewReducer,
  warnings: WarningsReducer
});

export default rootReducer;
