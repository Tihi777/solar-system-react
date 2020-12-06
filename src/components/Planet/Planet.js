import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextureLoader } from 'three';
import { useFrame, useLoader } from 'react-three-fiber';

import PlanetOrbit from '../PlanetOrbit/PlanetOrbit';
import EarthClouds from '../EarthClouds/EarthClouds';
import SaturnRings from '../SaturnRings/SaturnRings';

import PlanetActions from '../../store/actions/planetActions';

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
  const planetRef = useRef();
  const dispatch = useDispatch();
  const { runRotation, runOrbit, speedRate } = useSelector(state => state.orbitState);
  const map = useLoader(TextureLoader, mapURI);

  useEffect(() => {
    dispatch(PlanetActions.addPlanet(planetRef));
  }, []);

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
      <mesh ref={planetRef} receiveShadow castShadow>
        <sphereGeometry attach="geometry" args={[size, amountOfSegments, amountOfSegments]} />
        <meshPhongMaterial
          map={map}
        />
        {name === 'earth' && (
        <EarthClouds
          size={size}
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
      <PlanetOrbit distanceFromSun={distanceFromSun} size={100} />
    </>
  );
};

export default Planet;
