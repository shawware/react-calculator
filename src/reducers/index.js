import { combineReducers } from 'redux';

import KeyReducer from './reducer_key';

const rootReducer = combineReducers({
	value:  KeyReducer
});

export default rootReducer;
