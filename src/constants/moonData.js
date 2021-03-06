import moon from '../static/textures/moon.jpg';
import phobos from '../static/textures/phobos.jpg';
import deimos from '../static/textures/deimos.jpg';

const MOONS = [
  {
    name: 'moon',
    planetName: 'Земля',
    orbitRate: 9,
    rotationRate: 0.1,
    distanceFromSun: 4,
    size: 0.7,
    amountOfSegments: 50,
    mapURI: moon,
  },
  {
    name: 'phobos',
    planetName: 'Марс',
    orbitRate: 10,
    rotationRate: 0.1,
    distanceFromSun: 2,
    size: 0.25,
    amountOfSegments: 50,
    mapURI: phobos,
  },
  {
    name: 'deimos',
    planetName: 'Марс',
    orbitRate: 8,
    rotationRate: 0.1,
    distanceFromSun: 2.8,
    size: 0.35,
    amountOfSegments: 50,
    mapURI: deimos,
  },
];

export default MOONS;
