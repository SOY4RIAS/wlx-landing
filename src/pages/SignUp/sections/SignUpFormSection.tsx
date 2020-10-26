import React from 'react';
import { TFunction } from 'i18next';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Routes } from '../../../routers/Router/routes';
import { changeProvince, saveFormThunk } from '../../../store/form/form.actions';
import { RootState } from '../../../store/store';
import { COUNTRIES, Province, PROVINCES } from '../../../utils/constants';

import { Button } from '../../../components/Button';

import { User } from '../../../api/types';

interface SignUpFormSectionProps {
	t: TFunction;
}

const maxLength30 = {
	value: 30,
	message: 'only 30 characters',
};

const required = 'Required';

interface FormFields extends User {
	confirmPassword?: string;
}

export const SignUpFormSection: React.FC<SignUpFormSectionProps> = () => {
	const { register, errors, watch, handleSubmit } = useForm<FormFields>();
	const dispatch = useDispatch();
	const currentProvince = useSelector<RootState, string>((state) => state.form.currentProvince);

	const handleChangeProvince = () => {
		dispatch(changeProvince(watch('country')));
	};

	const onSubmit = handleSubmit((data) => {
		delete data.confirmPassword;

		const user = { ...data };

		dispatch(saveFormThunk(user));
	});

	const formHasError = () => Object.keys(errors).length > 0;

	return (
		<>
			<form onSubmit={onSubmit}>
				<label>
					Nombre
					<input
						name="name"
						ref={register({
							required,
							maxLength: maxLength30,
						})}
					/>
					<small>{errors.name?.message}</small>
				</label>

				<label>
					Apellido
					<input
						name="last_name"
						ref={register({
							required,
							maxLength: maxLength30,
						})}
					/>
					<small>{errors.last_name?.message}</small>
				</label>

				<label>
					País
					<select name="country" ref={register({ required })} onChange={handleChangeProvince}>
						<option value=""></option>

						{COUNTRIES.map((item) => (
							<option key={item.id} value={item.id}>
								{item.name}
							</option>
						))}
					</select>
					<small>{errors.country?.message}</small>
				</label>

				<label>
					Provincia
					<select name="province" ref={register({ required })}>
						<option value=""></option>
						{PROVINCES[currentProvince]?.map((item: Province) => (
							<option key={item.id} value={item.id}>
								{item.name}
							</option>
						))}
					</select>
					<small>{errors.province?.message}</small>
				</label>

				<label>
					Email
					<input
						name="mail"
						ref={register({
							required,
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: 'Invalid Email',
							},
						})}
					/>
					<small>{errors.mail?.message}</small>
				</label>

				<label>
					Telefono
					<input
						name="phone"
						type="number"
						ref={register({
							required,
							maxLength: {
								value: 10,
								message: 'Only 10 characters',
							},
							pattern: {
								value: /^[0-9]*$/,
								message: 'Only numbers',
							},
						})}
					/>
					<small>{errors.phone?.message}</small>
				</label>

				<label>
					Contraseña
					<input
						type="password"
						name="password"
						ref={register({
							required,
							pattern: {
								value: /^[a-zA-Z0-9]+$/,
								message: 'password must have alphanumeric combination',
							},
							minLength: {
								value: 6,
								message: 'Min 6 characters',
							},
						})}
					/>
					<small>{errors.password?.message}</small>
				</label>

				<label>
					Confirmar Contraseña
					<input
						type="password"
						name="confirmPassword"
						ref={register({
							required,
							validate: (value) => value === watch('password') || 'Passwords dont match',
						})}
					/>
					<small>{errors.confirmPassword?.message}</small>
				</label>

				<label className={'inline'}>
					<input type="checkbox" name="terms" ref={register({ required })} />
					&nbsp;Acepto&nbsp;
					<Link to={Routes.terms}>Términos y condiciones</Link>
				</label>

				<br />

				<Button type="solid" mode="submit" disabled={formHasError()}>
					Guardar
				</Button>
			</form>
		</>
	);
};
