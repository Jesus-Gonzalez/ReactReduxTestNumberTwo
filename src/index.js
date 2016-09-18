import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './components/app';

import rootReducer from './reducers'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

render(
	<Provider store={createStoreWithMiddleware(rootReducer)}>
		<App />
	</Provider>, document.getElementById('app'));
