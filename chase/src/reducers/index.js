import { combineReducers } from 'redux';
import SidebarReducer from './SidebarReducer';
import HeaderReducer from './HeaderReducer';
export default combineReducers({
  sidebar: SidebarReducer,
  header: HeaderReducer
});
