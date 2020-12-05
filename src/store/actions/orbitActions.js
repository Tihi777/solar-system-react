export const OrbitActionTypes = {
  CHANGE_SPEED: 'CHANGE_SPEED',
};

const changeSpeed = value => ({
  type: OrbitActionTypes.CHANGE_SPEED,
  value,
});

const OrbitActions = {
  changeSpeed,
};

export default OrbitActions;
