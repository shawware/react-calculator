// Define the action types.
export const KEY_PRESS = 'KEY_PRESS';

/*
 * Accepts a key and creates the action to process it.
 */
export function keyPress(key) {
	return {
		type: KEY_PRESS,
		key
	};
}
