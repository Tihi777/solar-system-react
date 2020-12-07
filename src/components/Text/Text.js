import React, { useMemo, useRef } from 'react';
import { useFrame, useLoader } from 'react-three-fiber';
import { FontLoader } from 'three';

const Text = ({
  children,
  anchorX = 0,
  anchorY = 0,
  size = 1,
  height,
  curveSegments = 20,
  color = '#ffffff',
  opacity,
  parent,
}) => {
  const textRef = useRef();
  const font = useLoader(FontLoader, './roboto.json');
  const config = useMemo(
    () => ({
      font,
      size,
      height,
      curveSegments,
    }),
    [font],
  );

  useFrame(({ camera }) => {
    textRef.current.rotation.y = Math.atan2(
      (camera.position.x - textRef.current.position.x),
      (camera.position.z - textRef.current.position.z),
    );

    textRef.current.position.x = parent.current.position.x - anchorX;
    textRef.current.position.z = parent.current.position.z;
  });

  return (
    <mesh ref={textRef} position={[0, parent.current.position.y + anchorY, 0]}>
      <textGeometry args={[children, config]} />
      <meshPhongMaterial
        attach="material"
        color={color}
        transparent
        opacity={opacity}
      />
    </mesh>
  );
};

export default Text;
