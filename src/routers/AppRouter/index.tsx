import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { loadLikes } from '../../store/tech/tech.actions';

import { AppRoutes } from './routes';

const List = React.lazy(() => import('./../../pages/List'));

const AppRouter = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadLikes());
	}, [dispatch]);

	return (
		<Switch>
			<Route path={AppRoutes.TechList} exact component={List} />
			<Redirect to={AppRoutes.TechList} />
		</Switch>
	);
};

export default AppRouter;
