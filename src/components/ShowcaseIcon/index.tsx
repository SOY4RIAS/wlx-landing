import React from 'react';
import styles from './showcase_icon.module.scss';

interface ShowcaseIconProps {
	icon: any;
	label: string;
}

export const ShowcaseIcon: React.FC<ShowcaseIconProps> = ({ icon, label }) => {
	return (
		<div className={styles.showcase_icon}>
			<img src={icon} alt={label} />
			<label>{label}</label>
		</div>
	);
};
