import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { animated, useSpring } from 'react-spring';
import LeftPanelTypes from '../../constants/LeftPanelTypes';
import Encyclopedia from '../Encyclopedia/Encyclopedia';
import Settings from '../Settings/Settings';

import { ReactComponent as LeftArrowSVG } from '../../static/svg/left-arrow.svg';
import LeftPanelActions from '../../store/actions/leftPanelActions';

import './LeftPanel.scss';

const LeftPanel = () => {
  const { type, ...props } = useSelector(state => state.leftPanel);
  const activeObject = useSelector(state => state.orbitState.activeObject);
  const dispatch = useDispatch();

  const isAnimate = () => (type && activeObject) || (type === LeftPanelTypes.SETTINGS);

  const leftPanelAnimation = useSpring({
    opacity: isAnimate() ? 1 : 0,
    transform: isAnimate() ? 'translateX(0)' : 'translateX(-100%)',
  });

  let content;
  switch (type) {
    case LeftPanelTypes.ENCYCLOPEDIA:
      content = <Encyclopedia {...props} planet={activeObject} />;
      break;
    case LeftPanelTypes.SETTINGS:
      content = <Settings {...props} />;
      break;
    default:
      content = null;
  }

  return (
    <animated.div className="left-panel" style={leftPanelAnimation}>
      <div className="left-panel__container">{content}</div>
      <div
        className="left-panel__close-button"
        role="button"
        tabIndex="0"
        onKeyDown={() => {}}
        onClick={() => dispatch(LeftPanelActions.closeLeftPanel())}
      >
        <LeftArrowSVG />
      </div>
    </animated.div>
  );
};

export default LeftPanel;
