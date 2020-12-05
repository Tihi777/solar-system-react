import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { TextureLoader } from 'three';
import { useFrame } from 'react-three-fiber';

const Moon = ({
  moonData: {
    name,
    planetIndex,
    rotationRate,
    orbitRate,
    distanceFromSun,
    size,
    amountOfSegments,
  },
  position,
}) => {
  const { runRotation, runOrbit, speedRate } = useSelector(state => state.orbitState);
  const planets = useSelector(state => state.planets);

  const moonRef = useRef();
  const planetRef = planets[planetIndex];

  const texture = new TextureLoader().load(`textures/${name}.jpg`);
  let moonPositionIndex = 0;

  useFrame(() => {
    if (runRotation) {
      moonRef.current.rotation.y += rotationRate;
    }

    if (runOrbit) {
      moonRef.current.position.x = Math.cos(
        (moonPositionIndex += 1) * (orbitRate / 500) * speedRate,
      ) * distanceFromSun + planetRef.current.position.x;

      moonRef.current.position.z = 1.2 * Math.sin(
        moonPositionIndex * (orbitRate / 500) * speedRate,
      ) * distanceFromSun + planetRef.current.position.z;
    }
  });

  return (
    <mesh ref={moonRef} position={position} receiveShadow castShadow>
      <sphereGeometry attach="geometry" args={[size, amountOfSegments, amountOfSegments]} />
      <meshPhongMaterial map={texture} />
    </mesh>
  );
};

export default Moon;
