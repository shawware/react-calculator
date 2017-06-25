import React, { Component } from 'react';

import Text from './text';
import Value from '../containers/value';
import CalculatorKey from '../containers/key';

class Application extends Component {

	renderKey(key) {
		return(
			<CalculatorKey name={key} text={key} />
		);
	}

	renderRow(keys, i) {
		return(
			<tr key={i}>
			{
				keys.map( (k, j) =>
					<td key={j}>
						{ (k === " ") ? " " : this.renderKey(k) }
					</td>
				)
			}
			</tr>
		);
	}

	render() {
		let rows = [
			[   7,   8,   9, "/" ],
			[   4,   5,   6, "*" ],
			[   1,   2,   3, "-" ],
			[   0, ".", "=", "+" ],
			[ " ", "C", " ", " " ]
		];
		return(
			<div>
				<Text text="Calculator" />
				<Value text="0" />
				<table className="calc-table">
					<tbody>
						{ rows.map((row, i) => this.renderRow(row, i)) }
					</tbody>
				</table>
			</div>
		);
	}
}

export default Application;
