import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import { Routes } from '../../routers/Router/routes';

import { Button } from '../Button';

import styles from './header.module.scss';

export const Header: React.FC = () => {
	const { t } = useTranslation();

	const history = useHistory();

	const [isScrolled, setScrolled] = useState(false);

	const handleScroll = () => {
		const offset = window.scrollY;

		if (offset > 20) {
			setScrolled(true);
			return;
		}

		setScrolled(false);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', () => handleScroll);
		};
	});

	return (
		<header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
			<div className={styles.logo}></div>
			<nav>
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
			</nav>
		</header>
	);
};
