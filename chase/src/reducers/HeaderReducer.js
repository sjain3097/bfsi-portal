import {
  CHANGE_HEADER_COLOR,
  SHOW_HEADER_DROP_DOWN,
  HIDE_HEADER_DROP_DOWN
} from '../actions/types';

const initialState = {
  headerColor: 'rgba(0, 0, 0, 0.5)',
  headerDropDown: 'd_block_drop_down'
};
export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_HEADER_COLOR:
      return { ...state, headerColor: action.headerColor };
    case SHOW_HEADER_DROP_DOWN:
      return { ...state, headerDropDown: action.headerDropDown };
    case HIDE_HEADER_DROP_DOWN:
      return { ...state, headerDropDown: action.headerDropDown };
    default:
      return state;
  }
}
