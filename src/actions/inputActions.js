import * as types from './actionTypes';
/**
 *
 * @param {string} data
 * @returns passing data to the reducer an invocating dispatch
 */
export function updateInput(data){
  return function(dispatch){
    dispatch({type: types.UPDATE_INPUT, data});
  };
}
