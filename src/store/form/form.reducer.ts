import { FormActions, FormState, FormTypes } from './form.types';

const initialState: FormState = {
	currentProvince: '',
	isFormSaving: false,
	isFormResultError: false,
	isFormResultSuccess: false,
};

function formReducer(state: FormState = initialState, action: FormActions): FormState {
	switch (action.type) {
		case FormTypes.CHANGE_PROVINCE:
			return {
				...state,
				currentProvince: action.payload,
			};

		case FormTypes.SAVE_FORM_REQUEST:
			return {
				...state,
				isFormSaving: true,
				isFormResultError: false,
				isFormResultSuccess: false,
			};

		case FormTypes.SAVE_FORM_FAILURE:
			return {
				...state,
				isFormSaving: false,
				isFormResultError: true,
				isFormResultSuccess: false,
				error: action.error,
			};

		case FormTypes.SAVE_FORM_SUCCESS:
			return {
				...state,
				isFormSaving: false,
				isFormResultError: false,
				isFormResultSuccess: true,
			};

		case FormTypes.HIDE_FORM_STATUS:
			delete state.error;

			return {
				...state,
				isFormSaving: false,
				isFormResultError: false,
				isFormResultSuccess: false,
			};

		default:
			return state;
	}
}

export default formReducer;
