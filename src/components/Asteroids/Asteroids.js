import React from 'react';
import Asteroid from './Asteroid';

const Asteroids = ({ amount, distanceFromSun }) => new Array(amount).fill().map((_, index) => {
  const t = Math.random() * (2 * Math.PI);
  const x = Math.cos(t) * distanceFromSun - 5 + Math.random() * 5;
  const z = 1.3 * Math.sin(t) * distanceFromSun - 5 + Math.random() * 5;
  const y = -5 + Math.random() * 6;
  const random = Math.round(Math.random() * 2);
  const speed = random === 0 ? 0.5 : random === 1 ? 2 : 5;
  const factor = random === 0
    ? 0.005 + Math.random()
    : random === 1
      ? 0.0025 + Math.random()
      : 0.001 + Math.random();
  const scale = 0.5 + Math.random() * 0.7;
  return (
    <Asteroid
      key={index}
      position={[x, y, z]}
      rotation={[0, x > 0 ? Math.PI : 0, 0]}
      speed={speed}
      factor={factor * 0.1}
      scale={scale}
    />
  );
});

export default Asteroids;
