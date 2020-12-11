import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useFrame, useLoader } from 'react-three-fiber';
import { TextureLoader } from 'three';

let moonPositionIndex = 0;

const Moon = ({
  moonData: {
    planetName,
    rotationRate,
    orbitRate,
    distanceFromSun,
    size,
    amountOfSegments,
    mapURI,
  },
}) => {
  let moonRef = useRef();
  const { runRotation, runOrbit, speedRate } = useSelector(state => state.orbitState);
  const planets = useSelector(state => state.planets);
  const map = useLoader(TextureLoader, mapURI);
  const planetRef = planets[planetName];

  useFrame(() => {
    if (runRotation) {
      moonRef.current.rotation.y += rotationRate;
    }

    if (runOrbit) {
      moonRef.current.position.x = Math.cos(
        (moonPositionIndex += 1) * (orbitRate / 1000) * speedRate,
      ) * distanceFromSun + planetRef?.current.position.x;

      moonRef.current.position.z = 1.2 * Math.sin(
        moonPositionIndex * (orbitRate / 1000) * speedRate,
      ) * distanceFromSun + planetRef?.current.position.z;
    }
  });

  return (
    <mesh ref={moonRef} receiveShadow castShadow>
      <sphereGeometry attach="geometry" args={[size, amountOfSegments, amountOfSegments]} />
      <meshPhongMaterial attach="material" map={map} />
    </mesh>
  );
};

export default Moon;
