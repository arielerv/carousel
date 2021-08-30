import * as actionTypes from './types';
import initialState from './initialState';

export default function discs(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_DISCS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: initialState.error,
        discs: initialState.discs,
      };
    case actionTypes.GET_DISCS_SUCCESS:
      return {...state, isLoading: initialState.isLoading, discs: action.discs};
    case actionTypes.GET_DISCS_ERROR:
      return {...state, isLoading: initialState.isLoading, error: action.error};
    case actionTypes.SET_SELECTED_DISC:
      return {...state, selectedDisc: action.selectedDisc};
    default:
      return state;
  }
}
