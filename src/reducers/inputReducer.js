import * as types from '../actions/actionTypes';

export default function inputReducer(state = '', action) {
  switch (action.type) {
    case types.UPDATE_INPUT:
      return action.data;

    default:
      return state;
  }
}
