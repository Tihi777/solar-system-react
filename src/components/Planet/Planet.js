import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextureLoader } from 'three';
import { useFrame, useLoader } from 'react-three-fiber';

import PlanetOrbit from '../PlanetOrbit/PlanetOrbit';
import EarthClouds from '../EarthClouds/EarthClouds';
import SaturnRings from '../SaturnRings/SaturnRings';

import PlanetActions from '../../store/actions/planetActions';
import Text from '../Text/Text';
import OrbitActions from '../../store/actions/orbitActions';

let planetPositionIndex = 0;

const Planet = ({
  planetData: {
    name,
    rotationRate,
    orbitRate,
    distanceFromSun,
    size,
    amountOfSegments,
    mapURI,
  },
}) => {
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const { runRotation, runOrbit, speedRate, activeObject } = useSelector(state => state.orbitState);

  const planetRef = useRef();
  const dispatch = useDispatch();
  const map = useLoader(TextureLoader, mapURI);

  useEffect(() => {
    dispatch(PlanetActions.addPlanet(planetRef));
  }, []);

  useEffect(() => {
    setActive(activeObject === name);
  }, [activeObject]);

  useFrame(() => {
    if (runRotation) {
      planetRef.current.rotation.y += rotationRate;
    }

    if (runOrbit) {
      planetRef.current.position.x = Math.cos(
        (planetPositionIndex += 1) * (orbitRate / 1000) * speedRate,
      ) * distanceFromSun;

      planetRef.current.position.z = 1.2 * Math.sin(
        planetPositionIndex * (orbitRate / 1000) * speedRate,
      ) * distanceFromSun;
    }
  });

  return (
    <>
      <mesh
        ref={planetRef}
        onClick={() => dispatch(OrbitActions.setActiveObject(name))}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        receiveShadow
        castShadow
      >
        <sphereGeometry attach="geometry" args={[size, amountOfSegments, amountOfSegments]} />
        <meshPhongMaterial
          map={map}
        />
        {name === 'earth' && (
        <EarthClouds
          size={size}
          onClick={() => dispatch(OrbitActions.setActiveObject(name))}
          amountOfSegments={amountOfSegments}
          rotationRate={rotationRate}
        />
        )}
      </mesh>
      { name === 'saturn' && (
      <SaturnRings
        innerRadius={3.85}
        outerRadius={10}
        thetaSegments={50}
        planetRef={planetRef}
      />
      )}
      <Text
        size={0.7}
        height={0.25}
        parent={planetRef}
        anchorY={size + 0.5}
        anchorX={name.length / 5}
        opacity={(active || hovered) ? 1 : 0}
      >
        {name}
      </Text>
      <PlanetOrbit distanceFromSun={distanceFromSun} size={100} color={active ? '#5c3d8c' : '#ffffff'} />
    </>
  );
};

export default Planet;
