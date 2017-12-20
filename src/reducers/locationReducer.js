import * as types from '../actions/actionTypes';

export default function locationReducer(state = [], action) {
  switch (action.type) {
    case types.ADD_LOCATION:
      return [...state,
        Object.assign({}, action.data)
      ];
    case types.CLEAR_ALL:
      return [];

    default:
      return state;
  }
}
