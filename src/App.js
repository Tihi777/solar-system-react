import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import SolarSystem from './pages/SolarSystem/SolarSystem';
import MainPage from './pages/MainPage/MainPage';

import './App.scss';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <MainPage />
      </Route>
      <Route path="/solar-system">
        <SolarSystem />
      </Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
