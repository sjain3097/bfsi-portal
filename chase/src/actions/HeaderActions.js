import {
  CHANGE_HEADER_COLOR,
  HIDE_HEADER_DROP_DOWN,
  SHOW_HEADER_DROP_DOWN
} from './types';

export const changeHeaderBlue = () => dispatch => {
  return dispatch({
    type: CHANGE_HEADER_COLOR,
    headerColor: 'rgba(8,70,168,0.9)'
  });
};

export const changeHeaderBlack = () => dispatch => {
  return dispatch({
    type: CHANGE_HEADER_COLOR,
    headerColor: 'rgba(0, 0, 0, 0.5)'
  });
};

export const hideHeaderDropDown = () => dispatch => {
  return dispatch({
    type: HIDE_HEADER_DROP_DOWN,
    // headerDropDown: 'd_block_drop_down',
    headerDropDownHeight: '0%',
    headerDropDownElementHeight: '0%'
  });
};
export const showHeaderDropDown = () => dispatch => {
  return dispatch({
    type: SHOW_HEADER_DROP_DOWN,
    // headerDropDown: ''
    headerDropDownHeight: '22%',
    headerDropDownElementHeight: '100%'
    // headerDropDownHeight: '100%'
  });
};
