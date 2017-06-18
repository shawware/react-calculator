import React, { Component } from 'react';
import { connect } from 'react-redux';

/*
 * A simple presentation object: presents the value of a count.
 */
class Counter extends Component {

	render() {
		var name = this.props.name;
		var counts = this.props.counts;
		var count = name in counts ? counts[name] : 0;
		return (
			<div>
				<p><strong>{this.props.text}: {count}</strong></p>
			</div>
		);
	}
}

/*
 * Extract the elements of the application state we're interested in:
 *
 *  - the count
 */
function mapStateToProps(state) {
	return {
		counts: state.counts
	};
}

export default connect(mapStateToProps)(Counter);
