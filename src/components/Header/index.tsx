import React, { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import { Routes } from '../../routers/Router/routes';

import { headerScrolled } from '../../store/header/header.actions';

import { RootState } from '../../store/store';

import { Button } from '../Button';

import styles from './header.module.scss';

export const Header: React.FC = () => {
	const history = useHistory();
	const { t } = useTranslation();

	const dispatch = useDispatch();

	const setScrolled = useCallback((value: boolean) => dispatch(headerScrolled(value)), [dispatch]);
	const isScrolled = useSelector<RootState>((state) => state.header.isHeaderScrolled);

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
	});

	return (
		<header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
			<div className={styles.logo}></div>
			<nav>
				<ul>
					<li>
						<HashLink smooth to={`${Routes.root}#home`}>
							{t('home')}
						</HashLink>
					</li>
					<li>
						<HashLink smooth to={`${Routes.root}#benefits`}>
							{t('benefitsLbl')}
						</HashLink>
					</li>
					<li>
						<Button onClick={() => history.push(Routes.signUp)}>{t('login')}</Button>
					</li>
				</ul>
			</nav>
		</header>
	);
};
