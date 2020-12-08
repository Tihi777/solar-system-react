import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { animated, useSpring } from 'react-spring';
import { Slider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import OrbitActions from '../../store/actions/orbitActions';
import LeftPanelActions from '../../store/actions/leftPanelActions';
import LeftPanelTypes from '../../constants/LeftPanelTypes';

import { ReactComponent as ArrowUpSvg } from '../../static/svg/up-arrow.svg';
import { ReactComponent as CloseSvg } from '../../static/svg/close.svg';
import { ReactComponent as SettingsSvg } from '../../static/svg/settings.svg';

import PlayButton from '../PlayButton/PlayButton';

import './SpeedControl.scss';

const useStyles = makeStyles({
  root: {
    color: '#bf3252',
  },
  track: {
    color: '#212121',
  },
  rail: {
    color: '#272727',
  },
});

const SpeedControl = () => {
  const [speedControlVisible, setSpeedControlVisible] = useState(false);
  const [speed, setSpeed] = useState(0.1);

  const speedControlAnimation = useSpring({
    opacity: speedControlVisible ? 1 : 1,
    transform: speedControlVisible ? 'translateY(0)' : 'translateY(90%)',
  });

  const dispatch = useDispatch();
  const classes = useStyles();

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
        <div className="speed-control__action speed-control__action--pink">
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
            className={classes.root}
          />
        </div>
        <div className="speed-control__action speed-control__action--settings">
          <SettingsSvg onClick={
            () => dispatch(LeftPanelActions.openLeftPanel({ type: LeftPanelTypes.SETTINGS }))
          }
          />
        </div>
        <div className="speed-control__action">
          <CloseSvg onClick={() => setSpeedControlVisible(!speedControlVisible)} />
        </div>
      </animated.div>
    </div>
  );
};

export default SpeedControl;
