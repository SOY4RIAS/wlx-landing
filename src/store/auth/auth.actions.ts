import { authActions, authTypes } from './auth.types';

export function authenticate(isAutenticated: boolean): authActions {
	return {
		type: authTypes.AUTHENTICATED,
		payload: isAutenticated,
	};
}
