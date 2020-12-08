import { OrbitActionTypes } from '../actions/orbitActions';

const defaultState = {
  runRotation: true,
  runOrbit: true,
  speedRate: 1,
  activeObject: '',
  showOrbits: true,
  showPlanetNames: false,
};

function orbitReducer(state = defaultState, { type, value }) {
  switch (type) {
    case OrbitActionTypes.CHANGE_SPEED:
      return { ...state, speedRate: value };
    case OrbitActionTypes.SET_ORBIT:
      return { ...state, runOrbit: !state.runOrbit };
    case OrbitActionTypes.SET_ROTATION:
      return { ...state, runRotation: !state.runRotation };
    case OrbitActionTypes.SET_ACTIVE_OBJECT:
      return { ...state, activeObject: state.activeObject === value ? '' : value };
    case OrbitActionTypes.SET_ORBIT_VISIBILITY:
      return { ...state, showOrbits: value };
    case OrbitActionTypes.SET_NAMES_VISIBILITY:
      return { ...state, showPlanetNames: value };
    default:
      return state;
  }
}

export default orbitReducer;
