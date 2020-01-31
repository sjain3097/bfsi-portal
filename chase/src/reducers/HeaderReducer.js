import {
  CHANGE_HEADER_COLOR,
  SHOW_HEADER_DROP_DOWN,
  HIDE_HEADER_DROP_DOWN,
  CHANGE_TITLE_MARGIN
} from '../actions/types';

const initialState = {
  headerColor: 'rgba(0, 0, 0, 0.5)',
  headerDropDownHeight: '0%',
  headerDropDownElementHeight: '0%',
  titleMargin: '0%'
};
export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_HEADER_COLOR:
      return { ...state, headerColor: action.headerColor };
    case SHOW_HEADER_DROP_DOWN:
      return {
        ...state,
        headerDropDownHeight: action.headerDropDownHeight,
        headerDropDownElementHeight: action.headerDropDownElementHeight
      };
    case HIDE_HEADER_DROP_DOWN:
      return {
        ...state,
        headerDropDownHeight: action.headerDropDownHeight,
        headerDropDownElementHeight: action.headerDropDownElementHeight
      };
    case CHANGE_TITLE_MARGIN:
      return {
        ...state,
        titleMargin: action.titleMargin
      };
    default:
      return state;
  }
}
