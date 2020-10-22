import React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../../routers/Router/routes';

const Home: React.FC = () => {
	return (
		<>
			<h1>hello from Home</h1>
			<Link to={Routes.signUp}>SignUp</Link>
		</>
	);
};

export default Home;
