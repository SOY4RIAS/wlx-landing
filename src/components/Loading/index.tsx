import { useEffect } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({
	showSpinner: false,
	easing: 'ease-in-out',
});

export const Loading = () => {
	useEffect(() => {
		NProgress.start();
		return () => {
			NProgress.done();
		};
	}, []);

	return null;
};
