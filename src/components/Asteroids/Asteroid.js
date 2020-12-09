import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { useGLTF } from '@react-three/drei/useGLTF';

const Asteroid = ({ speed, factor, scale, ...props }) => {
  const group = useRef();
  const { nodes, materials } = useGLTF('/scene.gltf');

  useFrame((state, delta) => {
    group.current.rotation.y
      -= Math.sin((delta * factor) / 2) * Math.cos((delta * factor) / 2) * 1.5;
  });

  return (
    <group ref={group} dispose={null}>
      <group rotation={[0, 0, 0]} {...props}>
        <group rotation={[0, 0, 0]}>
          <mesh
            material={materials.Material__25}
            geometry={nodes.defaultMaterial.geometry}
            scale={[scale, scale, scale]}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/scene.gltf');

export default Asteroid;
