import React, { useMemo } from 'react';
import { TFunction } from 'i18next';
import { ShowcaseIcon } from '../../../components/ShowcaseIcon';

interface BenefitsSectionProps {
	t: TFunction;
}

interface Benefits {
	icon: string;
	label: string;
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ t }) => {
	const listOfBenefits = useMemo<Benefits[]>(
		() => [
			{
				icon: require('./../../../utils/assets/icons/Ic_Hour.svg'),
				label: t('benefits.hourRate'),
			},

			{
				icon: require('./../../../utils/assets/icons/Ic_HomeOffice.svg'),
				label: t('benefits.homeOffice'),
			},

			{
				icon: require('./../../../utils/assets/icons/Ic_Workshops.svg'),
				label: t('benefits.workshops'),
			},

			{
				icon: require('./../../../utils/assets/icons/Ic_DrinkSnacks.svg'),
				label: t('benefits.snacks'),
			},

			{
				icon: require('./../../../utils/assets/icons/Ic_laptop.svg'),
				label: t('benefits.remoteWeek'),
			},

			{
				icon: require('./../../../utils/assets/icons/Ic_brain.svg'),
				label: t('benefits.latestTechnologies'),
			},
		],
		[t]
	);

	return (
		<section id={'benefits'}>
			<h3 className="text-center">
				{t('benefits.title')} <span className="primary-color">;)</span>
			</h3>
			<div className="grid-6col">
				{listOfBenefits.map(({ icon, label }, key) => (
					<ShowcaseIcon icon={icon} label={label} key={key} />
				))}
			</div>
		</section>
	);
};
