import React, { useRef } from 'react';
import { TextureLoader } from 'three';
import { useFrame, useLoader } from 'react-three-fiber';

import earthClouds from '../../static/textures/earth-clouds.jpg';

const EarthClouds = ({ size, amountOfSegments, rotationRate }) => {
  const alphaMap = useLoader(TextureLoader, earthClouds);
  const cloudsRef = useRef();

  useFrame(() => {
    cloudsRef.current.rotation.y += rotationRate + 0.008;
  });

  return (
    <mesh ref={cloudsRef}>
      <sphereGeometry
        attach="geometry"
        args={[size + 0.008, amountOfSegments, amountOfSegments]}
      />
      <meshPhongMaterial
        alphaMap={alphaMap}
        transparent
      />
    </mesh>
  );
};

export default EarthClouds;
