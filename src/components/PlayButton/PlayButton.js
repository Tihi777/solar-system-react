import React, { useState } from 'react';
import { animated, useTransition } from 'react-spring';

import { ReactComponent as PlayIcon } from '../../static/svg/play.svg';
import { ReactComponent as PauseIcon } from '../../static/svg/pause.svg';

import './PlayButton.scss';

const PlayButton = ({ onClick }) => {
  const [state, setState] = useState(false);
  const transitions = useTransition(state, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const handleClick = () => {
    setState(!state);
    onClick();
  };

  return (
    <div
      className="play-button"
      role="button"
      tabIndex="0"
      onKeyDown={() => {}}
      onClick={handleClick}
    >
      {
        transitions.map(({ item, key, props }) => (item
          ? (
            <animated.div className="play-button__icon" style={props} key={key}>
              <PlayIcon />
            </animated.div>
          )
          : (
            <animated.div className="play-button__icon" style={props} key={key}>
              <PauseIcon />
            </animated.div>
          )))
      }

    </div>
  );
};

export default PlayButton;
