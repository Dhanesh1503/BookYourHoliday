/*
*BrowseActions.js
*/

import * as ActionConstants from '../constants/ActionConstants';

export const startLoading = () => {
  return { type : ActionConstants.START_LOADING, value : true };
};

export const stopLoading = () => {
  return { type : ActionConstants.STOP_LOADING, value : false };
};