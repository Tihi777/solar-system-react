import React from 'react';
import { useTransition, animated } from 'react-spring';
import { useProgress } from 'drei';

import './Loader.scss';

const Loader = () => {
  const { active, progress } = useProgress();
  const transition = useTransition(active, null, {
    from: { opacity: 1 },
    leave: { opacity: 0 },
  });
  const getWidth = () => progress * 3.5;

  return transition.map(({ item, key, props }) => (
    item && (
    <animated.div className="loader-bar" key={key} style={props}>
      <div className="loader-bar__container">
        <animated.div className="loader-bar__slider" style={{ width: getWidth() }}>
          <animated.span className="loader-bar__data">
            {`${progress.toFixed(2)}%`}
          </animated.span>
        </animated.div>
      </div>
    </animated.div>
    )
  ));
};

export default Loader;
