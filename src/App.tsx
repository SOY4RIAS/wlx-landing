import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store';
import { Router } from './routers';
import { withSuspense } from './utils/hoc/withSuspense';

import './styles/App.scss';

function App() {
	return (
		<Provider store={store}>
			<Router />
		</Provider>
	);
}

export default withSuspense(App);
