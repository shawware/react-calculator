// A simple emulation of a hand-held calculator.

import NumericValue from './number';

// Enumerate the operations
const PLUS   = 1;
const MINUS  = 2;
const TIMES  = 3;
const DIVIDE = 4;

class Calculator {
	
	constructor() {
		this.clear();
	}

	clear() {
		this.runningTotal    = null;
		this.currentNumber   = null;
		this.operator        = null;
		this.storedOperation = null;
	}

	currentValue() {
		return this.determineValueToDisplay();
	}

	determineValueToDisplay() {
		let value;
		if ((this.runningTotal == null) && (this.currentNumber == null)) {
			value = 0;
		} else if (this.currentNumber != null) {
			value = this.currentNumber.displayValue();
		} else if (this.runningTotal != null) {
			value = this.runningTotal;
		}
		return value;
	}

	digit(digit) {
		this.checkCurrentNumber();
		this.currentNumber.acceptDigit(digit);
		this.storedOperation = null;
	}

	dot() {
		this.checkCurrentNumber();
		this.currentNumber.acceptDecimalPoint();
		this.storedOperation = null;
	}

	checkCurrentNumber() {
		if (this.currentNumber == null) {
			this.currentNumber = new NumericValue();
			// If we're starting again with a new number ...
			if ((this.runningTotal != null) && (this.operator == null)) {
				this.runningTotal = null;
			}
		}
	}

	plus() {
		this.acceptOperation(PLUS);
	}

	minus() {
		this.acceptOperation(MINUS);
	}

	times() {
		this.acceptOperation(TIMES);
	}

	divide() {
		this.acceptOperation(DIVIDE);
	}

	equals() {
		if (this.runningTotal != null) {
			if (this.storedOperation != null) {
				this.currentNumber = this.storedOperation.number;
				this.operator = this.storedOperation.operator;
			}
			if ((this.operator != null) && (this.currentNumber != null)) {
				this.updateRunningTotal();
				this.storedOperation = {
					number: this.currentNumber,
					operator: this.operator
				};
				this.operator = null;
				this.currentNumber = null;
			}
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
			} else {
				this.updateRunningTotal();
			}
			this.currentNumber = null;
		}
		this.operator = op;
		this.storedOperation = null;
	}

	updateRunningTotal() {
		let delta = this.currentNumber.value();
		switch (this.operator) {
			case PLUS :
				this.runningTotal += delta;
				break;
			case MINUS :
				this.runningTotal -= delta;
				break;
			case TIMES :
				this.runningTotal *= delta;
				break;
			case DIVIDE :
				this.runningTotal /= delta;
				break;
		}
	}
}

let instance = new Calculator();

export default instance;
