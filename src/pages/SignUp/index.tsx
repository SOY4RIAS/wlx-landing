import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Alert } from '../../components/Alert';
import { Loader } from '../../components/Loader';
import { formState } from '../../store/form/form.types';
import { RootState } from '../../store/store';

import { SignUpFormSection } from './sections/SignUpFormSection';

import './sign_up.scss';

const SignUp: React.FC = () => {
	const { t } = useTranslation();

	const { isFormSaving, error } = useSelector<RootState, formState>((state) => state.form);

	return (
		<>
			<main id="sign-up-main">
				<section id="sign-up-form">
					<h2 className="text-center"> {t('register')} </h2>

					{isFormSaving && <Loader />}

					{error && <Alert variant="danger" message={error} />}

					<SignUpFormSection t={t} />
				</section>
			</main>
		</>
	);
};

export default SignUp;
