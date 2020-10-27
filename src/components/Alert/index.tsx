import React from 'react';

import styles from './alert.module.scss';

interface AlertProps {
	variant?: 'danger' | 'info' | 'default';
	message: string;
}

export const Alert: React.FC<AlertProps> = ({ message, variant = 'default' }) => {
	return (
		<div className={`${styles.alert} ${styles[variant]}`}>
			<span>{message}</span>
		</div>
	);
};
