import { PlanetActionTypes } from '../actions/planetActions';

function planetReducer(state = {}, { type, value, name }) {
  switch (type) {
    case PlanetActionTypes.ADD_PLANET:
      return { ...state, [name]: value };
    default:
      return state;
  }
}

export default planetReducer;
