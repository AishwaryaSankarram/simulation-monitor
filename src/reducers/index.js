import { combineReducers } from 'redux';
import ScenariosReducer from './scenarios'
import CarsReducer from './cars'
import UserReducer from './user'

const rootReducer = combineReducers({
  scenarios: ScenariosReducer,
  cars: CarsReducer,
  user: UserReducer
});

export default rootReducer;
