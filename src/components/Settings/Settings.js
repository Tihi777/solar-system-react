import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';

import OrbitActions from '../../store/actions/orbitActions';

import './Settings.scss';

const Settings = () => {
  const { showOrbits, runRotation, showPlanetNames } = useSelector(state => state.orbitState);
  const dispatch = useDispatch();

  return (
    <div className="settings">
      <div className="settings__title">
        Настройки
      </div>
      <div className="settings__content">
        <div className="settings__row">
          <div className="settings__setting-name" />
          <div className="settings__setting-actions">
            <div className="settings__action" />
            <div className="settings__action" />
          </div>
        </div>
        <div className="settings__row">
          <div className="settings__setting-name">
            Орбиты
          </div>
          <div className="settings__setting-actions">
            <div className="settings__action">
              <Button
                disabled={!showOrbits}
                onClick={() => dispatch(OrbitActions.setOrbitVisibility(false))}
              >
                Скрыть
              </Button>
            </div>
            <div className="settings__action">
              <Button
                disabled={showOrbits}
                onClick={() => dispatch(OrbitActions.setOrbitVisibility(true))}
              >
                Показать
              </Button>
            </div>
          </div>
        </div>
        <div className="settings__row">
          <div className="settings__setting-name">
            Названия планет
          </div>
          <div className="settings__setting-actions">
            <div className="settings__action">
              <Button
                disabled={!showPlanetNames}
                onClick={() => dispatch(OrbitActions.setNamesVisibility(false))}
              >
                Скрыть
              </Button>
            </div>
            <div className="settings__action">
              <Button
                disabled={showPlanetNames}
                onClick={() => dispatch(OrbitActions.setNamesVisibility(true))}
              >
                Показать
              </Button>
            </div>
          </div>
        </div>
        <div className="settings__row">
          <div className="settings__setting-name">
            Вращение вокруг оси
          </div>
          <div className="settings__setting-actions">
            <div className="settings__action">
              <Button
                disabled={!runRotation}
                onClick={() => dispatch(OrbitActions.setRotation())}
              >
                Запретить
              </Button>
            </div>
            <div className="settings__action">
              <Button
                disabled={runRotation}
                onClick={() => dispatch(OrbitActions.setRotation())}
              >
                Разрешить
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
