import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { PageLayout } from '../../components/PageLayout';
import { Routes } from './routes';

const Home = React.lazy(() => import('./../../pages/Home'));
const SignUp = React.lazy(() => import('./../../pages/SignUp'));
const Terms = React.lazy(() => import('./../../pages/Terms'));

export const Router = () => {
	return (
		<BrowserRouter>
			<PageLayout>
				<Switch>
					<Route path={Routes.root} exact component={Home} />
					<Route path={Routes.signUp} exact component={SignUp} />
					<Route path={Routes.terms} exact component={Terms} />
					<Redirect to={Routes.root} />
				</Switch>
			</PageLayout>
		</BrowserRouter>
	);
};
