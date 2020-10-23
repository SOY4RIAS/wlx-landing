import React from 'react';
import styles from './hero.module.scss';

interface HeroProps {
	leftContent: React.ReactNode;
	rightContent: React.ReactNode;
}

export const Hero: React.FC<HeroProps> = ({ leftContent, rightContent }) => {
	return (
		<section className={styles.hero}>
			<div className={styles.hero_left_content}>{leftContent}</div>

			<div className={styles.hero_right_content}>{rightContent}</div>
		</section>
	);
};
