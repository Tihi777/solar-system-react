import React from 'react';
import { a, useTransition } from '@react-spring/web';
import { useProgress } from 'drei';

import './Loader.scss';

const Loader = () => {
  const { active, progress } = useProgress();
  const transition = useTransition(active, {
    from: { opacity: 1, progress: 0 },
    leave: { opacity: 0 },
    update: { progress },
  });
  const getWidth = () => progress * 3.5;

  return transition(
    ({ progress, opacity }, active) => active && (
      <a.div className="loader-bar" style={{ opacity }}>
        <div className="loader-bar__container">
          <a.div className="loader-bar__slider" style={{ width: getWidth() }}>
            <a.span className="loader-bar__data">{progress.to(p => `${p.toFixed(2)}%`)}</a.span>
          </a.div>
        </div>
      </a.div>
    ),
  );
};

export default Loader;
