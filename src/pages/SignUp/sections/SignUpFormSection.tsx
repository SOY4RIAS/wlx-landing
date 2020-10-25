import { TFunction } from 'i18next';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Routes } from '../../../routers/Router/routes';
import { COLOMBIA_CODE, COUNTRIES, PROVINCES } from '../../../utils/constants';

interface SignUpFormSectionProps {
	t: TFunction;
}

const maxLength30 = {
	value: 30,
	message: 'only 30 characters',
};

const required = 'Required';

export const SignUpFormSection: React.FC<SignUpFormSectionProps> = ({ t }) => {
	const { register, errors, watch, handleSubmit } = useForm({ mode: 'onSubmit' });

	const onSubmit = handleSubmit((data) => console.log(data));

	return (
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
				<small>{errors.name && errors.name.message}</small>
			</label>

			<label>
				Apellido
				<input
					name="lastname"
					ref={register({
						required,
						maxLength: maxLength30,
					})}
				/>
				<small>{errors.lastname && errors.lastname.message}</small>
			</label>

			<label>
				País
				<select name="country" ref={register({ required })}>
					<option value=""></option>

					{COUNTRIES.map((item) => (
						<option key={item.id} value={item.id}>
							{item.name}
						</option>
					))}
				</select>
				<small>{errors.country && errors.country.message}</small>
			</label>

			<label>
				Provincia
				<select name="province" ref={register({ required })}>
					<option value=""></option>
					{PROVINCES[COLOMBIA_CODE].map((item) => (
						<option key={item.id} value={item.id}>
							{item.name}
						</option>
					))}
				</select>
				<small>{errors.province && errors.province.message}</small>
			</label>

			<label>
				Email
				<input
					name="email"
					ref={register({
						required,
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							message: 'Invalid Email',
						},
					})}
				/>
				<small>{errors.email && errors.email.message}</small>
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
				<small>{errors.phone && errors.phone.message}</small>
			</label>

			<label>
				Contraseña
				<input
					type="password"
					name="password"
					ref={register({
						required,
						minLength: {
							value: 6,
							message: 'Min 6 characters',
						},
					})}
				/>
				<small>{errors.password && errors.password.message}</small>
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
				<small>{errors.confirmPassword && errors.confirmPassword.message}</small>
			</label>

			<label className={'inline'}>
				<input type="checkbox" name="terms" ref={register({ required })} />
				&nbsp;Acepto&nbsp;
				<Link to={Routes.terms}>Términos y condiciones</Link>
			</label>

			<input type="submit" />
		</form>
	);
};
