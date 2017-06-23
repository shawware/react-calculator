import { combineReducers } from 'redux';

import KeyReducer from './reducer_key';
import HighlightReducer from './reducer_highlight';

const rootReducer = combineReducers({
	value:  KeyReducer,
	lastKey: HighlightReducer
});

export default rootReducer;
