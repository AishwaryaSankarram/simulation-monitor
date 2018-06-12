import { combineReducers } from 'redux';
import ScenariosReducer from './reducer-scenarios'
import SelectedScenarioReducer from './selected-scenario'

const rootReducer = combineReducers({
  scenarios: ScenariosReducer,
  selectedScenario: SelectedScenarioReducer
});

export default rootReducer;
