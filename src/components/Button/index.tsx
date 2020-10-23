import React from 'react';
import PropTypes from 'prop-types';

import styles from './button.module.scss';

type ButtonType = 'outline' | 'solid';

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

Button.propTypes = {
	type: PropTypes.oneOf<ButtonType>(['outline', 'solid']),
	onClick: PropTypes.func.isRequired,
};
