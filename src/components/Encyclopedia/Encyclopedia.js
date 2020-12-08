import React from 'react';

import PLANET_INFO from '../../constants/planetInfo';

import './Encyclopedia.scss';

const Encyclopedia = ({ planet }) => {
  const planetInfo = PLANET_INFO[planet] || {};

  return (
    <div className="encyclopedia">
      <div className="encyclopedia__header">
        <div className="encyclopedia__object-name">
          {planet}
        </div>
        <div className="encyclopedia__object-type">
          {planetInfo.type}
        </div>
      </div>
      <div className="encyclopedia__content">
        <div className="encyclopedia__title">
          Энциклопедия
        </div>
        <div className="encyclopedia__data">
          <div className="encyclopedia__row">
            <div className="encyclopedia__cell">Экваториальный диаметр</div>
            <div className="encyclopedia__cell encyclopedia__cell--black">{planetInfo.diameter}</div>
          </div>
          <div className="encyclopedia__row">
            <div className="encyclopedia__cell">Масса</div>
            <div className="encyclopedia__cell encyclopedia__cell--black">
              {`${planetInfo.mass?.base} x 10`}
              <span className="encyclopedia__exponent">{planetInfo.mass?.exponent}</span>
              {' кг'}
            </div>
          </div>
          <div className="encyclopedia__row">
            <div className="encyclopedia__cell">Растояние от солнца</div>
            <div className="encyclopedia__cell encyclopedia__cell--black">{planetInfo.distanceFromSun}</div>
          </div>
          <div className="encyclopedia__row">
            <div className="encyclopedia__cell">Период вращения</div>
            <div className="encyclopedia__cell encyclopedia__cell--black">{planetInfo.rotationPeriod}</div>
          </div>
          <div className="encyclopedia__row">
            <div className="encyclopedia__cell">Период вращения вокруг солнца</div>
            <div className="encyclopedia__cell encyclopedia__cell--black">{planetInfo.rotationPeriodAroundSun}</div>
          </div>
          <div className="encyclopedia__row">
            <div className="encyclopedia__cell">Поверхностная гравитация</div>
            <div className="encyclopedia__cell encyclopedia__cell--black">
              {`${planetInfo.gravity} м/с`}
              <span className="encyclopedia__exponent">2</span>
            </div>
          </div>
          <div className="encyclopedia__row">
            <div className="encyclopedia__cell">Поверхностная температура</div>
            <div className="encyclopedia__cell encyclopedia__cell--black">
              {`${planetInfo.temperature}`}
              &#8451;
            </div>
          </div>
        </div>
        <div className="encyclopedia__info">
          {planetInfo.description}
        </div>
      </div>
    </div>
  );
};

export default Encyclopedia;
