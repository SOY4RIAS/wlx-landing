export interface FormState {
	currentProvince: string;
	isFormSaving: boolean;
	isFormResultSuccess: boolean;
	isFormResultError: boolean;
	error?: string;
	token?: string;
}

export enum FormTypes {
	CHANGE_PROVINCE = 'CHANGE_PROVINCE',
	SAVE_FORM_REQUEST = 'SAVE_FORM_REQUEST',
	SAVE_FORM_SUCCESS = 'SAVE_FORM_SUCCESS',
	SAVE_FORM_FAILURE = 'SAVE_FORM_FAILURE',
	HIDE_FORM_STATUS = 'HIDE_FORM_STATUS',
}

export type FormActions =
	| { type: FormTypes.CHANGE_PROVINCE; payload: string }
	| { type: FormTypes.SAVE_FORM_REQUEST }
	| { type: FormTypes.SAVE_FORM_FAILURE; error: string }
	| { type: FormTypes.SAVE_FORM_SUCCESS; token: string }
	| { type: FormTypes.HIDE_FORM_STATUS };
