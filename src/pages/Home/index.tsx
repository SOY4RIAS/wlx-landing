import React from 'react';
import { useTranslation } from 'react-i18next';

import { Hero } from '../../components/Hero';
import { Button } from '../../components/Button';

import { WorkOnSection } from './sections/WorkOnSection';
import { BenefitsSection } from './sections/BenefitsSection';
import { FooterSection } from './sections/FooterSection';

import { AVAILABLE_LANGS_TEXT, ENGLISH_CODE, SPANISH_CODE } from '../../utils/constants';

import './home.scss';

const Home: React.FC = () => {
	const { t, i18n } = useTranslation();

	const handleChangeLang = () => {
		if (i18n.language === SPANISH_CODE) {
			i18n.changeLanguage(ENGLISH_CODE);
		} else {
			i18n.changeLanguage(SPANISH_CODE);
		}
	};

	return (
		<>
			<section id="home">
				<Hero
					leftContent={
						<div>
							<h2 className="thin">{t('welcome.part1')}</h2>
							<h2>
								<span className="bold">{t('welcome.part2')}</span>&nbsp;
								<span className="thin">{t('welcome.at')}</span>
							</h2>
							<h2 className="accent-color bold">{t('welcome.company')}</h2>
							<Button type="borderless" onClick={handleChangeLang}>
								{AVAILABLE_LANGS_TEXT[i18n.language === SPANISH_CODE ? ENGLISH_CODE : SPANISH_CODE]}
							</Button>
						</div>
					}
					rightContent={<div className="ic-hero-header"></div>}
				/>
			</section>

			<WorkOnSection t={t} />

			<BenefitsSection t={t} />

			<hr />

			<FooterSection t={t} />
		</>
	);
};

export default Home;
