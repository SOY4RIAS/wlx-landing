import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { AppRoutes } from './routes';

const List = React.lazy(() => import('./../../pages/List'));

const AppRouter = () => {
	return (
		<Switch>
			<Route path={AppRoutes.TechList} exact component={List} />
			<Redirect to={AppRoutes.TechList} />
		</Switch>
	);
};

export default AppRouter;
