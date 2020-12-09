import mercury from '../static/textures/mercury.jpg';
import venus from '../static/textures/venus.jpg';
import earth from '../static/textures/earth.jpg';
import mars from '../static/textures/mars.jpg';
import jupiter from '../static/textures/jupiter.jpg';
import saturn from '../static/textures/saturn.jpg';
import uranus from '../static/textures/uranus.jpg';
import neptune from '../static/textures/neptune.jpg';
import pluto from '../static/textures/pluto.png';

const PLANETS = [
  {
    name: 'Меркурий',
    orbitRate: 9,
    rotationRate: 0.01,
    distanceFromSun: 18,
    size: 1.5,
    amountOfSegments: 100,
    mapURI: mercury,
  },
  {
    name: 'Венера',
    orbitRate: 5,
    rotationRate: 0.02,
    distanceFromSun: 28,
    size: 2.5,
    amountOfSegments: 100,
    mapURI: venus,
  },
  {
    name: 'Земля',
    orbitRate: 3,
    rotationRate: 0.02,
    distanceFromSun: 36,
    size: 2.9,
    amountOfSegments: 100,
    mapURI: earth,
  },
  {
    name: 'Марс',
    orbitRate: 2.5,
    rotationRate: 0.02,
    distanceFromSun: 50,
    size: 1.75,
    amountOfSegments: 100,
    mapURI: mars,
  },
  {
    name: 'Юпитер',
    orbitRate: 1,
    rotationRate: 0.02,
    distanceFromSun: 85,
    size: 4.5,
    amountOfSegments: 100,
    mapURI: jupiter,
  },
  {
    name: 'Сатурн',
    orbitRate: 0.25,
    rotationRate: 0.02,
    distanceFromSun: 105,
    size: 3.8,
    amountOfSegments: 100,
    mapURI: saturn,
  },
  {
    name: 'Уран',
    orbitRate: 0.125,
    rotationRate: 0.02,
    distanceFromSun: 125,
    size: 2.6,
    amountOfSegments: 100,
    mapURI: uranus,
  },
  {
    name: 'Нептун',
    orbitRate: 0.09,
    rotationRate: 0.02,
    distanceFromSun: 140,
    size: 2.4,
    amountOfSegments: 100,
    mapURI: neptune,
  },
  {
    name: 'Плутон',
    orbitRate: 0.06,
    rotationRate: 0.01,
    distanceFromSun: 152,
    size: 1.3,
    amountOfSegments: 100,
    mapURI: pluto,
  },
];

export default PLANETS;
