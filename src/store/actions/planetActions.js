export const PlanetActionTypes = {
  ADD_PLANET: 'ADD_PLANET',
};

const addPlanet = (value, name) => ({
  type: PlanetActionTypes.ADD_PLANET,
  value,
  name,
});

const PlanetActions = {
  addPlanet,
};

export default PlanetActions;
