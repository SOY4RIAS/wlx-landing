import React from 'react';

import styles from './button.module.scss';

type ButtonType = 'outline' | 'solid' | 'borderless';

interface ButtonProps {
	type?: ButtonType;
	mode?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps & React.HTMLProps<HTMLButtonElement>> = (props) => {
	const { type = 'outline', mode = 'button', ...genericProps } = props;

	return <button className={`${styles.btn} ${styles[type]}`} {...genericProps} type={mode} />;
};
