import { API_URL } from './../utils/constants';
import { AuthResponse, Credentials, User } from './types';

const headers = new Headers({
	'Content-Type': 'application/json',
});

export const SignUpRequest = async (user: User): Promise<AuthResponse> => {
	try {
		const response = await fetch(`${API_URL}/signup`, {
			method: 'POST',
			headers,
			body: JSON.stringify(user),
		});

		return await response.json();
	} catch (error) {
		return { error, token: null };
	}
};

export const LoginRequest = async (credentials: Credentials): Promise<AuthResponse> => {
	try {
		const response = await fetch(`${API_URL}/login`, {
			method: 'POST',
			headers,
			body: JSON.stringify(credentials),
		});

		return await response.json();
	} catch (error) {
		return { error, token: null };
	}
};
