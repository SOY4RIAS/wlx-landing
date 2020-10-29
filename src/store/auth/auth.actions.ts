import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { RootState } from '../store';
import { loadLikes } from '../tech/tech.actions';
import { TechActions } from '../tech/tech.types';
import { AuthActions, AuthTypes } from './auth.types';

export function authenticate(isAutenticated: boolean): AuthActions {
	return {
		type: AuthTypes.AUTHENTICATED,
		payload: isAutenticated,
	};
}

export function logout(): AuthActions {
	return {
		type: AuthTypes.LOGOUT,
	};
}

export function logoutThunk(): ThunkAction<void, RootState, unknown, AuthActions> {
	return function (dispatch: ThunkDispatch<{}, {}, AuthActions | TechActions>) {
		localStorage.removeItem('user');
		localStorage.removeItem('liked_techs');
		localStorage.removeItem('token');

		dispatch(logout());
		dispatch(loadLikes());
	};
}
