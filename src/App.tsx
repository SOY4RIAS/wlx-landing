import React from 'react';
import { Router } from './routers';

import { withSuspense } from './utils/hoc/withSuspense';

import './styles/App.scss';

function App() {
	return (
		<>
			<Router />
		</>
	);
}

export default withSuspense(App);
