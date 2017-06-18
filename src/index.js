// Third-Party Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Local Imports
import Application from './components/app';
import reducers from './reducers';

// Instantiate the Calculator
import Calculator from './services/calculator';

// Build a store to hold the state.
var store = createStore(reducers);

// Load our Application element at the element with class sw-app.
ReactDOM.render(
	<Provider store={store}>
		<Application />
	</Provider>,
	document.querySelector('.sw-app')
);
