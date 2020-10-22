import { useEffect } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

export const Loading = () => {
	useEffect(() => {
		NProgress.start();
		return () => {
			NProgress.done();
		};
	}, []);

	return null;
};
