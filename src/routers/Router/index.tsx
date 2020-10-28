import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { PageLayout } from '../../components/PageLayout';
import { authenticate } from '../../store/auth/auth.actions';
import { RootState } from '../../store/store';
import { Routes } from './routes';

const Home = React.lazy(() => import('./../../pages/Home'));
const SignUp = React.lazy(() => import('./../../pages/SignUp'));
const Terms = React.lazy(() => import('./../../pages/Terms'));

const AppRouter = React.lazy(() => import('./../AppRouter'));

export const Router = () => {
	const dispatch = useDispatch();
	const isAuthenticated = useSelector<RootState>((state) => state.auth.isAuthenticated);

	useEffect(() => {
		const token = localStorage.getItem('token');

		if (token) {
			dispatch(authenticate(true));
		}
	}, [dispatch]);

	return (
		<BrowserRouter>
			<PageLayout>
				<Switch>
					<Route path={Routes.root} exact component={Home} />

					<Route
						path={Routes.signUp}
						exact
						render={() => (!isAuthenticated ? <SignUp /> : <Redirect to={Routes.app} />)}
					/>

					<Route path={Routes.terms} exact component={Terms} />
					<Route path={Routes.app} component={AppRouter} />

					<Redirect to={Routes.root} />
				</Switch>
			</PageLayout>
		</BrowserRouter>
	);
};
