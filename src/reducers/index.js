import { combineReducers } from 'redux';
import browseReducer from './BrowseReducer';

const rootReducer = combineReducers({
  browseReducer,
});

export default rootReducer;
