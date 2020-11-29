import React, { useRef } from 'react';
import { TextureLoader } from 'three';

const Sun = ({ position, size, amountOfSegments }) => {
  const ref = useRef();
  const texture = new TextureLoader().load('textures/sun.jpg');

  return (
    <mesh ref={ref} position={position} receiveShadow castShadow>
      <sphereGeometry attach="geometry" args={[size, amountOfSegments, amountOfSegments]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};

Sun.defaultProps = {
  position: [0, 0, 0],
  size: 10,
  amountOfSegments: 100,
};

export default Sun;
