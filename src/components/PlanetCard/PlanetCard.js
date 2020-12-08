import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { animated, useSpring } from 'react-spring';

import LeftPanelActions from '../../store/actions/leftPanelActions';
import LeftPanelTypes from '../../constants/LeftPanelTypes';

import Sun from '../../static/images/sun.png';
import Mercury from '../../static/images/mercury.png';
import Venus from '../../static/images/venus.png';
import Earth from '../../static/images/earth.png';
import Mars from '../../static/images/mars.png';
import Jupiter from '../../static/images/jupiter.png';
import Saturn from '../../static/images/saturn.png';
import Uranus from '../../static/images/uranus.png';
import Neptune from '../../static/images/neptune.png';

import './PlanetCard.scss';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${-y}deg) scale(${s})`;

const Images = {
  Солнце: Sun,
  Меркурий: Mercury,
  Венера: Venus,
  Земля: Earth,
  Марс: Mars,
  Юпитер: Jupiter,
  Сатурн: Saturn,
  Уран: Uranus,
  Нептун: Neptune,
};

const PlanetCard = () => {
  const [currentActiveObject, setCurrentActiveObject] = useState();
  const activeObject = useSelector(state => state.orbitState.activeObject);
  const dispatch = useDispatch();

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 },
  }));

  const planetCardAnimation = useSpring({
    opacity: activeObject ? 1 : 0,
    transform: activeObject ? 'translateX(0)' : 'translateX(100%)',
  });

  useEffect(() => {
    if (!activeObject) return;
    setCurrentActiveObject(activeObject);
  }, [activeObject]);

  return (
    <animated.div
      className="planet-card"
      style={{ ...planetCardAnimation, transform: props.xys.interpolate(trans) }}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      onClick={() => dispatch(
        LeftPanelActions.openLeftPanel({ type: LeftPanelTypes.ENCYCLOPEDIA }),
      )}
    >
      <div className="planet-card__container">
        <div className="planet-card__planet">
          <img
            src={Images[currentActiveObject]}
            alt="planet"
            className={`planet-card__image planet-card__image--${activeObject === 'Сатурн' && 'saturn'}`}
          />
        </div>
        <div>
          <div className="planet-card__text">{currentActiveObject}</div>
          <div className="planet-card__text">Исследовать</div>
        </div>
      </div>
    </animated.div>
  );
};

export default PlanetCard;
