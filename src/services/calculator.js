const KEYS = "0123456789*/+-.C";

class Calculator {
	
	constructor() {
		this.runningTotal = 0;
	}

	currentValue() {
		return this.runningTotal;
	}

	increment() {
		this.runningTotal++;
	}

	isValidKey(key) {
		if (typeof key === 'number') {
			key = key.toString();
		}
		if (typeof key !== 'string') {
			return false;
		}
		return (key.length == 1) && (KEYS.indexOf(key) > 0);
	}
}

let instance = new Calculator();

export default instance;
