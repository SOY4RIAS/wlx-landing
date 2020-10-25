import React from 'react';
import { useTranslation } from 'react-i18next';

import { SignUpFormSection } from './sections/SignUpFormSection';

import './sign_up.scss';

const SignUp: React.FC = () => {
	const { t } = useTranslation();

	return (
		<>
			<main id="sign-up-main">
				<section id="sign-up-form">
					<h2 className="text-center"> {t('register')} </h2>
					<SignUpFormSection t={t} />
				</section>
			</main>
		</>
	);
};

export default SignUp;
