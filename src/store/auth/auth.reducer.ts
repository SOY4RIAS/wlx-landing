import { AuthActions, AuthState, AuthTypes } from './auth.types';

const initialState: AuthState = {
	isAuthenticated: false,
};

function authReducer(state: AuthState = initialState, action: AuthActions): AuthState {
	switch (action.type) {
		case AuthTypes.AUTHENTICATED:
			return {
				...state,
				isAuthenticated: action.payload,
			};

		case AuthTypes.LOGOUT:
			return {
				...state,
				isAuthenticated: false,
			};

		default:
			return state;
	}
}

export default authReducer;
