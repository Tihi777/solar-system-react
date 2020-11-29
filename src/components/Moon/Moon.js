import React, { useRef } from 'react';
import { TextureLoader } from 'three';
import { useFrame } from 'react-three-fiber';

const Moon = ({
  moonData: {
    name,
    rotationRate,
    orbitRate,
    distanceFromSun,
    size,
    amountOfSegments,
  },
  orbitDate: {
    runRotation,
    runOrbit,
    value,
  },
  isRotate = true,
  position,
  planet,
}) => {
  const moonRef = useRef();
  const texture = new TextureLoader().load(`textures/${name}.jpg`);
  let moonPositionIndex = 0;

  useFrame(() => {
    if (runRotation && isRotate) {
      moonRef.current.rotation.y += rotationRate;
    }

    moonPositionIndex += 1;
    if (runOrbit) {
      moonRef.current.position.x = Math.cos(
        moonPositionIndex * (orbitRate / 500) * value,
      ) * distanceFromSun + planet.current.position.x;

      moonRef.current.position.z = 1.2 * Math.sin(
        moonPositionIndex * (orbitRate / 500) * value,
      ) * distanceFromSun + planet.current.position.z;
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
