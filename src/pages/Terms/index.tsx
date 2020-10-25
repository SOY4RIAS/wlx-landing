import React from 'react';
import { useTranslation } from 'react-i18next';

const Terms: React.FC = () => {
	const { t } = useTranslation();

	return (
		<>
			<h1> {t('siteInProgress')} </h1>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex eaque iste, quo enim optio quod
				aliquid non harum, voluptatem placeat cumque! Ratione, doloremque dolorem! Rerum eius odio
				laudantium. Voluptas, magni. Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Eligendi sunt vel architecto, quibusdam laudantium ipsum repellat quia! Ab qui natus quaerat
				accusamus temporibus nemo odit vel hic, recusandae perferendis omnis?Nulla earum rerum ut
				quia dolorum quaerat voluptate, animi maxime ea ullam consequatur eveniet omnis temporibus
				quibusdam quasi officia, ad ipsam enim dolor quod tempore deleniti iure mollitia voluptatum!
				Ex?.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eveniet porro magnam
				architecto molestiae voluptates obcaecati id officia cupiditate soluta, velit natus
				dignissimos eaque consequuntur, a fugit rem dicta error! Nulla modi, eaque debitis
				repudiandae neque sequi culpa quas labore maxime. Id eveniet libero neque aperiam quos nihil
				omnis laudantium. Fugit esse odit ex, alias atque molestiae architecto. Aliquam, iure.
				Beatae sunt itaque modi architecto error ullam. Distinctio, repudiandae? Dolor consectetur
				ullam dicta. Repellat, nisi quaerat! Expedita maxime tenetur odio nihil nemo quas facere
				alias aliquid obcaecati earum, quis quidem! Vel iure suscipit illum esse molestiae. Suscipit
				nam laboriosam error, vitae dolorem recusandae obcaecati esse, nesciunt, doloribus
				voluptates unde. Sit cumque saepe ratione mollitia dolor cupiditate, pariatur magni
				accusantium repellat!
			</p>
		</>
	);
};

export default Terms;
