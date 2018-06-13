import { combineReducers } from 'redux';
import ScenariosReducer from './scenarios'
import CarsReducer from './cars'

const rootReducer = combineReducers({
  scenarios: ScenariosReducer,
  cars: CarsReducer
});

export default rootReducer;
