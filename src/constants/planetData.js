import mercury from '../static/textures/mercury.jpg';
import venus from '../static/textures/venus.jpg';
import earth from '../static/textures/earth.jpg';
import mars from '../static/textures/mars.jpg';
import jupiter from '../static/textures/jupiter.jpg';
import saturn from '../static/textures/saturn.jpg';
import uranus from '../static/textures/uranus.jpg';
import neptune from '../static/textures/neptune.jpg';

const PLANETS = [
  {
    name: 'mercury',
    orbitRate: 5,
    rotationRate: 0.01,
    distanceFromSun: 13,
    size: 1,
    amountOfSegments: 100,
    mapURI: mercury,
  },
  {
    name: 'venus',
    orbitRate: 4,
    rotationRate: 0.02,
    distanceFromSun: 23,
    size: 2.2,
    amountOfSegments: 100,
    mapURI: venus,
  },
  {
    name: 'earth',
    orbitRate: 3,
    rotationRate: 0.02,
    distanceFromSun: 30,
    size: 2.5,
    amountOfSegments: 100,
    mapURI: earth,
  },
  {
    name: 'mars',
    orbitRate: 2.5,
    rotationRate: 0.02,
    distanceFromSun: 38,
    size: 1.5,
    amountOfSegments: 100,
    mapURI: mars,
  },
  {
    name: 'jupiter',
    orbitRate: 2,
    rotationRate: 0.02,
    distanceFromSun: 60,
    size: 4.2,
    amountOfSegments: 100,
    mapURI: jupiter,
  },
  {
    name: 'saturn',
    orbitRate: 1,
    rotationRate: 0.02,
    distanceFromSun: 75,
    size: 3.7,
    amountOfSegments: 100,
    mapURI: saturn,
  },
  {
    name: 'uranus',
    orbitRate: 0.7,
    rotationRate: 0.02,
    distanceFromSun: 88,
    size: 2.2,
    amountOfSegments: 100,
    mapURI: uranus,
  },
  {
    name: 'neptune',
    orbitRate: 0.5,
    rotationRate: 0.02,
    distanceFromSun: 100,
    size: 2.2,
    amountOfSegments: 100,
    mapURI: neptune,
  },
];

export default PLANETS;
