import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from './types';
export const openNav = () => dispatch => {
  return dispatch({
    type: OPEN_SIDEBAR,
    sidebarWidth: '45%'
  });
};

export const closeNav = () => dispatch => {
  return dispatch({
    type: CLOSE_SIDEBAR,
    sidebarWidth: '0%'
  });
};
