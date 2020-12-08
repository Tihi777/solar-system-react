export const OrbitActionTypes = {
  CHANGE_SPEED: 'CHANGE_SPEED',
  SET_ORBIT: 'SET_ORBIT',
  SET_ROTATION: 'SET_ROTATION',
  SET_ACTIVE_OBJECT: 'SET_ACTIVE_OBJECT',
  SET_ORBIT_VISIBILITY: 'SET_ORBIT_VISIBILITY',
  SET_NAMES_VISIBILITY: 'SET_NAMES_VISIBILITY',
};

const changeSpeed = value => ({
  type: OrbitActionTypes.CHANGE_SPEED,
  value,
});

const setOrbit = () => ({ type: OrbitActionTypes.SET_ORBIT });

const setRotation = () => ({ type: OrbitActionTypes.SET_ROTATION });

const setActiveObject = value => ({
  type: OrbitActionTypes.SET_ACTIVE_OBJECT,
  value,
});

const setOrbitVisibility = value => ({
  type: OrbitActionTypes.SET_ORBIT_VISIBILITY,
  value,
});

const setNamesVisibility = value => ({
  type: OrbitActionTypes.SET_NAMES_VISIBILITY,
  value,
});

const OrbitActions = {
  changeSpeed,
  setOrbit,
  setRotation,
  setActiveObject,
  setOrbitVisibility,
  setNamesVisibility,
};

export default OrbitActions;
