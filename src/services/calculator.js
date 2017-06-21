// A simple emulation of a hand-held calculator.

import NumericValue from './number';

/*
 * Define the calculator keys we support.
 * This effectively defines the supported operations and number types.
 */
const KEYS = "0123456789*/+-=C";

class Calculator {
	
	constructor() {
		this.reset();
	}

	reset() {
		this.runningTotal      = null;
		this.currentNumber     = null;
		this.operator          = null;
	}

	currentValue() {
		let value = this.determineValueToDisplay();
		//console.log(`value: ${value}`);
		return value;
	}

	determineValueToDisplay() {
		let value;
		if ((this.runningTotal == null) && (this.currentNumber == null)) {
			value = 0;
		} else if (this.currentNumber != null) {
			value = this.currentNumber.value();
		} else if (this.runningTotal != null) {
			value = this.runningTotal;
		}
		return value;
	}

	acceptKey(key) {
		if (!this.isValidKey(key)) {
			console.log(`invalid key: ${key}`);
			return false;
		}
		let rc;
		if (typeof key === 'number') {
			rc = this.acceptDigit(key);
		} else {
			rc = this.acceptOperator(key);
		}
		return rc;
	}

	acceptDigit(digit) {
		if (this.currentNumber == null) {
			this.currentNumber = new NumericValue();
			// If we're starting again with a new number ...
			if ((this.runningTotal != null) && (this.operator == null)) {
				this.runningTotal = null;
			}
		}
		return this.currentNumber.acceptDigit(digit);
	}

	// TODO: highlight last operator if +-*/
	acceptOperator(op) {
		let rc = true;
		switch (op) {
			case 'C' :
				this.reset();
				break;
			case '=' :
				this.acceptEquals();
				break;
			case '+' :
			case '-' :
			case '*' :
			case '/' :
				this.acceptOperation(op);
				break;
			default :
				rc = false;
				break;
		}
		return rc;
	}

	acceptEquals() {
		if ((this.runningTotal != null) &&
		    (this.operator != null) &&
		    (this.currentNumber != null)) {
			this.updateRunningTotal();
			// TODO: store so we can repeat equals
			this.operator = null;
			this.currentNumber = null;
		}
	}

	acceptOperation(op) {
		if (this.currentNumber == null) {
			if (this.runningTotal == null) {
				this.runningTotal = 0;
			}
		} else {
			if (this.runningTotal == null) {
				this.runningTotal = this.currentNumber.value();
				this.currentNumber = null;
			} else {
				this.updateRunningTotal();
				this.currentNumber = null;
			}
		}
		this.operator = op;
	}

	updateRunningTotal() {
		let delta = this.currentNumber.value();
		switch (this.operator) {
			case '+' :
				this.runningTotal += delta;
				break;
			case '-' :
				this.runningTotal -= delta;
				break;
			case '*' :
				this.runningTotal *= delta;
				break;
			case '/' :
				this.runningTotal /= delta;
				break;
			default :
				// If none, then do nothing.
				console.log(`updateRunningTotal called with invalid operator: ${this.operator}`);
				break;
		}
	}

	isValidKey(key) {
		if (typeof key === 'number') {
			key = key.toString();
		}
		if (typeof key !== 'string') {
			return false;
		}
		return (key.length == 1) && (KEYS.indexOf(key) >= 0);
	}
}

let instance = new Calculator();

export default instance;
