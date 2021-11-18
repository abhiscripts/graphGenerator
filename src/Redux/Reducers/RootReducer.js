import {combineReducers} from 'redux';
import {input_reducer} from './InputReducer'
const RootReducer = combineReducers({"inputData" : input_reducer});
export default RootReducer;