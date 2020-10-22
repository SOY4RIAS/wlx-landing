import React from 'react';
import { Router } from './routers';

import { withSuspense } from './utils/hoc/withSuspense';

function App() {
	return (
		<>
			<Router />
		</>
	);
}

export default withSuspense(App);
