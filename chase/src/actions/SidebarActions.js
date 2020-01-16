import ActionTypes from 'ActionTypes';

export const openNav = sidebarProps => dispatch => {
  dispatch({
    type: ActionTypes.SHOW_SIDEBAR,
    sidebarProps
  });
};
