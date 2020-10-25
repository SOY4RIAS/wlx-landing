import React from 'react';
import { useTranslation } from 'react-i18next';

import { Header } from '../../components/Header';
import { Hero } from '../../components/Hero';

import { WorkOnSection } from './sections/WorkOnSection';

import './home.scss';
import { BenefitsSection } from './sections/BenefitsSection';
import { FooterSection } from './sections/FooterSection';

const Home: React.FC = () => {
	const { t } = useTranslation();

	return (
		<>
			<Header />

			<div id="home">
				<Hero
					leftContent={
						<div>
							<h2 className="thin">{t('welcome.part1')}</h2>
							<h2>
								<span className="bold">{t('welcome.part2')}</span>&nbsp;
								<span className="thin">{t('welcome.at')}</span>
							</h2>
							<h2 className="accent-color bold">{t('welcome.company')}</h2>
						</div>
					}
					rightContent={<div className="ic-hero-header"></div>}
				/>
			</div>

			<WorkOnSection t={t} />

			<BenefitsSection t={t} />

			<hr />

			<FooterSection t={t} />
		</>
	);
};

export default Home;
