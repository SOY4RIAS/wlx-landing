import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Routes } from './routes';

const Home = React.lazy(() => import('./../../pages/Home'));
const SignUp = React.lazy(() => import('./../../pages/SignUp'));

export const Router = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path={Routes.root} exact component={Home} />
				<Route path={Routes.signUp} exact component={SignUp} />
				<Redirect to={Routes.root} />
			</Switch>
		</BrowserRouter>
	);
};
