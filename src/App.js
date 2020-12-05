import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import SolarSystem from './pages/SolarSystem/SolarSystem';
import MainPage from './pages/MainPage/MainPage';

import store from './store/store';

import './App.scss';

const App = () => (
  <Provider store={store}>
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
  </Provider>
);

export default App;
