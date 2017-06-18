import { KEY_PRESS } from '../actions/keyPress';
import Calculator from '../services/calculator';

const initialValue = 0;

/*
 * Respond to actions relating to a key press.
 * For relevant action types, the state will be the previous display value.
 */
export default function(state = initialValue, action) {
	if (action.type == KEY_PRESS) {
		if (Calculator.isValidKey(action.key)) {
			Calculator.increment();
		}
		return Calculator.currentValue();
	}
	return state;
}
