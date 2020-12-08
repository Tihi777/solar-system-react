export const LeftPanelActionTypes = {
  OPEN_LEFT_PANEL: 'OPEN_LEFT_PANEL',
  CLOSE_LEFT_PANEL: 'CLOSE_LEFT_PANEL',
};

const openLeftPanel = props => ({
  type: LeftPanelActionTypes.OPEN_LEFT_PANEL,
  props,
});

const closeLeftPanel = () => ({
  type: LeftPanelActionTypes.CLOSE_LEFT_PANEL,
});

const LeftPanelActions = {
  openLeftPanel,
  closeLeftPanel,
};

export default LeftPanelActions;
