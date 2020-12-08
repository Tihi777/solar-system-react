import { combineReducers } from 'redux';
import orbitReducer from './orbitReducer';
import planetReducer from './planetReducer';
import leftPanelReducer from './leftPanelReducer';

const rootReducer = combineReducers({
  orbitState: orbitReducer,
  planets: planetReducer,
  leftPanel: leftPanelReducer,
});

export default rootReducer;
