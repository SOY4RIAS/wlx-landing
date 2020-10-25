import React from 'react';

import styles from './button.module.scss';

type ButtonType = 'outline' | 'solid' | 'borderless';

interface ButtonProps {
	type?: ButtonType;
	onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, type = 'outline' }) => {
	return (
		<button className={`${styles.btn} ${styles[type]}`} onClick={onClick}>
			{children}
		</button>
	);
};
