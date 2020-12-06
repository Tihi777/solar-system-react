import moon from '../static/textures/moon.jpg';
import phobos from '../static/textures/phobos.jpg';
import deimos from '../static/textures/deimos.jpg';

const MOONS = [
  {
    name: 'moon',
    planetIndex: 2,
    orbitRate: 10,
    rotationRate: 0.02,
    distanceFromSun: 4,
    size: 0.5,
    amountOfSegments: 50,
    mapURI: moon,
  },
  {
    name: 'phobos',
    planetIndex: 3,
    orbitRate: 10,
    rotationRate: 0.02,
    distanceFromSun: 2,
    size: 0.2,
    amountOfSegments: 50,
    mapURI: phobos,
  },
  {
    name: 'deimos',
    planetIndex: 3,
    orbitRate: 10,
    rotationRate: 0.02,
    distanceFromSun: 2.8,
    size: 0.3,
    amountOfSegments: 50,
    mapURI: deimos,
  },
];

export default MOONS;
