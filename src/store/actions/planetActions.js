export const PlanetActionTypes = {
  ADD_PLANET: 'ADD_PLANET',
};

const addPlanet = value => ({
  type: PlanetActionTypes.ADD_PLANET,
  value,
});

const PlanetActions = {
  addPlanet,
};

export default PlanetActions;
