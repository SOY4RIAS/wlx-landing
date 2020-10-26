export interface formState {
	currentProvince: string;
	isFormSaving: boolean;
	isFormResultSuccess: boolean;
	isFormResultError: boolean;
	token?: string;
}

export enum formTypes {
	CHANGE_PROVINCE = 'CHANGE_PROVINCE',
	SAVE_FORM_REQUEST = 'SAVE_FORM_REQUEST',
	SAVE_FORM_SUCCESS = 'SAVE_FORM_SUCCESS',
	SAVE_FORM_FAILURE = 'SAVE_FORM_FAILURE',
	HIDE_FORM_STATUS = 'HIDE_FORM_STATUS',
}

export type formActions =
	| { type: formTypes.CHANGE_PROVINCE; payload: string }
	| { type: formTypes.SAVE_FORM_REQUEST }
	| { type: formTypes.SAVE_FORM_FAILURE; error: string }
	| { type: formTypes.SAVE_FORM_SUCCESS; token: string }
	| { type: formTypes.HIDE_FORM_STATUS };
