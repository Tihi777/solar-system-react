import React, { useEffect, useRef, useState } from 'react';
import { AdditiveBlending, TextureLoader } from 'three';
import { useLoader } from 'react-three-fiber';
import { useDispatch, useSelector } from 'react-redux';

import sun from '../../static/textures/sun.jpg';
import OrbitActions from '../../store/actions/orbitActions';

import Text from '../Text/Text';

function SunShine() {
  const texture = useLoader(TextureLoader, '/glow.png');
  return (
    <sprite scale={[45, 45, 1]}>
      <spriteMaterial
        attach="material"
        map={texture}
        depthWrite={false}
        blending={AdditiveBlending}
        color="#ed5b0c"
        transparent
      />
    </sprite>
  );
}

const Sun = ({ position, size, amountOfSegments }) => {
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const { activeObject } = useSelector(state => state.orbitState);
  const dispatch = useDispatch();

  const ref = useRef();
  const map = useLoader(TextureLoader, sun);
  const name = 'Солнце';

  useEffect(() => {
    setActive(activeObject === name);
  }, [activeObject]);

  return (
    <>
      <mesh
        ref={ref}
        position={position}
        onClick={() => dispatch(OrbitActions.setActiveObject(name))}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        receiveShadow
        castShadow
      >
        <sphereGeometry attach="geometry" args={[size, amountOfSegments, amountOfSegments]} />
        <meshBasicMaterial map={map} />
        <Text
          size={2}
          height={0.6}
          parent={ref}
          anchorY={size + 0.6}
          anchorX={2}
          opacity={(active || hovered) ? 1 : 0}
        >
          Солнце
        </Text>
      </mesh>
      <SunShine />
    </>
  );
};

Sun.defaultProps = {
  position: [0, 0, 0],
  size: 10,
  amountOfSegments: 100,
};

export default Sun;
