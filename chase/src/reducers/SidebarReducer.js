import { CLOSE_SIDEBAR, OPEN_SIDEBAR } from '../actions/types';
const initialState = {
  sidebarWidth: '0%'
};
export default function(state = initialState, action) {
  switch (action.type) {
    case CLOSE_SIDEBAR:
      return action;
    case OPEN_SIDEBAR:
      return action;
    default:
      return state;
  }
}
