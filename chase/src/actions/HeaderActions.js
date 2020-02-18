import {
  CHANGE_HEADER_COLOR,
  HIDE_HEADER_DROP_DOWN,
  SHOW_HEADER_DROP_DOWN,
  CHANGE_TITLE_MARGIN
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
export const animateTitle = scroll_y => dispatch => {
  // console.log(scroll_y);
  if (scroll_y === 0) {
    return dispatch({
      type: CHANGE_TITLE_MARGIN,
      titleMargin: '0%',
      titleOpacity: '1',
      logoShift: '51px'
    });
  } else if (scroll_y >= 10 && scroll_y < 30) {
    return dispatch({
      type: CHANGE_TITLE_MARGIN,
      titleMargin: '10%',
      titleOpacity: '0.4',
      logoShift: '45px'
    });
  } else if (scroll_y >= 30 && scroll_y < 50) {
    return dispatch({
      type: CHANGE_TITLE_MARGIN,
      titleMargin: '20%',
      titleOpacity: '0.4',
      logoShift: '40px'
    });
  } else if (scroll_y >= 50 && scroll_y < 70) {
    return dispatch({
      type: CHANGE_TITLE_MARGIN,
      titleMargin: '30%',
      titleOpacity: '0.4',
      logoShift: '35px'
    });
  } else if (scroll_y >= 70 && scroll_y < 90) {
    return dispatch({
      type: CHANGE_TITLE_MARGIN,
      titleMargin: '40%',
      titleOpacity: '0.4',
      logoShift: '30px'
    });
  } else if (scroll_y >= 90 && scroll_y < 110) {
    return dispatch({
      type: CHANGE_TITLE_MARGIN,
      titleMargin: '50%',
      titleOpacity: '0.4',
      logoShift: '25px'
    });
  } else if (scroll_y >= 110 && scroll_y < 130) {
    return dispatch({
      type: CHANGE_TITLE_MARGIN,
      titleMargin: '60%',
      titleOpacity: '0.4',
      logoShift: '20px'
    });
  } else if (scroll_y >= 130 && scroll_y < 150) {
    return dispatch({
      type: CHANGE_TITLE_MARGIN,
      titleMargin: '70%',
      titleOpacity: '0.4',
      logoShift: '15px'
    });
  } else if (scroll_y >= 150 && scroll_y < 170) {
    return dispatch({
      type: CHANGE_TITLE_MARGIN,
      titleMargin: '80%',
      titleOpacity: '0.4',
      logoShift: '10px'
    });
  } else if (scroll_y >= 170 && scroll_y < 190) {
    return dispatch({
      type: CHANGE_TITLE_MARGIN,
      titleMargin: '100%',
      titleOpacity: '0.4',
      logoShift: '5px'
    });
  } else {
    return dispatch({
      type: CHANGE_TITLE_MARGIN,
      titleMargin: '100%',
      titleOpacity: '0.4',
      logoShift: '0px'
    });
  }
};
