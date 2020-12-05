import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DoubleSide, TextureLoader } from 'three';
import { useFrame } from 'react-three-fiber';

import { fragmentShader, vertexShader } from '../../shaders/saturnRingShaders';
import PlanetActions from '../../store/actions/planetActions';

import PlanetOrbit from '../PlanetOrbit/PlanetOrbit';

const Planet = ({
  planetData: {
    name,
    rotationRate,
    orbitRate,
    distanceFromSun,
    size,
    amountOfSegments,
  },
  position,
}) => {
  const planetRef = useRef();
  const dispatch = useDispatch();
  const { runRotation, runOrbit, speedRate } = useSelector(state => state.orbitState);
  const texture = new TextureLoader().load(`textures/${name}.jpg`);
  let planetPositionIndex = 0;
  let normalMap;
  let specularMap;
  let cloudsRef;
  let saturnRingsRef;

  if (name === 'earth') {
    normalMap = new TextureLoader().load('textures/earth-normal-map.jpg');
    specularMap = new TextureLoader().load('textures/earth-specular-map.tif');
  }

  useEffect(() => {
    dispatch(PlanetActions.addPlanet(planetRef));
  }, []);

  useFrame(() => {
    if (runRotation) {
      planetRef.current.rotation.y += rotationRate;
      if (cloudsRef) cloudsRef.current.rotation.y += rotationRate + 0.008;
    }

    if (runOrbit) {
      planetRef.current.position.x = Math.cos(
        (planetPositionIndex += 1) * (orbitRate / 500) * speedRate,
      ) * distanceFromSun;

      planetRef.current.position.z = 1.2 * Math.sin(
        planetPositionIndex * (orbitRate / 500) * speedRate,
      ) * distanceFromSun;

      if (saturnRingsRef) {
        saturnRingsRef.current.position.x = planetRef.current.position.x;
        saturnRingsRef.current.position.z = planetRef.current.position.z;
      }
    }
  });

  const getEarthClouds = () => {
    const cloudTexture = new TextureLoader().load('textures/earth-clouds.jpg');
    cloudsRef = useRef();

    return (
      <mesh ref={cloudsRef}>
        <sphereGeometry attach="geometry" args={[size + 0.008, amountOfSegments, amountOfSegments]} />
        <meshPhongMaterial
          alphaMap={cloudTexture}
          transparent
        />
      </mesh>
    );
  };

  const getSaturnRings = (innerRadius, outerRadius, thetaSegments = 50) => {
    const saturnRingsTexture = new TextureLoader().load('textures/saturn-ring.png');
    saturnRingsRef = useRef();

    return (
      <mesh
        ref={saturnRingsRef}
        position={position}
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

  return (
    <>
      <mesh ref={planetRef} position={position} receiveShadow castShadow>
        <sphereGeometry attach="geometry" args={[size, amountOfSegments, amountOfSegments]} />
        <meshPhongMaterial
          map={texture}
          bumpMap={normalMap}
          specularMap={specularMap}
        />
        {name === 'earth' && getEarthClouds()}
      </mesh>
      { name === 'saturn' && getSaturnRings(3.85, 7)}
      <PlanetOrbit distanceFromSun={distanceFromSun} size={100} />
    </>
  );
};

export default Planet;
