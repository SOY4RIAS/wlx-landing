export interface AuthState {
	isAuthenticated: boolean;
}

export enum AuthTypes {
	AUTHENTICATED = 'AUTHENTICATED',
	LOGOUT = 'LOGOUT',
}

export type AuthActions =
	| { type: AuthTypes.AUTHENTICATED; payload: boolean }
	| { type: AuthTypes.LOGOUT };
