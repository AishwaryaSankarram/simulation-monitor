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
import WarningCountReducer from './warning-count';
import OverlayReducer from './overlay';
import ZoomOptionReducer from './zoom-options';
import ShowRoutesReducer from './show-routes';
import CarMap from "./car-map";
import MessageId from "./message-id";

const rootReducer = combineReducers({
  scenarios: ScenariosReducer,
  cars: CarsReducer,
  user: UserReducer,
  display: DisplayReducer,
  loginMessage: LoginMessageReducer,
  actionButtons: ActionButtonsReducer,
  mapView: MapViewReducer,
  warnings: WarningsReducer,
  warningCount: WarningCountReducer,
  modalIsOpen: HeaderReducer,
  carMap: CarMap,
  zoomOption: ZoomOptionReducer,
  showRoutes: ShowRoutesReducer,
  msgId: MessageId,
  overlay: OverlayReducer
});

export default rootReducer;
