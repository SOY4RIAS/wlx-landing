import { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { AppRoutes } from '../../routers/AppRouter/routes';
import { Routes } from '../../routers/Router/routes';
import { logoutThunk } from '../../store/auth/auth.actions';
import { headerScrolled } from '../../store/header/header.actions';
import { RootState } from '../../store/store';
import { countOfLikes } from '../../store/tech/tech.selectors';

/**
 * useHeader hook is created with the only purpose
 * that is split the code from the component `Header`
 */
export const useHeader = () => {
	const history = useHistory();

	const dispatch = useDispatch();

	const sizeOfLikesSelector = useMemo(() => countOfLikes, []);

	// Selectors from the store
	const isAuthenticated = useSelector<RootState>((state) => state.auth.isAuthenticated);
	const isScrolled = useSelector<RootState>((state) => state.header.isHeaderScrolled);
	const numberOfLikes = useSelector<RootState, number>(sizeOfLikesSelector);

	const setScrolled = useCallback((value: boolean) => dispatch(headerScrolled(value)), [dispatch]);
	const handleLogout = useCallback(() => dispatch(logoutThunk()), [dispatch]);

	const handleAuthClick = () => history.push(isAuthenticated ? AppRoutes.TechList : Routes.signUp);

	useEffect(() => {
		const handleScroll = () => {
			const offset = window.scrollY;
			const savedValue = Boolean(localStorage.getItem('header'));

			if (offset > 20 && !savedValue) {
				setScrolled(true);
				localStorage.header = 1;
				return;
			} else if (offset < 20 && savedValue) {
				setScrolled(false);
				localStorage.removeItem('header');
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', () => handleScroll);
		};
	}, [setScrolled]);

	return { isScrolled, isAuthenticated, numberOfLikes, handleAuthClick, handleLogout };
};
