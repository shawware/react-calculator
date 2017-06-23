import { KEY_PRESS } from '../actions/keyPress';

/*
 * Define the initial key that that was pressed.
 */
const initialKey = null;

/*
 * Respond to actions relating to a key press.
 */
export default function(state = initialKey, action) {
	if (action.type == KEY_PRESS) {
		return action.key;
	}
	return state;
}
