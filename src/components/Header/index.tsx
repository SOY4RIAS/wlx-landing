import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import { AppRoutes } from '../../routers/AppRouter/routes';
import { Routes } from '../../routers/Router/routes';
import { Button } from '../Button';

import { useHeader } from './useHeader';

import styles from './header.module.scss';

export const Header: React.FC = () => {
	const { t } = useTranslation();
	const location = useLocation();

	const { isScrolled, isAuthenticated, handleAuthClick } = useHeader();

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

					{location.pathname !== AppRoutes.TechList && (
						<li>
							<Button onClick={handleAuthClick}>{t(isAuthenticated ? 'login' : 'register')}</Button>
						</li>
					)}
				</ul>
			</nav>
		</header>
	);
};
