import { authActions, authState, authTypes } from './auth.types';

const initialState: authState = {
	isAuthenticated: false,
};

function authReducer(state: authState = initialState, action: authActions): authState {
	switch (action.type) {
		case authTypes.AUTHENTICATED:
			return {
				...state,
				isAuthenticated: action.payload,
			};

		default:
			return state;
	}
}

export default authReducer;
