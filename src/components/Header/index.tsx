import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../Button';
import styles from './header.module.scss';

export const Header: React.FC = () => {
	const { t } = useTranslation();
	return (
		<header className={styles.header}>
			<div className={styles.logo}></div>
			<nav>
				<li>
					<a href="#home">{t('home')}</a>
				</li>
				<li>
					<a href="#benefits">{t('benefits')}</a>
				</li>
				<li>
					<Button onClick={() => null}>{t('login')}</Button>
				</li>
			</nav>
		</header>
	);
};
