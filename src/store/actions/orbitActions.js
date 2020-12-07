export const OrbitActionTypes = {
  CHANGE_SPEED: 'CHANGE_SPEED',
  SET_ORBIT: 'SET_ORBIT',
  SET_ACTIVE_OBJECT: 'SET_ACTIVE_OBJECT',
};

const changeSpeed = value => ({
  type: OrbitActionTypes.CHANGE_SPEED,
  value,
});

const setOrbit = () => ({ type: OrbitActionTypes.SET_ORBIT });

const setActiveObject = value => ({
  type: OrbitActionTypes.SET_ACTIVE_OBJECT,
  value,
});

const OrbitActions = {
  changeSpeed,
  setOrbit,
  setActiveObject,
};

export default OrbitActions;
