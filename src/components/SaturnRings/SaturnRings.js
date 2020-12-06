import React, { useRef } from 'react';
import { useFrame, useLoader } from 'react-three-fiber';
import { DoubleSide, TextureLoader } from 'three';

import { fragmentShader, vertexShader } from '../../shaders/saturnRingShaders';
import saturnRings from '../../static/textures/saturn-ring.png';

const SaturnRings = ({ innerRadius, outerRadius, thetaSegments, planetRef }) => {
  const saturnRingsTexture = useLoader(TextureLoader, saturnRings);
  const saturnRingsRef = useRef();

  useFrame(() => {
    if (saturnRingsRef) {
      saturnRingsRef.current.position.x = planetRef.current.position.x;
      saturnRingsRef.current.position.z = planetRef.current.position.z;
    }
  });

  return (
    <mesh
      ref={saturnRingsRef}
      rotation={[Math.PI / 2, Math.PI / 8, 0]}
    >
      <ringBufferGeometry attach="geometry" args={[innerRadius, outerRadius, thetaSegments]} />
      <shaderMaterial
        attach="material"
        uniforms={{
          ringTexture: { value: saturnRingsTexture },
          innerRadius: { value: innerRadius },
          outerRadius: { value: outerRadius },
        }}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        side={DoubleSide}
        transparent
      />
    </mesh>
  );
};

export default SaturnRings;
