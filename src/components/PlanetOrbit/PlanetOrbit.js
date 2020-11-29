import React, { useMemo } from 'react';
import { BufferGeometry, EllipseCurve } from 'three';

const PlanetOrbit = ({ distanceFromSun, size }) => {
  const geometry = useMemo(() => {
    const curve = new EllipseCurve(
      0,
      0,
      distanceFromSun,
      1.2 * distanceFromSun,
      0,
      2 * Math.PI,
      false,
      0,
    );

    const points = curve.getPoints(size);
    return new BufferGeometry().setFromPoints(points);
  }, []);

  return (
    <line geometry={geometry} rotation={[Math.PI / 2, 0, 0]}>
      <meshBasicMaterial attach="material" />
    </line>
  );
};

export default PlanetOrbit;
