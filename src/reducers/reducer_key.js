import { KEY_PRESS } from '../actions/keyPress';
import Calculator from '../services/calculator';

/*
 * Define the calculator keys we support.
 */
const KEYS = "0123456789.*/+-=C";

/*
 * Define the initial value to display.
 */
const initialValue = 0;

/*
 * Check if a key press is valid.
 */
function isValidKey(key) {
	if (typeof key === 'number') {
		key = key.toString();
	}
	if (typeof key !== 'string') {
		return false;
	}
	return (key.length == 1) && (KEYS.indexOf(key) >= 0);
}

/*
 * Respond to actions relating to a key press.
 * For relevant action types, the state will be the previous display value.
 */
export default function(state = initialValue, action) {
	if (action.type == KEY_PRESS) {
		if (isValidKey(action.key)) {
			switch (action.key) {
				case 'C' :
					Calculator.clear();
					break;
				case '=' :
					Calculator.equals();
					break;
				case '+' :
					Calculator.plus();
					break;
				case '-' :
					Calculator.minus();
					break;
				case '*' :
					Calculator.times();
					break;
				case '/' :
					Calculator.divide();
					break;
				case '.' :
					Calculator.dot();
					break;
				default :
					Calculator.digit(action.key);
					break;
			}
			return Calculator.currentValue();
		} else {
			console.log(`invalid key press: ${action.key}`);
		}
	}
	return state;
}
