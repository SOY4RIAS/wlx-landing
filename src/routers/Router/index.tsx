import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { PageLayout } from '../../components/PageLayout';
import { RootState } from '../../store/store';
import { Routes } from './routes';

const Home = React.lazy(() => import('./../../pages/Home'));
const SignUp = React.lazy(() => import('./../../pages/SignUp'));
const Terms = React.lazy(() => import('./../../pages/Terms'));

const AppRouter = React.lazy(() => import('./../AppRouter'));

export const Router = () => {
	const isAuthenticated = useSelector<RootState>((state) => state.auth.isAuthenticated);

	return (
		<BrowserRouter>
			<PageLayout>
				<Switch>
					<Route path={Routes.root} exact component={Home} />
					<Route path={Routes.signUp} exact component={SignUp} />
					<Route path={Routes.terms} exact component={Terms} />

					{isAuthenticated && <Route path={Routes.app} component={AppRouter} />}

					<Redirect to={Routes.root} />
				</Switch>
			</PageLayout>
		</BrowserRouter>
	);
};
