import React from 'react';
import { TFunction } from 'i18next';
import { Button } from '../../../components/Button';
import { WOLOX_PAGE } from '../../../utils/constants';

interface FooterSectionProps {
	t: TFunction;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ t }) => {
	return (
		<footer>
			<div className="text-center">
				<h2>
					{t('farewell.thanks')} <span className="primary-color">{t('farewell.complete')}</span>
				</h2>
				<h4 className="thin">{t('farewell.invite')}</h4>
				<Button type="solid" onClick={() => window.open(WOLOX_PAGE)}>
					{t('farewell.moreContent')}
				</Button>
			</div>

			<img
				src={require('./../../../utils/assets/icons/Ic_Wolox_Footer.svg')}
				alt={t('companyLogoTxt')}
			/>
		</footer>
	);
};
