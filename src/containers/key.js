import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { keyPress } from '../actions/keyPress';

/*
 * A button as a container
 */
class CalculatorKey extends Component {

	render() {
		let style = "calc-button-normal";
		if ((this.props.lastKey != null) && (this.props.name == this.props.lastKey)) {
			style = "calc-button-pressed";
		}
		return(
			<button className={style}
				onClick={() => this.props.action(this.props.text)}>
				{this.props.text}
			</button>
		);
	}
}

function mapStateToProps(state) {
	return {
		lastKey: state.lastKey,
	};
}

/*
 * Bind the button click action to the action property.
 */
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ action : keyPress }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorKey);
