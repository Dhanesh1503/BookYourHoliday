import * as ActionConstants from '../constants/ActionConstants';

export const initialState = {
  loading : false,
  
};


//Reducer for Browse related containers
const browseReducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionConstants.START_LOADING:
      return BrowseHelper.updateLoadingState(state, action);

    case ActionConstants.STOP_LOADING:
      return BrowseHelper.updateLoadingState(state, action);
      
    default:
      return state;
  }
};

export default browseReducer;