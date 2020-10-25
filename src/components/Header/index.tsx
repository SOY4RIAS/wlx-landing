import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../Button';
import styles from './header.module.scss';

export const Header: React.FC = () => {
	const { t } = useTranslation();

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
					<a href="#home">{t('home')}</a>
				</li>
				<li>
					<a href="#benefits">{t('benefitsLbl')}</a>
				</li>
				<li>
					<Button onClick={() => null}>{t('login')}</Button>
				</li>
			</nav>
		</header>
	);
};
