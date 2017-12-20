import * as types from './actionTypes';
import axios from 'axios';
/**
 *
 * @param {object} locationName
 * @returns passing data to the reducer an invocating dispatch
 */
export function webScraper(locationName) {
  return function (dispatch) {
    return axios({
      url: `http://localhost:3000/scrape/${locationName}`,
      timeout: 20000,
      method: 'get',
      responseType: 'json'
    }).then(response => {
      if(response.data !== 'location not found'){
        dispatch({
          type: types.ADD_LOCATION,
          data: response.data
        });
      }
      else{
        console.error('ERROR:'+response.data);
      }

    }).catch(error => {
      throw (error);
    });
  };
}

//Currently feature disabled.
// export function clearAll(){
//   return function(dispatch){
//     dispatch({type:types.CLEAR_ALL})
//   };
// }
