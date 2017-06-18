import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { keyPress } from '../actions/keyPress';

/*
 * A button as a container
 */
class CalculatorKey extends Component {

	render() {
		// Create a function to call the given action, passing it the key type and name.
		return(
			<button className="calc-button"
				onClick={() => this.props.action(this.props.text)}>
				{this.props.text}
			</button>
		);
	}
}

/*
 * Bind the button click action to the action property.
 */
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ action : keyPress }, dispatch);
}

export default connect(null, mapDispatchToProps)(CalculatorKey);
