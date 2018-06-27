import { combineReducers } from 'redux';
import ScenariosReducer from './scenarios';
import CarsReducer from './cars';
import UserReducer from './user';
import LoginMessageReducer from './login-message';
import DisplayReducer from './display';
import ActionButtonsReducer from './action-buttons';
import MapViewReducer from './map-view';
import HeaderReducer from "./header";
import WarningsReducer from './warnings';
import OverlayReducer from './overlay'

const rootReducer = combineReducers({
  scenarios: ScenariosReducer,
  cars: CarsReducer,
  user: UserReducer,
  display: DisplayReducer,
  loginMessage: LoginMessageReducer,
  actionButtons: ActionButtonsReducer,
  mapView: MapViewReducer,
  warnings: WarningsReducer,
  modalIsOpen: HeaderReducer,
  overlay: OverlayReducer
});

export default rootReducer;
