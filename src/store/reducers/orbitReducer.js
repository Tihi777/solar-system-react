import { OrbitActionTypes } from '../actions/orbitActions';

const defaultState = {
  runRotation: true,
  runOrbit: true,
  speedRate: 1,
};

function orbitReducer(state = defaultState, { type, value }) {
  switch (type) {
    case OrbitActionTypes.CHANGE_SPEED:
      return { ...state, speedRate: value };
    default:
      return state;
  }
}

export default orbitReducer;
