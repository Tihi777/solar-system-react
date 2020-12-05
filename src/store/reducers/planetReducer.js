import { PlanetActionTypes } from '../actions/planetActions';

function planetReducer(state = [], { type, value }) {
  switch (type) {
    case PlanetActionTypes.ADD_PLANET:
      return [...state, value];
    default:
      return state;
  }
}

export default planetReducer;
