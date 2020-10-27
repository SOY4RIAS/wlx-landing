import { formActions, formState, formTypes } from './form.types';

const initialState: formState = {
	currentProvince: '',
	isFormSaving: false,
	isFormResultError: false,
	isFormResultSuccess: false,
};

function formReducer(state: formState = initialState, action: formActions): formState {
	switch (action.type) {
		case formTypes.CHANGE_PROVINCE:
			return {
				...state,
				currentProvince: action.payload,
			};

		case formTypes.SAVE_FORM_REQUEST:
			return {
				...state,
				isFormSaving: true,
				isFormResultError: false,
				isFormResultSuccess: false,
			};

		case formTypes.SAVE_FORM_FAILURE:
			return {
				...state,
				isFormSaving: false,
				isFormResultError: true,
				isFormResultSuccess: false,
				error: action.error,
			};

		case formTypes.SAVE_FORM_SUCCESS:
			return {
				...state,
				isFormSaving: false,
				isFormResultError: false,
				isFormResultSuccess: true,
			};

		case formTypes.HIDE_FORM_STATUS:
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
