import { formActions, formState, formTypes } from './form.types';

const initialState: formState = {
	currentProvince: '',
};

function formReducer(state: formState = initialState, action: formActions): formState {
	switch (action.type) {
		case formTypes.CHANGE_PROVINCE:
			return {
				...state,
				currentProvince: action.payload,
			};

		default:
			return state;
	}
}

export default formReducer;
