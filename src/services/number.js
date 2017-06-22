// A number as entered into a calculator, ie. digit-by-digit.

class NumericValue {

	constructor() {
		this.currentValue = 0;    // The value of this number
		this.isWhole      = true; // Have we received a decimal point
		this.significance = 10;   // What's the significance of the next decimal digit, ie. 1/sig
	}

	/*
	 * Return the current value to the correct number of decimal places.
	 * If it's a whole number, round to an int.
	 * If it's a decimal number, ensure we fill all the decimal places,
	 * even if there are trailing zeroes, eg. 3.00
	 */
	displayValue() {
		let places;
		if (this.isWhole) {
			places = 0;
		} else {
			places = Math.log10(this.significance) - 1;
		}
		return this.currentValue.toFixed(places);
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
		return true;
	}
}

export default NumericValue;
