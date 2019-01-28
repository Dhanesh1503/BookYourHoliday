/*Helper.js
*Browse Helper uses functions to update browse state of the application
*/

export const updateLoadingState = (state, action) => {
  let clonedState = _.cloneDeep(state);

  clonedState.loading = action.value;

  return clonedState;
};