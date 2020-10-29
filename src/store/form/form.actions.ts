import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { RootState } from '../store';
import { User } from '../../api/types';
import { SignUpRequest } from '../../api';
import { FormActions, FormTypes } from './form.types';
import { authenticate } from '../auth/auth.actions';
import { AuthActions } from '../auth/auth.types';

export function changeProvince(province: string): FormActions {
	return {
		type: FormTypes.CHANGE_PROVINCE,
		payload: province,
	};
}

export function saveFormRequest(): FormActions {
	return {
		type: FormTypes.SAVE_FORM_REQUEST,
	};
}

export function saveFormSuccess(token: string): FormActions {
	return {
		type: FormTypes.SAVE_FORM_SUCCESS,
		token,
	};
}

export function saveFormError(error: string): FormActions {
	return {
		type: FormTypes.SAVE_FORM_FAILURE,
		error,
	};
}

export function saveFormThunk(
	user: User,
	onSuccessCallback?: () => void
): ThunkAction<Promise<void>, RootState, unknown, FormActions> {
	return async function (dispatch: ThunkDispatch<{}, {}, FormActions | AuthActions>) {
		dispatch(saveFormRequest());

		const { token, error } = await SignUpRequest(user);

		if (error) {
			dispatch(saveFormError(error));
			return;
		}

		if (token) {
			dispatch(saveFormSuccess(token));
			dispatch(authenticate(true));

			// Save on localstorage the user and the token (result of the request)
			localStorage.setItem('user', JSON.stringify(user));
			localStorage.setItem('token', token);

			if (onSuccessCallback) onSuccessCallback();

			return;
		}

		dispatch(saveFormError('Unkown error in request'));
	};
}
