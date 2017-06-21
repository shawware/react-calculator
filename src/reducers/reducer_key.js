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
			if (Calculator.acceptKey(action.key)) {
				return Calculator.currentValue();
			} else {
				// TODO: handle the error
			}
		} else {
			console.log(`invalid key press: ${action.key}`);
		}
	}
	return state;
}
