import { combineReducers } from 'redux';
import switchReducer from './switchReducer';

export default combineReducers({
	switchStatus: switchReducer,
})