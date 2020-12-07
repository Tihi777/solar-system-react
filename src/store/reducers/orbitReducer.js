import { OrbitActionTypes } from '../actions/orbitActions';

const defaultState = {
  runRotation: true,
  runOrbit: true,
  speedRate: 1,
  activeObject: '',
};

function orbitReducer(state = defaultState, { type, value }) {
  switch (type) {
    case OrbitActionTypes.CHANGE_SPEED:
      return { ...state, speedRate: value };
    case OrbitActionTypes.SET_ORBIT:
      return { ...state, runOrbit: !state.runOrbit };
    case OrbitActionTypes.SET_ACTIVE_OBJECT:
      return { ...state, activeObject: state.activeObject === value ? '' : value };
    default:
      return state;
  }
}

export default orbitReducer;
