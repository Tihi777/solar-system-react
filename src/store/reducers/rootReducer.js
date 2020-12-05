import { combineReducers } from 'redux';
import orbitReducer from './orbitReducer';
import planetReducer from './planetReducer';

const rootReducer = combineReducers({
  orbitState: orbitReducer,
  planets: planetReducer,
});

export default rootReducer;
