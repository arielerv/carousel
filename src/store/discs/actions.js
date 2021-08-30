import * as types from './types';

export const getDiscsRequest = () => ({type: types.GET_DISCS_REQUEST});
export const getDiscsSuccess = discs => ({
  type: types.GET_DISCS_SUCCESS,
  discs,
});
export const getDiscsError = () => ({type: types.GET_DISCS_ERROR});

export const setSelectedDisc = selectedDisc => ({
  type: types.SET_SELECTED_DISC,
  selectedDisc,
});
