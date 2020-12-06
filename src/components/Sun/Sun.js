import React, { useRef } from 'react';
import { TextureLoader } from 'three';
import { useLoader } from 'react-three-fiber';

import sun from '../../static/textures/sun.jpg';

const Sun = ({ position, size, amountOfSegments }) => {
  const ref = useRef();
  const map = useLoader(TextureLoader, sun);

  return (
    <mesh ref={ref} position={position} receiveShadow castShadow>
      <sphereGeometry attach="geometry" args={[size, amountOfSegments, amountOfSegments]} />
      <meshBasicMaterial map={map} />
    </mesh>
  );
};

Sun.defaultProps = {
  position: [0, 0, 0],
  size: 10,
  amountOfSegments: 100,
};

export default Sun;
