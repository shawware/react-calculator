import React, { Component } from 'react';
import { connect } from 'react-redux';

class Value extends Component {
	render() {
		return(
			<p className="calc-value">
				{this.props.value}
			</p>
		);
	}
}

/*
 * Extract the elements of the application state we're interested in:
 *
 *  - the value
 */
function mapStateToProps(state) {
	return {
		value: state.value
	};
}


export default connect(mapStateToProps)(Value);
