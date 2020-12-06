import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { animated, useSpring } from 'react-spring';
import { Slider } from '@material-ui/core';
import OrbitActions from '../../store/actions/orbitActions';
import { ReactComponent as ArrowUpSvg } from '../../static/svg/up-arrow.svg';
import { ReactComponent as CloseSvg } from '../../static/svg/close.svg';
import { ReactComponent as SettingsSvg } from '../../static/svg/settings.svg';
import './SpeedControl.scss';
import PlayButton from '../PlayButton/PlayButton';

const SpeedControl = () => {
  const [speedControlVisible, setSpeedControlVisible] = useState(false);
  const [speed, setSpeed] = useState(0.1);

  const speedControlAnimation = useSpring({
    opacity: speedControlVisible ? 1 : 1,
    transform: speedControlVisible ? 'translateY(0)' : 'translateY(90%)',
  });

  const dispatch = useDispatch();

  const handlePlayButtonClick = () => {
    dispatch(OrbitActions.setOrbit());
  };

  return (
    <div className="speed-control">
      <div
        className="speed-control__arrow"
        role="button"
        tabIndex="0"
        onKeyDown={() => {}}
        onClick={() => {
          setSpeedControlVisible(!speedControlVisible);
        }}
      >
        <ArrowUpSvg className="speed-control__arrow-icon" />
      </div>
      <animated.div className="speed-control__panel" style={speedControlAnimation}>
        <div className="speed-control__action">
          <PlayButton onClick={handlePlayButtonClick} />
        </div>
        <div className="speed-control__action speed-control__action--wide">
          <Slider
            min={0.1}
            max={2}
            step={0.001}
            value={speed}
            onChange={(_, value) => setSpeed(value)}
            onChangeCommitted={() => dispatch(OrbitActions.changeSpeed(speed))}
            classes={{ root: 'speed-control__root' }}
          />
        </div>
        <div className="speed-control__action speed-control__action--settings">
          <SettingsSvg />
        </div>
        <div className="speed-control__action">
          <CloseSvg onClick={() => setSpeedControlVisible(!speedControlVisible)} />
        </div>
      </animated.div>
    </div>
  );
};

export default SpeedControl;
