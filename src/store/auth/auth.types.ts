export interface authState {
	isAuthenticated: boolean;
}

export enum authTypes {
	AUTHENTICATED = 'AUTHENTICATED',
}

export type authActions = { type: authTypes.AUTHENTICATED; payload: boolean };
