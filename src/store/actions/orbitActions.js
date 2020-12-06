export const OrbitActionTypes = {
  CHANGE_SPEED: 'CHANGE_SPEED',
  SET_ORBIT: 'SET_ORBIT',
};

const changeSpeed = value => ({
  type: OrbitActionTypes.CHANGE_SPEED,
  value,
});

const setOrbit = () => ({ type: OrbitActionTypes.SET_ORBIT });

const OrbitActions = {
  changeSpeed,
  setOrbit,
};

export default OrbitActions;
