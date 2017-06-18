import React, { Component } from 'react';

class Text extends Component {
	render() {
		return(
			<p className="calc-text">
				{this.props.text}
			</p>
		);
	}
}

export default Text;
