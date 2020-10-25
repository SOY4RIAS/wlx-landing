import React from 'react';
import { TFunction } from 'i18next';

import { Button } from '../../../components/Button';
import { Hero } from '../../../components/Hero';

import { WOLOX_TWITTER_URL } from '../../../utils/constants';

interface WorkOnSectionProps {
	t: TFunction;
}

export const WorkOnSection: React.FC<WorkOnSectionProps> = ({ t }) => {
	return (
		<Hero
			leftContent={
				<div className="collaborators-container">
					<h1>
						<span className="accent-color">{t('collaborators.qty')}&nbsp;+&nbsp;</span>
						<span className="primary-color">{t('collaborators.name')}</span>
					</h1>
					<div>
						<div id="social-media" className="white-color">
							<div className="logo-twitter"></div>
							<span>{t('social.account')}</span>
						</div>

						<Button type="outline" onClick={() => window.open(WOLOX_TWITTER_URL)}>
							<span className="white-color">{t('social.followUs')}</span>
						</Button>
					</div>
				</div>
			}
			rightContent={
				<div className="hero-message">
					<h1>{t('heroMessage.workTo')}&nbsp;</h1>
					<h1>
						<span className="primary-color">{t('heroMessage.turn')}&nbsp;</span>
						<span className="accent-color">{t('heroMessage.ideas')}&nbsp;</span>
						{t('heroMessage.into')}
					</h1>

					<h1>{t('heroMessage.products')}</h1>
				</div>
			}
		/>
	);
};
