import { LeftPanelActionTypes } from '../actions/leftPanelActions';

const defaultState = {
  type: '',
};

function leftPanelReducer(state = defaultState, { type, props }) {
  switch (type) {
    case LeftPanelActionTypes.OPEN_LEFT_PANEL:
      return props;
    case LeftPanelActionTypes.CLOSE_LEFT_PANEL:
      return defaultState;
    default:
      return state;
  }
}

export default leftPanelReducer;
