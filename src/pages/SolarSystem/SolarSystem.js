import React, { Suspense } from 'react';
import { Provider, ReactReduxContext } from 'react-redux';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from 'drei';

import PLANETS from '../../constants/planetData';
import MOONS from '../../constants/moonData';

import SkyBox from '../../components/SkyBox/SkyBox';
import Sun from '../../components/Sun/Sun';
import Planet from '../../components/Planet/Planet';
import Moon from '../../components/Moon/Moon';
import Loader from '../../components/Loader/Loader';
import SpeedControl from '../../components/SpeedControl/SpeedControl';
import PlanetCard from '../../components/PlanetCard/PlanetCard';
import LeftPanel from '../../components/LeftPanel/LeftPanel';
import Asteroids from '../../components/Asteroids/Asteroids';

const SolarSystem = () => (
  <ReactReduxContext.Consumer>
    {({ store }) => (
      <>
        <Loader />
        <SpeedControl />
        <PlanetCard />
        <LeftPanel />
        <Canvas camera={{ position: [150, 30, 0], fov: 70 }} colorManagement={false} shadowMap>
          <Suspense fallback={null}>
            <Provider store={store}>
              <ambientLight intensity={0.5} color={0xaaaaaa} />
              <pointLight position={[0, 0, 0]} intensity={2.5} color={0xffdcb4} />
              <Sun />
              {PLANETS.map(planet => (
                <Planet
                  key={planet.name}
                  planetData={planet}
                />
              ))}
              {MOONS.map(moon => (
                <Moon
                  key={moon.name}
                  moonData={moon}
                />
              ))}
              <SkyBox />
              <Asteroids amount={110} distanceFromSun={62} />
              <Asteroids amount={240} distanceFromSun={160} />
              <OrbitControls maxDistance={1000} minDistance={10} />
            </Provider>
          </Suspense>
        </Canvas>
      </>
    )}
  </ReactReduxContext.Consumer>
);

export default SolarSystem;
