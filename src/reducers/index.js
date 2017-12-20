import {combineReducers} from 'redux';
import locations from './locationReducer';
import userInput from './inputReducer';

const rootReducer = combineReducers({locations, userInput});

export default rootReducer;
