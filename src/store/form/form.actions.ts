import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { RootState } from '../store';
import { User } from '../../api/types';
import { SignUpRequest } from '../../api';
import { formActions, formTypes } from './form.types';

export function changeProvince(province: string): formActions {
	return {
		type: formTypes.CHANGE_PROVINCE,
		payload: province,
	};
}

export function saveFormRequest(): formActions {
	return {
		type: formTypes.SAVE_FORM_REQUEST,
	};
}

export function saveFormSuccess(token: string): formActions {
	return {
		type: formTypes.SAVE_FORM_SUCCESS,
		token,
	};
}

export function saveFormError(error: string): formActions {
	return {
		type: formTypes.SAVE_FORM_FAILURE,
		error,
	};
}

export function saveFormThunk(
	user: User
): ThunkAction<Promise<void>, RootState, unknown, formActions> {
	return async function (dispatch: ThunkDispatch<{}, {}, formActions>) {
		dispatch(saveFormRequest());

		const { token, error } = await SignUpRequest(user);

		if (error) {
			dispatch(saveFormError(error));
			return;
		}

		if (token) {
			dispatch(saveFormSuccess(token));
			return;
		}

		dispatch(saveFormError('Unkown error in request'));
	};
}
