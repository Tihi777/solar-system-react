import React, { Suspense, useState } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from 'drei';

import PLANETS from '../../constants/planetData';
import MOONS from '../../constants/moonData';

import SkyBox from '../../components/SkyBox/SkyBox';
import Sun from '../../components/Sun/Sun';
import Planet from '../../components/Planet/Planet';
import Moon from '../../components/Moon/Moon';
import Loader from '../../components/Loader/Loader';

const SolarSystem = () => {
  const [orbitState, setOrbitState] = useState({
    runRotation: true,
    runOrbit: true,
    value: 1,
  });
  const [planetsRef, setPlanetsRef] = useState({
    earth: null,
    mars: null,
  });

  return (
    <>
      <Loader />
      <Canvas shadowMap camera={{ position: [120, 30, 0], fov: 70 }} colorManagement>
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} color={0xaaaaaa} />
          <pointLight position={[0, 0, 0]} intensity={2.5} color={0xffdcb4} />
          <Sun />
          {PLANETS.map(planet => (
            <Planet
              key={planet.name}
              planetData={planet}
              position={[planet.distanceFromSun, 0, 0]}
              orbitDate={orbitState}
              onPlanetRefSet={setPlanetsRef}
            />
          ))}
          {MOONS.map(moon => (
            <Moon
              key={moon.name}
              moonData={moon}
              planet={planetsRef[moon.planet]}
              position={[moon.distanceFromSun, 0, 0]}
              orbitDate={orbitState}
            />
          ))}
          <SkyBox />
          <OrbitControls maxDistance={1000} minDistance={10} />
        </Suspense>
      </Canvas>
    </>
  );
};

export default SolarSystem;
