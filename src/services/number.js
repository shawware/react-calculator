// A number as entered into a calculator, ie. digit-by-digit.

class NumericValue {
	
	constructor() {
		this.currentValue = 0;		// The value of this number
		this.isWhole      = true;   // Have we received a decimal point
		this.significance = 10;      // What's the significance of the next digit, ie. 10^-X
	}

	value() {
		return this.currentValue;
	}

	acceptDigit(digit) {
		if ((typeof digit !== 'number') || (digit < 0) || (digit > 9)) {
			console.log(`invalid digit: ${digit}`);
			return false;
		}
		if (this.isWhole) {
			this.currentValue *= 10;
			this.currentValue += digit;
		} else {
			this.currentValue += (digit / this.significance);
			this.significance *= 10;
		}
		return true;
	}

	acceptDecimalPoint() {
		if (!this.isWhole) {
			return false;
		}
		this.isWhole = false;
		this.significance = 0.1;
		return true;
	}
}

export default NumericValue;
